import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { CLASSES } from '../data/classes';
import { SPECIES } from '../data/species';
import { BACKGROUNDS } from '../data/backgrounds';

const PORTRAITS = ['🧙','🧝','⚔️','🛡️','🏹','🐉','🧜','🦹','🧟','🧚','🔮','🗡️'];

export default function CharacterCreator() {
  const navigate = useNavigate();
  const { actions } = useApp();
  
  const [step, setStep] = useState(1);
  const [character, setCharacter] = useState({
    name: '',
    pronouns: '',
    portrait: '🧙',
    speciesId: null,
    speciesName: '',
    classId: null,
    className: '',
    subclassId: null,
    background: '',
    abilities: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 }
  });

  const [abilityMethod, setAbilityMethod] = useState('Standard Array');
  const [standardArrayAssigned, setStandardArrayAssigned] = useState({});
  const [pointBuyPoints, setPointBuyPoints] = useState(27);
  const [rolledDice, setRolledDice] = useState({ str: null, dex: null, con: null, int: null, wis: null, cha: null });
  const [diceRolls, setDiceRolls] = useState({ str: [], dex: [], con: [], int: [], wis: [], cha: [] });

  const getMod = (score) => Math.floor(((score || 10) - 10) / 2);
  const getModString = (score) => {
    const mod = getMod(score);
    return mod >= 0 ? `+${mod}` : `${mod}`;
  };

  const selectedSpecies = SPECIES.find(s => s.id === character.speciesId);
  const selectedClass = CLASSES.find(c => c.id === character.classId);
  const selectedBackground = BACKGROUNDS.find(b => b.name === character.background);

  const rollStat = (stat) => {
    const rolls = [Math.ceil(Math.random()*6), Math.ceil(Math.random()*6), Math.ceil(Math.random()*6), Math.ceil(Math.random()*6)];
    rolls.sort((a,b) => b-a);
    const sum = rolls[0] + rolls[1] + rolls[2];
    setDiceRolls(prev => ({ ...prev, [stat]: rolls }));
    setRolledDice(prev => ({ ...prev, [stat]: sum }));
    setCharacter(prev => ({ ...prev, abilities: { ...prev.abilities, [stat]: sum } }));
  };

  const handleComplete = () => {
    const hitDie = parseInt((selectedClass?.hitDie || 'd10').replace('d', ''));
    const maxHp = hitDie + getMod(character.abilities.con);

    actions.addCharacter({
      ...character,
      level: 1,
      currentHp: maxHp,
      maxHp: maxHp,
      tempHp: 0,
      ac: 10 + getMod(character.abilities.dex),
      conditions: [],
      exhaustion: 0,
      deathSaves: { successes: 0, failures: 0 },
      currency: { pp: 0, gp: 0, ep: 0, sp: 0, cp: 0 },
      inventory: [],
      weapons: [],
      preparedSpells: [],
      cantrips: [],
      spellSlots: {},
      attunement: [null, null, null],
      notes: '',
      backstory: '',
      personality: { traits: '', ideals: '', bonds: '', flaws: '' },
      appearance: {},
      savingThrowProficiencies: [],
      skillProficiencies: []
    });
    navigate('/characters');
  };

  const renderStepIndicator = () => {
    const steps = ['Identity', 'Species', 'Class', 'Abilities', 'Review'];
    return (
      <div className="flex justify-between items-center mb-8 relative">
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-700 -z-10"></div>
        {steps.map((label, idx) => {
          const s = idx + 1;
          const isActive = s === step;
          const isDone = s < step;
          return (
            <div key={label} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-2 ${isActive ? 'bg-[var(--color-gold-base)] text-black' : isDone ? 'bg-gray-900 border-2 border-[var(--color-gold-base)] text-[var(--color-gold-base)]' : 'bg-gray-800 text-gray-500'}`}>
                {isDone ? '✓' : s}
              </div>
              <span className={`text-xs ${isActive ? 'text-[var(--color-gold-base)] font-bold' : isDone ? 'text-gray-300' : 'text-gray-600'}`}>{label}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-[var(--color-bg-base)] text-gray-100 p-4 max-w-4xl mx-auto w-full overflow-y-auto pb-20">
      <div className="mb-4">
        <Link to="/characters" className="text-gray-400 hover:text-white inline-block">← Cancel</Link>
      </div>
      
      <h1 className="text-4xl text-center text-[var(--color-gold-base)] mb-8" style={{fontFamily: 'var(--font-display)'}}>Create Character</h1>
      
      {renderStepIndicator()}

      <div className="bg-[var(--color-bg-card)] p-6 md:p-8 rounded-lg border border-gray-700 shadow-xl mb-6">
        
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl text-[var(--color-gold-base)] mb-4" style={{fontFamily: 'var(--font-display)'}}>Identity</h2>
            <div>
              <label className="block text-gray-400 mb-2">Character Name</label>
              <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded p-4 text-2xl text-white focus:border-[var(--color-gold-base)] outline-none" 
                value={character.name} onChange={e => setCharacter({...character, name: e.target.value})} placeholder="e.g. Thorin Oakenshield" />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Pronouns (Optional)</label>
              <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white focus:border-[var(--color-gold-base)] outline-none" 
                value={character.pronouns} onChange={e => setCharacter({...character, pronouns: e.target.value})} placeholder="e.g. He/Him, They/Them" />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Portrait</label>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                {PORTRAITS.map(p => (
                  <button key={p} className={`text-4xl p-4 rounded-lg bg-gray-800 hover:bg-gray-700 border-2 transition-all ${character.portrait === p ? 'border-[var(--color-gold-base)] scale-110' : 'border-transparent'}`}
                    onClick={() => setCharacter({...character, portrait: p})}>
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl text-[var(--color-gold-base)] mb-4" style={{fontFamily: 'var(--font-display)'}}>Species</h2>
            <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white mb-4" placeholder="Search species..." />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SPECIES.map(s => {
                const isSelected = character.speciesId === s.id;
                return (
                  <div key={s.id} className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${isSelected ? 'border-[var(--color-gold-base)] bg-[var(--color-gold-base)]/10' : 'border-gray-700 bg-gray-800 hover:border-gray-500'}`}
                    onClick={() => setCharacter({...character, speciesId: s.id, speciesName: s.name})}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{s.name}</h3>
                      <span className="badge-source px-2 py-1 text-xs bg-gray-700 rounded">{s.source || 'PHB'}</span>
                    </div>
                    <div className="text-sm text-gray-400 flex gap-2">
                      <span>Size: {s.size || 'Medium'}</span> • <span>Speed: {s.speed || 30}ft</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-300 italic line-clamp-1">{s.traits?.[0]?.name}: {s.traits?.[0]?.description}</div>
                  </div>
                );
              })}
            </div>

            {selectedSpecies && (
              <div className="mt-6 bg-gray-900 p-4 rounded border border-gray-700">
                <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">{selectedSpecies.name} Traits</h3>
                <div className="space-y-4">
                  {(selectedSpecies.traits || []).map((t, idx) => (
                    <div key={idx}>
                      <span className="font-bold text-[var(--color-gold-base)]">{t.name}: </span>
                      <span className="text-gray-300">{t.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl text-[var(--color-gold-base)] mb-4" style={{fontFamily: 'var(--font-display)'}}>Class & Background</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {CLASSES.map(c => {
                const isSelected = character.classId === c.id;
                return (
                  <div key={c.id} className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${isSelected ? 'border-[var(--color-gold-base)] bg-[var(--color-gold-base)]/10' : 'border-gray-700 bg-gray-800 hover:border-gray-500'}`}
                    onClick={() => setCharacter({...character, classId: c.id, className: c.name, subclassId: null})}>
                    <h3 className="font-bold text-xl mb-1" style={{fontFamily: 'var(--font-display)'}}>{c.name}</h3>
                    <div className="text-sm text-gray-400 mb-2">Hit Die: {c.hitDie} • Primary: {c.primaryAbility}</div>
                    <div className="text-xs text-gray-400 line-clamp-2">{c.description || 'A heroic adventurer.'}</div>
                  </div>
                );
              })}
            </div>

            {selectedClass && (
              <div className="mb-6 bg-gray-900 p-4 rounded border border-gray-700">
                <h3 className="text-lg font-bold mb-2">Level 1 Features</h3>
                <div className="space-y-2">
                  {(selectedClass.features?.[1] || []).map((f, idx) => (
                    <div key={idx}>
                      <span className="font-bold text-[var(--color-gold-base)]">{f.name}: </span>
                      <span className="text-gray-300 text-sm">{f.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedClass?.subclassLevel === 1 && (
              <div className="mb-6">
                <h3 className="font-bold mb-3">Select Subclass</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {(selectedClass.subclasses || []).map(sc => (
                    <div key={sc.id} className={`p-3 rounded border cursor-pointer ${character.subclassId === sc.id ? 'border-[var(--color-gold-base)] bg-gray-800' : 'border-gray-700 bg-gray-900 hover:bg-gray-800'}`}
                      onClick={() => setCharacter({...character, subclassId: sc.id})}>
                      <div className="font-bold">{sc.name}</div>
                      <div className="text-xs text-gray-400">{sc.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="font-bold mb-3">Background</h3>
              <select className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white mb-4" 
                value={character.background} onChange={e => setCharacter({...character, background: e.target.value})}>
                <option value="">Select Background...</option>
                {BACKGROUNDS.map(b => <option key={b.name} value={b.name}>{b.name}</option>)}
              </select>
              
              {selectedBackground && (
                <div className="bg-gray-900 p-4 rounded border border-gray-700 text-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div><span className="font-bold text-gray-400">Skills:</span> {selectedBackground.skills?.join(', ')}</div>
                    <div><span className="font-bold text-gray-400">Tools:</span> {selectedBackground.tools?.join(', ')}</div>
                    <div className="col-span-2"><span className="font-bold text-gray-400">Feat:</span> {selectedBackground.feat}</div>
                    <div className="col-span-2"><span className="font-bold text-gray-400">Equipment:</span> {selectedBackground.equipment}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-2xl text-[var(--color-gold-base)] mb-4" style={{fontFamily: 'var(--font-display)'}}>Ability Scores</h2>
            
            <div className="flex border-b border-gray-700 mb-6">
              {['Standard Array', 'Point Buy', 'Roll Dice'].map(method => (
                <button key={method} className={`px-4 py-2 font-medium ${abilityMethod === method ? 'text-[var(--color-gold-base)] border-b-2 border-[var(--color-gold-base)]' : 'text-gray-400 hover:text-gray-200'}`}
                  onClick={() => setAbilityMethod(method)}>
                  {method}
                </button>
              ))}
            </div>

            {abilityMethod === 'Standard Array' && (
              <div className="space-y-4">
                <div className="flex gap-2 justify-center mb-6">
                  <span className="text-gray-400">Available:</span>
                  {[15,14,13,12,10,8].map(v => (
                    <span key={v} className={`font-bold ${Object.values(standardArrayAssigned).includes(v) ? 'text-gray-600 line-through' : 'text-white'}`}>{v}</span>
                  ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['str', 'dex', 'con', 'int', 'wis', 'cha'].map(stat => (
                    <div key={stat} className="bg-gray-800 p-4 rounded border border-gray-700 flex flex-col items-center">
                      <span className="font-bold text-xl uppercase mb-2">{stat}</span>
                      <select className="bg-gray-900 border border-gray-600 rounded p-2 text-white w-full text-center"
                        value={standardArrayAssigned[stat] || ''}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          const newAssigned = {...standardArrayAssigned};
                          if (e.target.value === '') {
                            delete newAssigned[stat];
                          } else {
                            newAssigned[stat] = val;
                          }
                          setStandardArrayAssigned(newAssigned);
                          setCharacter(prev => ({...prev, abilities: {...prev.abilities, [stat]: val || 10}}));
                        }}>
                        <option value="">--</option>
                        {[15,14,13,12,10,8].map(v => (
                          <option key={v} value={v} disabled={Object.values(standardArrayAssigned).includes(v) && standardArrayAssigned[stat] !== v}>{v}</option>
                        ))}
                      </select>
                      <div className="mt-2 text-[var(--color-gold-base)] font-bold">{getModString(standardArrayAssigned[stat] || 10)}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {abilityMethod === 'Point Buy' && (
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <span className="text-xl">Points Remaining: </span>
                  <span className={`text-2xl font-bold ${pointBuyPoints < 0 ? 'text-red-500' : 'text-[var(--color-gold-base)]'}`}>{pointBuyPoints}</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['str', 'dex', 'con', 'int', 'wis', 'cha'].map(stat => (
                    <div key={stat} className="bg-gray-800 p-4 rounded border border-gray-700 flex flex-col items-center">
                      <span className="font-bold text-xl uppercase mb-2">{stat}</span>
                      <div className="flex items-center gap-3">
                        <button className="w-8 h-8 rounded bg-gray-700 hover:bg-gray-600 font-bold" onClick={() => {
                          if (character.abilities[stat] > 8) {
                            const costs = {8:0,9:1,10:2,11:3,12:4,13:5,14:7,15:9};
                            const oldCost = costs[character.abilities[stat]];
                            const newCost = costs[character.abilities[stat]-1];
                            setCharacter(prev => ({...prev, abilities: {...prev.abilities, [stat]: prev.abilities[stat]-1}}));
                            setPointBuyPoints(p => p + (oldCost - newCost));
                          }
                        }}>-</button>
                        <span className="text-2xl font-bold w-8 text-center">{character.abilities[stat]}</span>
                        <button className="w-8 h-8 rounded bg-gray-700 hover:bg-gray-600 font-bold" onClick={() => {
                          if (character.abilities[stat] < 15) {
                            const costs = {8:0,9:1,10:2,11:3,12:4,13:5,14:7,15:9};
                            const oldCost = costs[character.abilities[stat]];
                            const newCost = costs[character.abilities[stat]+1];
                            setCharacter(prev => ({...prev, abilities: {...prev.abilities, [stat]: prev.abilities[stat]+1}}));
                            setPointBuyPoints(p => p - (newCost - oldCost));
                          }
                        }}>+</button>
                      </div>
                      <div className="mt-2 text-[var(--color-gold-base)] font-bold">{getModString(character.abilities[stat])}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {abilityMethod === 'Roll Dice' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['str', 'dex', 'con', 'int', 'wis', 'cha'].map(stat => (
                  <div key={stat} className="bg-gray-800 p-4 rounded border border-gray-700 flex justify-between items-center">
                    <span className="font-bold text-xl uppercase w-12">{stat}</span>
                    {diceRolls[stat]?.length > 0 ? (
                      <div className="flex gap-1 text-sm text-gray-400">
                        {diceRolls[stat].map((r, i) => (
                          <span key={i} className={i === 3 ? 'line-through text-red-400' : 'text-white'}>{r}</span>
                        ))}
                      </div>
                    ) : (
                      <div className="text-gray-500 italic text-sm">Not rolled</div>
                    )}
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-[var(--color-gold-base)] w-8 text-center">{rolledDice[stat] || '--'}</span>
                      <button className="bg-blue-900 hover:bg-blue-800 px-3 py-1 rounded font-bold" onClick={() => rollStat(stat)}>🎲 Roll</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6">
            <h2 className="text-2xl text-[var(--color-gold-base)] mb-4 text-center" style={{fontFamily: 'var(--font-display)'}}>Review Your Character</h2>
            
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-8xl opacity-10 pointer-events-none">{character.portrait}</div>
              
              <div className="text-center mb-6 relative z-10">
                <div className="text-6xl mb-4 drop-shadow-lg">{character.portrait}</div>
                <h3 className="text-4xl text-[var(--color-gold-base)] mb-1" style={{fontFamily: 'var(--font-display)'}}>{character.name || 'Unnamed Hero'}</h3>
                {character.pronouns && <div className="text-gray-400 text-sm mb-4">{character.pronouns}</div>}
                
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-800 rounded-full border border-gray-600">{character.speciesName || 'Unknown Species'}</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full border border-gray-600">{character.className || 'Unknown Class'}</span>
                  {character.subclassId && <span className="px-3 py-1 bg-gray-800 rounded-full border border-gray-600">{character.subclassId}</span>}
                  <span className="px-3 py-1 bg-gray-800 rounded-full border border-gray-600">{character.background || 'Unknown Background'}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6 relative z-10">
                {['str', 'dex', 'con', 'int', 'wis', 'cha'].map(stat => (
                  <div key={stat} className="bg-black/50 p-3 rounded text-center border border-gray-700">
                    <div className="text-xs text-gray-400 uppercase font-bold">{stat}</div>
                    <div className="text-2xl font-bold my-1">{character.abilities[stat]}</div>
                    <div className="text-[var(--color-gold-base)]">{getModString(character.abilities[stat])}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center relative z-10 bg-black/30 p-4 rounded-lg">
                <div>
                  <div className="text-sm text-gray-400">Max HP</div>
                  <div className="text-2xl font-bold text-[var(--color-crimson-light)]">{parseInt((selectedClass?.hitDie || 'd10').replace('d', '')) + getMod(character.abilities.con)}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Armor Class</div>
                  <div className="text-2xl font-bold text-blue-400">{10 + getMod(character.abilities.dex)}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Initiative</div>
                  <div className="text-2xl font-bold text-green-400">{getModString(character.abilities.dex)}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Speed</div>
                  <div className="text-2xl font-bold text-purple-400">{selectedSpecies?.speed || 30}ft</div>
                </div>
              </div>
            </div>

            <button className="w-full py-4 text-2xl bg-[var(--color-gold-dark)] hover:bg-[var(--color-gold-base)] text-black font-bold rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-yellow-900/50"
              onClick={handleComplete} style={{fontFamily: 'var(--font-display)'}}>
              Enter the World ⚔️
            </button>
          </div>
        )}
      </div>

      <div className="flex justify-between mt-auto">
        <button className={`px-6 py-2 rounded bg-gray-800 hover:bg-gray-700 ${step === 1 ? 'invisible' : ''}`}
          onClick={() => setStep(s => Math.max(1, s-1))}>
          Back
        </button>
        {step < 5 && (
          <button className="px-6 py-2 rounded bg-[var(--color-gold-base)] text-black font-bold hover:bg-[var(--color-gold-light)]"
            onClick={() => setStep(s => Math.min(5, s+1))} disabled={(!character.name && step === 1) || (!character.speciesId && step === 2) || ((!character.classId || !character.background) && step === 3)}>
            Next Step
          </button>
        )}
      </div>
    </div>
  );
}
