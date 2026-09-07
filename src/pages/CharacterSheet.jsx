import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { CLASSES } from '../data/classes';
import { CONDITIONS } from '../data/equipment';

const CharacterSheet = () => {
  const { id } = useParams();
  const { state, actions } = useApp();
  const [activeTab, setActiveTab] = useState('overview');
  
  const character = state.characters?.find(c => c.id === id);

  if (!id || !character) {
    return (
      <div className="page-container">
        <header className="page-header">
          <h1 className="page-title">Characters 🛡️</h1>
          <Link to="/create" className="btn btn-primary">Create New Character</Link>
        </header>
        
        {!state.characters || state.characters.length === 0 ? (
          <div className="empty-state">
            <h3>No characters found</h3>
            <p className="text-muted">Create a new character to get started.</p>
          </div>
        ) : (
          <div className="grid-3">
            {state.characters.map(c => (
              <Link to={`/characters/${c.id}`} key={c.id} className="card" style={{ textDecoration: 'none' }}>
                <h3 style={{ color: 'var(--text-gold)', marginBottom: '0.5rem' }}>{c.name}</h3>
                <p className="text-muted">Level {c.level} {c.species} {c.className}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  const calculateModifier = (score) => Math.floor((score - 10) / 2);
  
  const profBonus = character.level >= 17 ? 6 : 
                    character.level >= 13 ? 5 : 
                    character.level >= 9 ? 4 : 
                    character.level >= 5 ? 3 : 2;

  const handleHpChange = (amount) => {
    actions.updateCharacter(id, { currentHp: Math.min(character.maxHp, Math.max(0, character.currentHp + amount)) });
  };

  const handleLevelUp = () => {
    const classData = CLASSES?.find(c => c.name === character.className);
    const hitDie = classData ? classData.hitDie : 8;
    const conMod = calculateModifier(character.abilityScores.CON);
    const hpIncrease = Math.floor(hitDie / 2) + 1 + conMod; // standard average hp increase
    
    actions.updateCharacter(id, { 
      level: character.level + 1,
      maxHp: character.maxHp + hpIncrease,
      currentHp: character.currentHp + hpIncrease
    });
  };

  const toggleCondition = (condName) => {
    const hasCondition = character.conditions?.includes(condName);
    const newConditions = hasCondition 
      ? character.conditions.filter(c => c !== condName)
      : [...(character.conditions || []), condName];
    actions.updateCharacter(id, { conditions: newConditions });
  };

  const skillsList = [
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

  return (
    <div className="page-container">
      <header className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="page-title">{character.name}</h1>
          <p className="text-muted">
            Level {character.level} {character.species} {character.className} {character.subclass ? `(${character.subclass})` : ''}
          </p>
        </div>
        <button className="btn btn-secondary" onClick={handleLevelUp}>Level Up 🌟</button>
      </header>

      <div className="tabs" style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border-color)', marginBottom: '2rem' }}>
        {['overview', 'spells', 'inventory', 'features', 'notes'].map(tab => (
          <button 
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: activeTab === tab ? 'var(--color-gold-base)' : 'var(--text-muted)',
              padding: '1rem',
              cursor: 'pointer',
              borderBottom: activeTab === tab ? '2px solid var(--color-gold-base)' : 'none',
              textTransform: 'capitalize',
              fontWeight: 'bold'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="grid-3">
          <div style={{ gridColumn: 'span 2' }}>
            <div className="grid-6" style={{ marginBottom: '2rem' }}>
              {['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'].map(stat => {
                const score = character.abilityScores[stat];
                const mod = calculateModifier(score);
                return (
                  <div key={stat} className="stat-box text-center card" style={{ padding: '1rem' }}>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{stat}</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-gold)' }}>
                      {mod >= 0 ? '+' : ''}{mod}
                    </div>
                    <div className="badge" style={{ marginTop: '0.5rem', backgroundColor: 'var(--bg-dark)' }}>
                      {score}
                    </div>
                  </div>
                )
              })}
            </div>
            
            <div className="grid-3" style={{ marginBottom: '2rem' }}>
              <div className="card text-center">
                <div className="text-muted">Armor Class</div>
                <div style={{ fontSize: '2rem', color: 'var(--text-gold)' }}>{character.ac}</div>
              </div>
              <div className="card text-center">
                <div className="text-muted">Initiative</div>
                <div style={{ fontSize: '2rem', color: 'var(--text-gold)' }}>
                  {character.initiative >= 0 ? '+' : ''}{character.initiative}
                </div>
              </div>
              <div className="card text-center">
                <div className="text-muted">Speed</div>
                <div style={{ fontSize: '2rem', color: 'var(--text-gold)' }}>{character.speed} ft</div>
              </div>
            </div>

            <div className="card" style={{ marginBottom: '2rem' }}>
              <h3 className="section-title">Hit Points</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <button className="btn btn-danger" onClick={() => handleHpChange(-1)}>-1</button>
                <div style={{ flex: 1, textAlign: 'center', fontSize: '2rem', color: character.currentHp === 0 ? 'var(--text-danger)' : 'var(--text-primary)' }}>
                  {character.currentHp} / {character.maxHp}
                </div>
                <button className="btn btn-secondary" onClick={() => handleHpChange(1)}>+1</button>
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Temp HP: {character.tempHp || 0}</div>
            </div>

            <div className="card">
              <h3 className="section-title">Conditions</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {(CONDITIONS || []).map(cond => {
                  const isActive = character.conditions?.includes(cond.name);
                  return (
                    <span 
                      key={cond.name}
                      onClick={() => toggleCondition(cond.name)}
                      className="badge"
                      style={{ 
                        cursor: 'pointer',
                        backgroundColor: isActive ? 'var(--color-danger)' : 'var(--bg-dark)',
                        color: isActive ? '#fff' : 'var(--text-muted)',
                        padding: '0.5rem',
                        borderRadius: '4px'
                      }}
                    >
                      {cond.name}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
          
          <div>
            <div className="card" style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 className="section-title" style={{ margin: 0 }}>Proficiency</h3>
                <span className="badge" style={{ backgroundColor: 'var(--color-gold-base)', color: 'var(--bg-dark)' }}>
                  +{profBonus}
                </span>
              </div>
            </div>

            <div className="card">
              <h3 className="section-title">Skills</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {skillsList.map(skill => {
                  const statScore = character.abilityScores[skill.stat];
                  const mod = calculateModifier(statScore);
                  // Assume not proficient for now since not tracked in creator, just show mod
                  return (
                    <div key={skill.name} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--bg-dark)', paddingBottom: '0.25rem' }}>
                      <span className="text-muted">{skill.name} <span style={{ fontSize: '0.7rem' }}>({skill.stat})</span></span>
                      <span style={{ color: 'var(--text-gold)' }}>{mod >= 0 ? '+' : ''}{mod}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'notes' && (
        <div className="card">
          <h3 className="section-title">Character Notes</h3>
          <textarea 
            className="form-textarea" 
            style={{ minHeight: '300px' }}
            value={character.notes || ''}
            onChange={(e) => actions.updateCharacter(id, { notes: e.target.value })}
            placeholder="Write your backstory, campaign notes, or thoughts here..."
          />
        </div>
      )}

      {/* Basic placeholders for other tabs to meet requirements */}
      {activeTab === 'spells' && (
        <div className="card"><h3 className="section-title">Spellbook</h3><p className="text-muted">Spells feature coming soon...</p></div>
      )}
      {activeTab === 'inventory' && (
        <div className="card"><h3 className="section-title">Inventory & Wealth</h3><p className="text-muted">Inventory feature coming soon...</p></div>
      )}
      {activeTab === 'features' && (
        <div className="card"><h3 className="section-title">Class Features</h3><p className="text-muted">Features display coming soon...</p></div>
      )}

    </div>
  );
};

export default CharacterSheet;
