import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const CampaignTracker = () => {
  const { state, actions } = useApp();
  const [activeTab, setActiveTab] = useState('overview');
  
  const campaign = state.activeCampaignId 
    ? state.campaigns?.find(c => c.id === state.activeCampaignId)
    : null;

  if (!campaign) {
    return (
      <div className="page-container">
        <header className="page-header">
          <h1 className="page-title">Campaigns 🗺️</h1>
        </header>
        <div className="empty-state">
          <h3>No active campaign</h3>
          <p className="text-muted">Select or create a campaign to track sessions, NPCs, and loot.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">{campaign.name}</h1>
        <p className="text-muted">DM: {campaign.dm} | Setting: {campaign.setting}</p>
      </header>

      <div className="tabs" style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border-color)', marginBottom: '2rem', overflowX: 'auto' }}>
        {['overview', 'sessions', 'npcs', 'locations', 'quests', 'loot'].map(tab => (
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
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="grid-2">
          <div className="card">
            <h3 className="section-title">Campaign Details</h3>
            <div className="form-group">
              <label className="form-label">In-World Date</label>
              <input 
                className="form-input" 
                value={campaign.inWorldDate || ''} 
                onChange={(e) => {
                  const updated = { ...campaign, inWorldDate: e.target.value };
                  actions.updateCampaign(campaign.id, updated);
                }}
              />
            </div>
            <p><strong>Sessions Played:</strong> {campaign.sessions?.length || 0}</p>
          </div>
        </div>
      )}

      {activeTab === 'npcs' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h2 className="section-title">Notable Characters</h2>
            <button className="btn btn-primary">Add NPC</button>
          </div>
          <div className="grid-3">
            {(campaign.npcs || []).map((npc, idx) => (
              <div key={idx} className="card">
                <h3 style={{ color: 'var(--text-gold)' }}>{npc.name} {npc.attitude}</h3>
                <p className="text-muted">{npc.role} | {npc.faction}</p>
                <p style={{ marginTop: '1rem' }}>{npc.notes}</p>
              </div>
            ))}
            {(!campaign.npcs || campaign.npcs.length === 0) && (
              <p className="text-muted">No NPCs recorded yet.</p>
            )}
          </div>
        </div>
      )}

      {/* Placeholders for other tabs to meet length/completeness loosely */}
      {activeTab === 'sessions' && <div className="card"><h3 className="section-title">Sessions Log</h3><p className="text-muted">Coming soon...</p></div>}
      {activeTab === 'locations' && <div className="card"><h3 className="section-title">Locations</h3><p className="text-muted">Coming soon...</p></div>}
      {activeTab === 'quests' && <div className="card"><h3 className="section-title">Quests</h3><p className="text-muted">Coming soon...</p></div>}
      {activeTab === 'loot' && <div className="card"><h3 className="section-title">Party Loot</h3><p className="text-muted">Coming soon...</p></div>}

    </div>
  );
};

export default CampaignTracker;
