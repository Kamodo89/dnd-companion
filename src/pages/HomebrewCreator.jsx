import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const HomebrewCreator = () => {
  const { state, actions } = useApp();
  const [activeTab, setActiveTab] = useState('create');
  
  const [category, setCategory] = useState('Spell');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    level: 0,
    school: '',
    castingTime: '',
    range: '',
    duration: ''
  });

  const handleSave = () => {
    if (!formData.name) return;
    
    const newItem = { ...formData, id: Date.now().toString() };
    actions.addHomebrew(category, newItem);
    
    // Reset form
    setFormData({
      name: '', description: '', level: 0, school: '', castingTime: '', range: '', duration: ''
    });
    alert('Homebrew content saved!');
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">Forge Homebrew 🎨</h1>
        <p className="text-muted">Create custom content for your campaigns.</p>
      </header>

      <div className="tabs" style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border-color)', marginBottom: '2rem' }}>
        {['create', 'my_homebrew'].map(tab => (
          <button 
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
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

      {activeTab === 'create' && (
        <div className="card">
          <div className="form-group" style={{ marginBottom: '2rem' }}>
            <label className="form-label">Category</label>
            <select 
              className="form-select" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Spell">Spell</option>
              <option value="Item">Magic Item</option>
              <option value="Monster">Monster</option>
              <option value="Species">Species</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Name</label>
            <input 
              className="form-input" 
              value={formData.name} 
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
            />
          </div>

          {category === 'Spell' && (
            <div className="grid-2">
              <div className="form-group">
                <label className="form-label">Level</label>
                <input type="number" className="form-input" value={formData.level} onChange={(e) => setFormData({...formData, level: parseInt(e.target.value) || 0})} />
              </div>
              <div className="form-group">
                <label className="form-label">School</label>
                <input className="form-input" value={formData.school} onChange={(e) => setFormData({...formData, school: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">Casting Time</label>
                <input className="form-input" value={formData.castingTime} onChange={(e) => setFormData({...formData, castingTime: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">Range</label>
                <input className="form-input" value={formData.range} onChange={(e) => setFormData({...formData, range: e.target.value})} />
              </div>
            </div>
          )}

          <div className="form-group" style={{ marginTop: '1rem' }}>
            <label className="form-label">Description</label>
            <textarea 
              className="form-textarea" 
              rows="6"
              value={formData.description} 
              onChange={(e) => setFormData({...formData, description: e.target.value})} 
            />
          </div>

          <button className="btn btn-primary" onClick={handleSave} style={{ marginTop: '1rem' }}>
            Save {category}
          </button>
        </div>
      )}

      {activeTab === 'my_homebrew' && (
        <div>
          {state.homebrew && Object.keys(state.homebrew).length > 0 ? (
            Object.entries(state.homebrew).map(([cat, items]) => (
              <div key={cat} style={{ marginBottom: '2rem' }}>
                <h2 className="section-title">{cat}s</h2>
                <div className="grid-3">
                  {(items || []).map(item => (
                    <div key={item.id} className="card">
                      <h3 style={{ color: 'var(--text-gold)' }}>{item.name} 🎨</h3>
                      <p className="text-muted" style={{ fontSize: '0.875rem' }}>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <h3>No Homebrew Content</h3>
              <p className="text-muted">You haven't created any custom content yet.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomebrewCreator;
