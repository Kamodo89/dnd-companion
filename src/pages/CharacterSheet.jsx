import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { CLASSES } from '../data/classes';
import { SPECIES } from '../data/species';
import { WEAPONS, CONDITIONS } from '../data/equipment';
import { spells } from '../data/spells';

const SKILLS = [
  { name: 'Acrobatics', stat: 'DEX' }, { name: 'Animal Handling', stat: 'WIS' },
  { name: 'Arcana', stat: 'INT' }, { name: 'Athletics', stat: 'STR' },
  { name: 'Deception', stat: 'CHA' }, { name: 'History', stat: 'INT' },
  { name: 'Insight', stat: 'WIS' }, { name: 'Intimidation', stat: 'CHA' },
  { name: 'Investigation', stat: 'INT' }, { name: 'Medicine', stat: 'WIS' },
  { name: 'Nature', stat: 'INT' }, { name: 'Perception', stat: 'WIS' },
  { name: 'Performance', stat: 'CHA' }, { name: 'Persuasion', stat: 'CHA' },
  { name: 'Religion', stat: 'INT' }, { name: 'Sleight of Hand', stat: 'DEX' },
  { name: 'Stealth', stat: 'DEX' }, { name: 'Survival', stat: 'WIS' }
];

const SAVES = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

