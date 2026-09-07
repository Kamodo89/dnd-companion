import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { spells as SPELLS } from '../data/spells';
import { WEAPONS, ARMOR, CONDITIONS, WEAPON_MASTERY } from '../data/equipment';

const Compendium = () => {
  const { state } = useApp();
  const [activeTab, setActiveTab] = useState('spells');
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">Compendium 📖</h1>
        <p className="text-muted">Reference for Spells, Equipment, and Rules.</p>
      </header>

      <div className="tabs" style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border-color)', marginBottom: '2rem', overflowX: 'auto' }}>
        {['spells', 'equipment', 'conditions', 'weapon_mastery'].map(tab => (
          <button 
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => { setActiveTab(tab); setSearchTerm(''); }}
            style={{ 
              background: 'none', border: 'none', 
              color: activeTab === tab ? 'var(--color-gold-base)' : 'var(--text-muted)',
              padding: '1rem', cursor: 'pointer',
              borderBottom: activeTab === tab ? '2px solid var(--color-gold-base)' : 'none',
              textTransform: 'capitalize', fontWeight: 'bold'
            }}
          >
            {tab.replace('_', ' ')}
          </button>
        ))}
      </div>

      <div className="form-group" style={{ marginBottom: '2rem' }}>
        <input 
          type="text" 
          className="form-input" 
          placeholder="Search..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {activeTab === 'spells' && (
        <div className="grid-3">
          {(SPELLS || []).filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase())).map((spell, idx) => (
            <div key={idx} className="card">
              <h3 style={{ color: 'var(--text-gold)', marginBottom: '0.25rem' }}>{spell.name}</h3>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Level {spell.level} {spell.school}
              </div>
              <div style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                <strong>Casting Time:</strong> {spell.castingTime}<br/>
                <strong>Range:</strong> {spell.range}<br/>
                <strong>Duration:</strong> {spell.duration} {spell.concentration ? '(C)' : ''}
              </div>
              <p style={{ fontSize: '0.875rem' }} className="text-muted">
                {spell.description?.substring(0, 100)}...
              </p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'equipment' && (
        <div>
          <h2 className="section-title">Weapons</h2>
          <div className="grid-3" style={{ marginBottom: '2rem' }}>
            {(WEAPONS || []).filter(w => w.name.toLowerCase().includes(searchTerm.toLowerCase())).map((w, idx) => (
              <div key={idx} className="card">
                <h3 style={{ color: 'var(--text-gold)' }}>{w.name}</h3>
                <p className="text-muted">{w.category}</p>
                <p><strong>Damage:</strong> {w.damage}</p>
                <p><strong>Properties:</strong> {w.properties?.join(', ')}</p>
                {w.mastery && <p><strong>Mastery:</strong> {w.mastery}</p>}
              </div>
            ))}
          </div>

          <h2 className="section-title">Armor</h2>
          <div className="grid-3">
            {(ARMOR || []).filter(a => a.name.toLowerCase().includes(searchTerm.toLowerCase())).map((a, idx) => (
              <div key={idx} className="card">
                <h3 style={{ color: 'var(--text-gold)' }}>{a.name}</h3>
                <p className="text-muted">{a.category}</p>
                <p><strong>AC:</strong> {a.ac}</p>
                <p><strong>Properties:</strong> {a.properties?.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'conditions' && (
        <div className="grid-3">
          {(CONDITIONS || []).filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())).map((cond, idx) => (
            <div key={idx} className="card">
              <h3 style={{ color: 'var(--text-gold)' }}>{cond.name}</h3>
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>{cond.description}</p>
            </div>
          ))}
        </div>
      )}
      
      {activeTab === 'weapon_mastery' && (
        <div className="grid-3">
          {(WEAPON_MASTERY || []).filter(wm => wm.name.toLowerCase().includes(searchTerm.toLowerCase())).map((wm, idx) => (
            <div key={idx} className="card">
              <h3 style={{ color: 'var(--text-gold)' }}>{wm.name}</h3>
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>{wm.description}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Compendium;
