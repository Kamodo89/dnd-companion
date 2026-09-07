import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { SPECIES } from '../data/species';
import { CLASSES } from '../data/classes';
import { BACKGROUNDS } from '../data/backgrounds';

const CharacterCreator = () => {
  const { actions } = useApp();
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [character, setCharacter] = useState({
    name: '',
    pronouns: '',
    species: '',
    className: '',
    subclass: '',
    background: '',
    abilityScores: {
      STR: 8, DEX: 8, CON: 8, INT: 8, WIS: 8, CHA: 8
    },
    level: 1,
  });

  const [scoreMethod, setScoreMethod] = useState('standard'); // standard, pointbuy, roll
  const standardArray = [15, 14, 13, 12, 10, 8];
  
  const updateChar = (field, value) => {
    setCharacter(prev => ({ ...prev, [field]: value }));
  };

  const updateScore = (ability, val) => {
    setCharacter(prev => ({
      ...prev,
      abilityScores: {
        ...prev.abilityScores,
        [ability]: parseInt(val, 10) || 8
      }
    }));
  };

  const calculateModifier = (score) => Math.floor((score - 10) / 2);

  const handleNext = () => setStep(s => Math.min(s + 1, 5));
  const handlePrev = () => setStep(s => Math.max(s - 1, 1));

  const handleCreate = () => {
    const classData = CLASSES?.find(c => c.name === character.className);
    const hitDie = classData ? classData.hitDie : 8;
    const conMod = calculateModifier(character.abilityScores.CON);
    const maxHp = hitDie + conMod;
    const dexMod = calculateModifier(character.abilityScores.DEX);
    const ac = 10 + dexMod;
    
    const newChar = {
      ...character,
      id: Date.now().toString(),
      maxHp: maxHp,
      currentHp: maxHp,
      tempHp: 0,
      ac: ac,
      initiative: dexMod,
      speed: 30, // Default, would depend on species
      proficiencyBonus: 2,
      inventory: [],
      spells: [],
      conditions: [],
      notes: ''
    };
    
    actions.addCharacter(newChar);
    navigate(`/characters/${newChar.id}`);
  };

  const renderStepIndicator = () => (
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
      {[1, 2, 3, 4, 5].map(s => (
        <div key={s} className="badge" style={{ 
          opacity: step === s ? 1 : 0.5, 
          backgroundColor: step === s ? 'var(--color-gold-base)' : 'var(--bg-card)',
          color: step === s ? 'var(--bg-card)' : 'var(--text-gold)',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontWeight: 'bold'
        }}>
          Step {s}
        </div>
      ))}
    </div>
  );

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">Forge Your Legend ⚔️</h1>
        <p className="text-muted">D&D 5.5e (2024) Character Creator</p>
      </header>
      
      {renderStepIndicator()}
      
      <div className="card" style={{ padding: '2rem' }}>
        {step === 1 && (
          <div>
            <h2 className="section-title">Who are you?</h2>
            <div className="form-group">
              <label className="form-label">Character Name</label>
              <input 
                className="form-input" 
                type="text" 
                value={character.name} 
                onChange={(e) => updateChar('name', e.target.value)} 
                placeholder="e.g. Orym of the Air Ashari"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Pronouns</label>
              <input 
                className="form-input" 
                type="text" 
                value={character.pronouns} 
                onChange={(e) => updateChar('pronouns', e.target.value)} 
                placeholder="e.g. He/Him"
              />
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div>
            <h2 className="section-title">Select Species</h2>
            <div className="grid-3">
              {(SPECIES || []).map(sp => (
                <div 
                  key={sp.name} 
                  className="card" 
                  style={{ 
                    cursor: 'pointer', 
                    border: character.species === sp.name ? '2px solid var(--color-gold-base)' : 'none' 
                  }}
                  onClick={() => updateChar('species', sp.name)}
                >
                  <h3 style={{ color: 'var(--text-gold)', marginBottom: '0.5rem' }}>{sp.name}</h3>
                  <p className="text-muted" style={{ fontSize: '0.875rem' }}>{sp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div>
            <h2 className="section-title">Select Class</h2>
            <div className="grid-3" style={{ marginBottom: '2rem' }}>
              {(CLASSES || []).map(cls => (
                <div 
                  key={cls.name} 
                  className="card" 
                  style={{ 
                    cursor: 'pointer', 
                    border: character.className === cls.name ? '2px solid var(--color-gold-base)' : 'none' 
                  }}
                  onClick={() => {
                    updateChar('className', cls.name);
                    updateChar('subclass', '');
                  }}
                >
                  <h3 style={{ color: 'var(--text-gold)', marginBottom: '0.5rem' }}>{cls.name}</h3>
                  <p className="text-muted" style={{ fontSize: '0.875rem' }}>Hit Die: d{cls.hitDie}</p>
                </div>
              ))}
            </div>
            
            {character.className && CLASSES?.find(c => c.name === character.className)?.subclassLevel === 1 && (
              <div>
                <h3 className="section-title">Select Subclass (Level 1)</h3>
                <div className="form-group">
                  <select 
                    className="form-select" 
                    value={character.subclass} 
                    onChange={(e) => updateChar('subclass', e.target.value)}
                  >
                    <option value="">-- Choose Subclass --</option>
                    {(CLASSES?.find(c => c.name === character.className)?.subclasses || []).map(sub => (
                      <option key={sub} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        )}
        
        {step === 4 && (
          <div>
            <h2 className="section-title">Background & Ability Scores</h2>
            
            <div className="form-group" style={{ marginBottom: '2rem' }}>
              <label className="form-label">Select Background</label>
              <select 
                className="form-select" 
                value={character.background} 
                onChange={(e) => updateChar('background', e.target.value)}
              >
                <option value="">-- Choose Background --</option>
                {(BACKGROUNDS || []).map(bg => (
                  <option key={bg.name} value={bg.name}>{bg.name}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Ability Score Generation</label>
              <select className="form-select" value={scoreMethod} onChange={(e) => setScoreMethod(e.target.value)}>
                <option value="standard">Standard Array</option>
                <option value="pointbuy">Point Buy</option>
                <option value="roll">Roll</option>
              </select>
            </div>
            
            {scoreMethod === 'standard' && (
              <p className="text-muted" style={{ marginBottom: '1rem' }}>Available scores: {standardArray.join(', ')}</p>
            )}
            
            <div className="grid-6">
              {['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'].map(stat => (
                <div key={stat} className="stat-box text-center">
                  <label className="form-label">{stat}</label>
                  <input 
                    className="form-input text-center" 
                    type="number" 
                    value={character.abilityScores[stat]} 
                    onChange={(e) => updateScore(stat, e.target.value)}
                  />
                  <div className="text-muted" style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
                    Mod: {calculateModifier(character.abilityScores[stat]) >= 0 ? '+' : ''}
                    {calculateModifier(character.abilityScores[stat])}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {step === 5 && (
          <div>
            <h2 className="section-title">Review & Create</h2>
            <div className="card" style={{ backgroundColor: 'var(--bg-dark)' }}>
              <h3 style={{ color: 'var(--text-gold)', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>
                {character.name || 'Unnamed Hero'} {character.pronouns ? `(${character.pronouns})` : ''}
              </h3>
              <div className="grid-2">
                <div>
                  <p><strong>Species:</strong> {character.species || 'Not selected'}</p>
                  <p><strong>Class:</strong> {character.className || 'Not selected'} {character.subclass ? `(${character.subclass})` : ''}</p>
                  <p><strong>Background:</strong> {character.background || 'Not selected'}</p>
                  <p><strong>Level:</strong> {character.level}</p>
                </div>
                <div>
                  <div className="grid-3">
                    {['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'].map(stat => (
                      <div key={stat} style={{ marginBottom: '0.5rem' }}>
                        <strong style={{ color: 'var(--text-gold)' }}>{stat}</strong>: {character.abilityScores[stat]} 
                        <span className="text-muted"> ({calculateModifier(character.abilityScores[stat]) >= 0 ? '+' : ''}{calculateModifier(character.abilityScores[stat])})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          {step > 1 ? (
            <button className="btn btn-secondary" onClick={handlePrev}>Back</button>
          ) : <div></div>}
          
          {step < 5 ? (
            <button className="btn btn-primary" onClick={handleNext}>Next</button>
          ) : (
            <button className="btn btn-primary" onClick={handleCreate}>Create Character</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterCreator;