export default function CharacterSheet() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, actions } = useApp();
  const [activeTab, setActiveTab] = useState('Overview');
  const [spellSearch, setSpellSearch] = useState('');
  
  const character = state.characters?.find(c => c.id === id);
  
  if (!character) {
    return <div className="p-4 text-center">Character not found. <Link to="/characters" className="text-[var(--color-gold-base)]">Go back</Link></div>;
  }

  const update = (field, value) => {
    actions.updateCharacter({ ...character, [field]: value });
  };
  
  const getMod = (score) => Math.floor(((score || 10) - 10) / 2);
  const getModString = (score) => {
    const mod = getMod(score);
    return mod >= 0 ? `+${mod}` : `${mod}`;
  };

  const profBonus = Math.ceil((character.level || 1) / 4) + 1;
  const classData = CLASSES?.find(c => c.id === character.classId) || {};
  const speciesData = SPECIES?.find(s => s.id === character.speciesId) || {};

  const maxHP = character.maxHp || 10;
  const hpPercent = (character.currentHp / maxHP) * 100;
  const hpColor = hpPercent > 60 ? 'bg-green-600' : hpPercent > 30 ? 'bg-yellow-500' : 'bg-red-600';

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this character?')) {
      actions.deleteCharacter(id);
      navigate('/characters');
    }
  };

  const handleLevelUp = () => {
    if (window.confirm('Level up character?')) {
      update('level', (character.level || 1) + 1);
    }
  };

  const toggleCondition = (condName) => {
    const conds = character.conditions || [];
    if (conds.includes(condName)) {
      update('conditions', conds.filter(c => c !== condName));
    } else {
      update('conditions', [...conds, condName]);
    }
  };

  const hasSpellcasting = classData?.spellcasting !== null && classData?.spellcasting !== undefined;
  
  const TABS = ['Overview', 'Combat', 'Inventory', 'Features', 'Notes'];
  if (hasSpellcasting) TABS.splice(2, 0, 'Spells');

  return (
    <div className="flex flex-col h-full bg-[var(--color-bg-base)] text-gray-100 p-4 max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <Link to="/characters" className="text-gray-400 hover:text-white mb-2 inline-block">← Back</Link>
          <h1 className="text-4xl text-[var(--color-gold-base)] mb-2" style={{fontFamily: 'var(--font-display)'}}>{character.name}</h1>
          <div className="flex gap-2 items-center flex-wrap">
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm border border-gray-700">{speciesData.name || character.speciesName}</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm border border-gray-700">{classData.name || character.className}</span>
            {character.subclassId && <span className="px-3 py-1 bg-gray-800 rounded-full text-sm border border-gray-700">{character.subclassId}</span>}
            <span className="px-3 py-1 bg-[var(--color-gold-base)] text-black rounded-full text-sm font-bold">Level {character.level || 1}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={handleLevelUp} className="p-2 bg-[var(--color-gold-dark)] hover:bg-[var(--color-gold-base)] text-black rounded" title="Level Up">🌟</button>
          <button onClick={handleDelete} className="p-2 bg-[var(--color-crimson-light)] hover:bg-red-500 text-white rounded" title="Delete">🗑️</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700 mb-6 overflow-x-auto">
        {TABS.map(tab => (
          <button
            key={tab}
            className={`px-6 py-3 font-medium whitespace-nowrap ${activeTab === tab ? 'text-[var(--color-gold-base)] border-b-2 border-[var(--color-gold-base)]' : 'text-gray-400 hover:text-gray-200'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'Overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                {SAVES.map(stat => {
                  const score = character.abilities?.[stat.toLowerCase()] || 10;
                  return (
                    <div key={stat} className="stat-box bg-[var(--color-bg-card)] p-4 rounded-lg border border-gray-700 text-center flex flex-col items-center">
                      <span className="text-sm text-gray-400 font-bold">{stat}</span>
                      <span className="text-3xl my-1" style={{fontFamily: 'var(--font-display)'}}>{score}</span>
                      <span className="text-xl text-[var(--color-gold-base)]">{getModString(score)}</span>
                    </div>
                  );
                })}
              </div>
              
              <div className="bg-[var(--color-bg-card)] p-4 rounded-lg border border-gray-700">
                <h3 className="font-bold text-lg mb-3 border-b border-gray-700 pb-2">Saving Throws</h3>
                <div className="grid grid-cols-2 gap-2">
                  {SAVES.map(stat => {
                    const isProf = character.savingThrowProficiencies?.includes(stat);
                    const total = getMod(character.abilities?.[stat.toLowerCase()]) + (isProf ? profBonus : 0);
                    return (
                      <div key={stat} className="flex items-center gap-2 cursor-pointer" onClick={() => {
                        const profs = character.savingThrowProficiencies || [];
                        update('savingThrowProficiencies', isProf ? profs.filter(p => p !== stat) : [...profs, stat]);
                      }}>
                        <div className={`w-3 h-3 rounded-full border ${isProf ? 'bg-[var(--color-gold-base)] border-[var(--color-gold-base)]' : 'border-gray-500'}`}></div>
                        <span className="w-10 text-gray-400">{stat}</span>
                        <span className="font-bold">{total >= 0 ? `+${total}` : total}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-[var(--color-bg-card)] p-4 rounded-lg border border-gray-700">
                <h3 className="font-bold text-lg mb-3 border-b border-gray-700 pb-2">Skills</h3>
                <div className="space-y-1">
                  {SKILLS.map(skill => {
                    const isProf = character.skillProficiencies?.includes(skill.name);
                    const total = getMod(character.abilities?.[skill.stat.toLowerCase()]) + (isProf ? profBonus : 0);
                    return (
                      <div key={skill.name} className="flex items-center gap-3 cursor-pointer py-1 hover:bg-gray-800 rounded px-2" onClick={() => {
                        const profs = character.skillProficiencies || [];
                        update('skillProficiencies', isProf ? profs.filter(p => p !== skill.name) : [...profs, skill.name]);
                      }}>
                        <div className={`w-3 h-3 rounded-full border flex-shrink-0 ${isProf ? 'bg-[var(--color-gold-base)] border-[var(--color-gold-base)]' : 'border-gray-500'}`}></div>
                        <span className="w-8 text-xs text-gray-500">{skill.stat}</span>
                        <span className="flex-1">{skill.name}</span>
                        <span className="font-bold">{total >= 0 ? `+${total}` : total}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="bg-[var(--color-bg-card)] p-6 rounded-lg border border-gray-700">
                <div className="text-center mb-4">
                  <span className="text-5xl text-[var(--color-crimson-light)] font-bold" style={{fontFamily: 'var(--font-display)'}}>{character.currentHp}</span>
                  <span className="text-xl text-gray-400"> / {maxHP} HP</span>
                </div>
                
                <div className="w-full bg-gray-800 rounded-full h-4 mb-6 border border-gray-700 overflow-hidden">
                  <div className={`h-full ${hpColor} transition-all duration-300`} style={{ width: `${Math.min(100, Math.max(0, hpPercent))}%` }}></div>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {[-10, -5, -1, 1, 5, 10].map(val => (
                    <button key={val} 
                      className={`px-3 py-1 rounded font-bold ${val < 0 ? 'bg-red-900/50 hover:bg-red-800 text-red-200' : 'bg-green-900/50 hover:bg-green-800 text-green-200'}`}
                      onClick={() => update('currentHp', Math.min(maxHP, Math.max(0, (character.currentHp || 0) + val)))}
                    >
                      {val > 0 ? `+${val}` : val}
                    </button>
                  ))}
                  <input type="number" className="w-16 bg-gray-900 border border-gray-700 rounded text-center" 
                    placeholder="HP" 
                    onBlur={e => {
                      if(e.target.value) {
                        update('currentHp', Math.min(maxHP, Math.max(0, parseInt(e.target.value))));
                        e.target.value = '';
                      }
                    }} 
                    onKeyDown={e => {
                      if(e.key === 'Enter') e.target.blur();
                    }}
                  />
                </div>
                
                <div className="flex justify-between items-center border-t border-gray-700 pt-4">
                  <span>Temp HP</span>
                  <div className="flex items-center gap-2">
                    <button className="px-2 bg-gray-700 rounded" onClick={() => update('tempHp', Math.max(0, (character.tempHp || 0) - 1))}>-</button>
                    <span className="font-bold w-6 text-center">{character.tempHp || 0}</span>
                    <button className="px-2 bg-gray-700 rounded" onClick={() => update('tempHp', (character.tempHp || 0) + 1)}>+</button>
                  </div>
                </div>
                
                {(character.currentHp === 0) && (
                  <div className="mt-4 p-4 bg-red-900/20 border border-red-900 rounded-lg">
                    <h4 className="text-center font-bold text-red-400 mb-2">Death Saves</h4>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-1">
                        <span className="mr-2 text-sm">Successes</span>
                        {[1, 2, 3].map(i => (
                          <div key={`succ-${i}`} 
                            className={`w-4 h-4 rounded-full border cursor-pointer ${i <= (character.deathSaves?.successes || 0) ? 'bg-green-500 border-green-500' : 'border-gray-500'}`}
                            onClick={() => {
                              const ds = character.deathSaves || { successes:0, failures:0 };
                              update('deathSaves', { ...ds, successes: i === ds.successes ? i - 1 : i });
                            }}
                          ></div>
                        ))}
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="mr-2 text-sm">Failures</span>
                        {[1, 2, 3].map(i => (
                          <div key={`fail-${i}`} 
                            className={`w-4 h-4 rounded-full border cursor-pointer ${i <= (character.deathSaves?.failures || 0) ? 'bg-red-500 border-red-500' : 'border-gray-500'}`}
                            onClick={() => {
                              const ds = character.deathSaves || { successes:0, failures:0 };
                              update('deathSaves', { ...ds, failures: i === ds.failures ? i - 1 : i });
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="stat-box bg-[var(--color-bg-card)] p-3 rounded-lg border border-gray-700 text-center">
                  <div className="text-xs text-gray-400 font-bold mb-1">AC</div>
                  <div className="text-2xl font-bold">{character.ac || 10}</div>
                </div>
                <div className="stat-box bg-[var(--color-bg-card)] p-3 rounded-lg border border-gray-700 text-center">
                  <div className="text-xs text-gray-400 font-bold mb-1">Initiative</div>
                  <div className="text-2xl font-bold">{getModString(character.abilities?.dex)}</div>
                </div>
                <div className="stat-box bg-[var(--color-bg-card)] p-3 rounded-lg border border-gray-700 text-center">
                  <div className="text-xs text-gray-400 font-bold mb-1">Speed</div>
                  <div className="text-2xl font-bold">{speciesData?.speed || 30}</div>
                </div>
                <div className="stat-box bg-[var(--color-bg-card)] p-3 rounded-lg border border-gray-700 text-center">
                  <div className="text-xs text-gray-400 font-bold mb-1">Prof Bonus</div>
                  <div className="text-2xl font-bold">+{profBonus}</div>
                </div>
              </div>

              <div className="bg-[var(--color-bg-card)] p-4 rounded-lg border border-gray-700">
                <h3 className="font-bold text-lg mb-3 border-b border-gray-700 pb-2">Conditions</h3>
                <div className="flex flex-wrap gap-2">
                  {CONDITIONS?.map(cond => {
                    const isActive = character.conditions?.includes(cond.name);
                    return (
                      <button key={cond.name}
                        className={`px-3 py-1 rounded-full text-sm font-medium border ${isActive ? 'bg-[var(--color-crimson-light)] border-[var(--color-crimson-light)] text-white' : 'bg-gray-800 border-gray-600 text-gray-400 hover:border-gray-400'}`}
                        onClick={() => toggleCondition(cond.name)}
                      >
                        {cond.name}
                      </button>
                    );
                  })}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">Exhaustion</span>
                    <div className="flex items-center gap-2">
                      <button className="px-2 bg-gray-700 rounded" onClick={() => update('exhaustion', Math.max(0, (character.exhaustion || 0) - 1))}>-</button>
                      <span className="font-bold w-6 text-center text-[var(--color-crimson-light)]">{character.exhaustion || 0}</span>
                      <button className="px-2 bg-gray-700 rounded" onClick={() => update('exhaustion', Math.min(6, (character.exhaustion || 0) + 1))}>+</button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400 italic">
                    {character.exhaustion === 1 && '-2 to all d20 tests'}
                    {character.exhaustion === 2 && '-4 to all d20 tests'}
                    {character.exhaustion === 3 && '-6 to all d20 tests'}
                    {character.exhaustion === 4 && '-8 to all d20 tests'}
                    {character.exhaustion === 5 && '-10 to all d20 tests, Speed halved'}
                    {character.exhaustion === 6 && 'Death'}
                    {(character.exhaustion === 0 || !character.exhaustion) && 'None'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Combat' && (
          <div className="space-y-6">
            <div className="bg-[var(--color-bg-card)] p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-xl mb-4 border-b border-gray-700 pb-2">Weapons</h3>
              <div className="space-y-3 mb-6">
                {(character.weapons || []).map((weapon, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-gray-800 p-3 rounded border border-gray-700">
                    <div>
                      <div className="font-bold text-lg text-[var(--color-gold-base)]">{weapon.name} {weapon.mastery && <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded ml-2 align-middle">Mastery</span>}</div>
                      <div className="text-sm text-gray-400">{weapon.damage} {weapon.damageType}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-xs text-gray-400">Atk Bonus</div>
                        <div className="font-bold">{weapon.attackBonus >= 0 ? `+${weapon.attackBonus}` : weapon.attackBonus}</div>
                      </div>
                      <button className="text-red-500 hover:text-red-400 p-2" onClick={() => {
                        const w = [...character.weapons];
                        w.splice(idx, 1);
                        update('weapons', w);
                      }}>🗑️</button>
                    </div>
                  </div>
                ))}
                {(!character.weapons || character.weapons.length === 0) && (
                  <div className="text-center text-gray-500 py-4">No weapons added.</div>
                )}
              </div>
              
              <div className="flex gap-2">
                <select id="weaponSelect" className="flex-1 bg-gray-900 border border-gray-700 rounded p-2 text-white">
                  <option value="">Select a weapon to add...</option>
                  {WEAPONS?.map(w => <option key={w.name} value={w.name}>{w.name}</option>)}
                </select>
                <button className="bg-[var(--color-gold-base)] text-black font-bold px-4 py-2 rounded" onClick={() => {
                  const select = document.getElementById('weaponSelect');
                  const wName = select.value;
                  if (!wName) return;
                  const wData = WEAPONS.find(w => w.name === wName);
                  if (wData) {
                    const strMod = getMod(character.abilities?.str);
                    const dexMod = getMod(character.abilities?.dex);
                    const atkMod = wData.properties?.includes('Finesse') || wData.category.includes('Ranged') ? Math.max(strMod, dexMod) : strMod;
                    const bonus = atkMod + profBonus; // assuming proficiency
                    update('weapons', [...(character.weapons || []), {
                      name: wData.name,
                      damage: wData.damage,
                      damageType: wData.damageType,
                      mastery: false,
                      attackBonus: bonus
                    }]);
                    select.value = '';
                  }
                }}>Add Weapon</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Spells' && hasSpellcasting && (
          <div className="space-y-6">
            {character.concentratingOn && (
              <div className="bg-blue-900/30 border border-blue-500 p-4 rounded-lg flex justify-between items-center animate-pulse">
                <div>
                  <span className="text-blue-400 font-bold mr-2">Concentrating on:</span>
                  <span className="text-xl font-bold">{character.concentratingOn}</span>
                </div>
                <button className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded font-bold" onClick={() => update('concentratingOn', null)}>Drop Concentration</button>
              </div>
            )}
          
            <div className="bg-[var(--color-bg-card)] p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-xl mb-4 border-b border-gray-700 pb-2">Spell Slots</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1,2,3,4,5,6,7,8,9].map(level => {
                  const slots = character.spellSlots?.[level] || { max: 0, used: 0 };
                  if (slots.max === 0) return null; // Don't show levels with 0 max slots
                  return (
                    <div key={level} className="flex justify-between items-center bg-gray-800 p-3 rounded">
                      <span className="font-bold">Level {level}</span>
                      <div className="flex gap-1">
                        {Array.from({length: slots.max}).map((_, i) => (
                          <div key={i} 
                            className={`w-5 h-5 rounded-full border-2 cursor-pointer ${i < slots.used ? 'bg-gray-600 border-gray-500' : 'bg-[var(--color-gold-base)] border-[var(--color-gold-base)] shadow-[0_0_8px_rgba(255,215,0,0.5)]'}`}
                            onClick={() => {
                              const newSlots = { ...character.spellSlots };
                              if (!newSlots[level]) newSlots[level] = { ...slots };
                              newSlots[level].used = i < slots.used ? i : i + 1;
                              update('spellSlots', newSlots);
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-[var(--color-bg-card)] p-6 rounded-lg border border-gray-700">
                <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                  <h3 className="font-bold text-xl">Cantrips</h3>
                </div>
                <div className="space-y-2 mb-4">
                  {(character.cantrips || []).map((spell, idx) => (
                    <div key={idx} className="bg-gray-800 p-3 rounded border border-gray-700 flex justify-between items-center">
                      <span className="font-bold text-[var(--color-gold-base)]">{spell.name}</span>
                      <button className="text-red-500 hover:text-red-400" onClick={() => {
                        const c = [...character.cantrips]; c.splice(idx, 1); update('cantrips', c);
                      }}>🗑️</button>
                    </div>
                  ))}
                  {(!character.cantrips || character.cantrips.length === 0) && <div className="text-gray-500 text-sm">No cantrips known.</div>}
                </div>
                <div className="flex gap-2">
                  <input type="text" id="addCantripInput" className="flex-1 bg-gray-900 border border-gray-700 rounded p-2 text-white" placeholder="Cantrip name..." />
                  <button className="bg-[var(--color-gold-base)] text-black px-3 py-1 rounded font-bold" onClick={() => {
                    const input = document.getElementById('addCantripInput');
                    if (input.value) {
                      update('cantrips', [...(character.cantrips || []), { name: input.value }]);
                      input.value = '';
                    }
                  }}>Add</button>
                </div>
              </div>

              <div className="bg-[var(--color-bg-card)] p-6 rounded-lg border border-gray-700">
                <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                  <h3 className="font-bold text-xl">Prepared Spells</h3>
                </div>
                <div className="space-y-3 mb-4">
                  {(character.preparedSpells || []).map((spell, idx) => (
                    <div key={idx} className="bg-gray-800 p-3 rounded border border-gray-700">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-bold text-lg text-[var(--color-gold-base)]">{spell.name}</div>
                          <div className="flex gap-2 text-xs mt-1">
                            <span className="bg-gray-700 px-2 py-0.5 rounded">Level {spell.level}</span>
                            <span className="bg-gray-700 px-2 py-0.5 rounded">{spell.school}</span>
                            {spell.concentration && <span className="bg-blue-900 text-blue-300 px-2 py-0.5 rounded cursor-pointer" onClick={() => update('concentratingOn', spell.name)}>C</span>}
                            {spell.ritual && <span className="bg-green-900 text-green-300 px-2 py-0.5 rounded">R</span>}
                          </div>
                        </div>
                        <button className="text-red-500 hover:text-red-400" onClick={() => {
                          const s = [...character.preparedSpells]; s.splice(idx, 1); update('preparedSpells', s);
                        }}>🗑️</button>
                      </div>
                    </div>
                  ))}
                  {(!character.preparedSpells || character.preparedSpells.length === 0) && <div className="text-gray-500 text-sm">No spells prepared.</div>}
                </div>
                
                <div className="flex gap-2 flex-col">
                  <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white mb-2" placeholder="Search spells..." value={spellSearch} onChange={(e) => setSpellSearch(e.target.value)} />
                  {spellSearch && (
                    <div className="max-h-40 overflow-y-auto border border-gray-700 rounded bg-gray-900 p-1">
                      {spells?.filter(s => s.name.toLowerCase().includes(spellSearch.toLowerCase())).slice(0, 5).map(s => (
                        <div key={s.name} className="flex justify-between items-center p-2 hover:bg-gray-800 cursor-pointer" onClick={() => {
                          update('preparedSpells', [...(character.preparedSpells || []), { name: s.name, level: s.level, school: s.school, concentration: s.concentration, ritual: s.ritual }]);
                          setSpellSearch('');
                        }}>
                          <span>{s.name} <span className="text-xs text-gray-500 ml-2">Lvl {s.level}</span></span>
                          <span className="text-xs bg-[var(--color-gold-base)] text-black px-2 py-1 rounded">Add</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Inventory' && (
          <div className="space-y-6">
            <div className="grid grid-cols-5 gap-4">
              {['pp', 'gp', 'ep', 'sp', 'cp'].map(coin => (
                <div key={coin} className="bg-[var(--color-bg-card)] p-3 rounded-lg border border-gray-700 text-center flex flex-col items-center">
                  <label className="text-xs text-gray-400 font-bold uppercase mb-2">{coin}</label>
                  <input type="number" 
                    className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-center text-xl text-[var(--color-gold-base)] font-bold" 
                    value={character.currency?.[coin] || 0}
                    onChange={(e) => {
                      const c = { ...(character.currency || { pp:0, gp:0, ep:0, sp:0, cp:0 }) };
                      c[coin] = parseInt(e.target.value) || 0;
                      update('currency', c);
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="bg-[var(--color-bg-card)] p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-xl mb-4 border-b border-gray-700 pb-2">Attunement</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[0, 1, 2].map(i => (
                  <div key={i} className="bg-gray-800 p-4 rounded border border-gray-700 flex flex-col gap-2">
                    <span className="text-sm text-gray-400">Slot {i+1}</span>
                    <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white" 
                      placeholder="Magic Item..."
                      value={character.attunement?.[i] || ''}
                      onChange={(e) => {
                        const a = [...(character.attunement || [null, null, null])];
                        a[i] = e.target.value;
                        update('attunement', a);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[var(--color-bg-card)] p-6 rounded-lg border border-gray-700">
              <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                <h3 className="font-bold text-xl">Inventory</h3>
                <span className="text-gray-400 text-sm">
                  Total Weight: {(character.inventory || []).reduce((acc, item) => acc + (parseFloat(item.weight) * parseInt(item.qty || 1) || 0), 0)} lbs
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700 text-gray-400 text-sm">
                      <th className="py-2 px-3">Item Name</th>
                      <th className="py-2 px-3 w-20">Qty</th>
                      <th className="py-2 px-3 w-24">Weight</th>
                      <th className="py-2 px-3">Notes</th>
                      <th className="py-2 px-3 w-12"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {(character.inventory || []).map((item, idx) => (
                      <tr key={idx} className="border-b border-gray-800">
                        <td className="py-2 px-3"><input type="text" className="w-full bg-transparent border-none p-1 text-white" value={item.name} onChange={(e) => { const i=[...character.inventory]; i[idx].name = e.target.value; update('inventory', i); }} /></td>
                        <td className="py-2 px-3"><input type="number" className="w-full bg-transparent border-none p-1 text-white text-center" value={item.qty} onChange={(e) => { const i=[...character.inventory]; i[idx].qty = parseInt(e.target.value); update('inventory', i); }} /></td>
                        <td className="py-2 px-3"><input type="number" className="w-full bg-transparent border-none p-1 text-white text-center" value={item.weight} onChange={(e) => { const i=[...character.inventory]; i[idx].weight = parseFloat(e.target.value); update('inventory', i); }} /></td>
                        <td className="py-2 px-3"><input type="text" className="w-full bg-transparent border-none p-1 text-gray-400 text-sm" value={item.notes} onChange={(e) => { const i=[...character.inventory]; i[idx].notes = e.target.value; update('inventory', i); }} /></td>
                        <td className="py-2 px-3"><button className="text-red-500 hover:text-red-400" onClick={() => { const i=[...character.inventory]; i.splice(idx, 1); update('inventory', i); }}>🗑️</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button className="mt-4 w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded border border-gray-700" onClick={() => update('inventory', [...(character.inventory || []), { name: '', qty: 1, weight: 0, notes: '' }])}>+ Add Item</button>
            </div>
          </div>
        )}

        {activeTab === 'Features' && (
          <div className="space-y-6">
            <div className="bg-[var(--color-bg-card)] p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-2xl text-[var(--color-gold-base)] mb-4 border-b border-gray-700 pb-2">Species Traits: {speciesData.name || character.speciesName}</h3>
              <div className="space-y-4">
                {(speciesData.traits || []).map((trait, idx) => (
                  <div key={idx} className="bg-gray-800 p-4 rounded border border-gray-700">
                    <h4 className="font-bold text-lg mb-2">{trait.name}</h4>
                    <p className="text-sm text-gray-300 whitespace-pre-line">{trait.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[var(--color-bg-card)] p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-2xl text-[var(--color-gold-base)] mb-4 border-b border-gray-700 pb-2">Class Features: {classData.name || character.className}</h3>
              <div className="space-y-6">
                {Object.keys(classData.features || {})
                  .map(Number)
                  .filter(level => level <= (character.level || 1))
                  .sort((a, b) => b - a)
                  .map(level => (
                    <div key={level}>
                      <h4 className="font-bold text-xl mb-3 text-gray-400 border-b border-gray-800 pb-1">Level {level}</h4>
                      <div className="space-y-4 pl-4">
                        {(classData.features[level] || []).map((feature, idx) => (
                          <div key={idx} className="bg-gray-800 p-4 rounded border border-gray-700">
                            <h5 className="font-bold text-lg mb-2">{feature.name}</h5>
                            <p className="text-sm text-gray-300 whitespace-pre-line">{feature.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Notes' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-[var(--color-bg-card)] p-6 rounded-lg border border-gray-700">
                <h3 className="font-bold text-xl mb-4 border-b border-gray-700 pb-2">General Notes</h3>
                <textarea 
                  className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white min-h-[300px]"
                  value={character.notes || ''}
                  onChange={(e) => update('notes', e.target.value)}
                  placeholder="Journal entries, campaign notes, important NPCs..."
                ></textarea>
              </div>
              
              <div className="bg-[var(--color-bg-card)] p-6 rounded-lg border border-gray-700">
                <h3 className="font-bold text-xl mb-4 border-b border-gray-700 pb-2">Appearance</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Age', 'Height', 'Weight', 'Eyes', 'Hair', 'Skin'].map(attr => (
                    <div key={attr}>
                      <label className="block text-xs text-gray-400 font-bold uppercase mb-1">{attr}</label>
                      <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white" 
                        value={character.appearance?.[attr.toLowerCase()] || ''}
                        onChange={(e) => {
                          const a = { ...(character.appearance || {}) };
                          a[attr.toLowerCase()] = e.target.value;
                          update('appearance', a);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[var(--color-bg-card)] p-6 rounded-lg border border-gray-700">
                <h3 className="font-bold text-xl mb-4 border-b border-gray-700 pb-2">Personality</h3>
                <div className="space-y-4">
                  {['Traits', 'Ideals', 'Bonds', 'Flaws'].map(attr => (
                    <div key={attr}>
                      <label className="block text-sm text-[var(--color-gold-base)] font-bold mb-1">{attr}</label>
                      <textarea className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white min-h-[80px]" 
                        value={character.personality?.[attr.toLowerCase()] || ''}
                        onChange={(e) => {
                          const p = { ...(character.personality || {}) };
                          p[attr.toLowerCase()] = e.target.value;
                          update('personality', p);
                        }}
                      ></textarea>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[var(--color-bg-card)] p-6 rounded-lg border border-gray-700">
                <h3 className="font-bold text-xl mb-4 border-b border-gray-700 pb-2">Backstory</h3>
                <textarea 
                  className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white min-h-[200px]"
                  value={character.backstory || ''}
                  onChange={(e) => update('backstory', e.target.value)}
                  placeholder="Where did you come from? Why are you adventuring?"
                ></textarea>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
