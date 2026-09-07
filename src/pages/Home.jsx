import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { CLASSES } from '../data/classes';

const CLASS_COLORS = {
  barbarian: '#c0392b', bard: '#8e44ad', cleric: '#f39c12', druid: '#27ae60',
  fighter: '#95a5a6', monk: '#16a085', paladin: '#f1c40f', ranger: '#2ecc71',
  rogue: '#2c3e50', sorcerer: '#e74c3c', warlock: '#6c3483', wizard: '#2980b9', artificer: '#d35400',
};

function CharacterCard({ character, isActive, onClick }) {
  const cls = CLASSES.find(c => c.id === character.classId);
  const classColor = CLASS_COLORS[character.classId] || 'var(--color-gold-base)';
  const hpPercent = character.currentHp != null && character.maxHp
    ? Math.max(0, Math.min(100, (character.currentHp / character.maxHp) * 100))
    : 100;
  const hpClass = hpPercent > 60 ? 'high' : hpPercent > 30 ? 'medium' : 'low';

  return (
    <div
      className={`card ${isActive ? 'card-gold' : ''}`}
      style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
      onClick={onClick}
    >
      {/* Class color strip */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px',
        background: classColor, borderRadius: '12px 0 0 12px'
      }} />

      <div style={{ paddingLeft: '12px' }}>
        <div className="flex items-center justify-between" style={{ marginBottom: '8px' }}>
          <div>
            <div className="font-display text-lg" style={{ color: isActive ? 'var(--text-gold)' : 'var(--text-primary)', fontWeight: 700 }}>
              {character.name}
            </div>
            <div className="text-sm text-muted">
              {character.speciesName} • {cls?.name || character.classId} {character.level}
              {character.subclassId && ` (${character.subclassId})`}
            </div>
          </div>
          <div className="text-center">
            <div className="font-display" style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-crimson-light)', lineHeight: 1 }}>
              {character.currentHp ?? character.maxHp ?? '—'}
            </div>
            <div className="text-xs text-muted">/ {character.maxHp ?? '—'} HP</div>
          </div>
        </div>

        {/* HP Bar */}
        {character.maxHp && (
          <div className="hp-bar">
            <div className={`hp-bar-fill ${hpClass}`} style={{ width: `${hpPercent}%` }} />
          </div>
        )}

        <div className="flex gap-2 flex-wrap" style={{ marginTop: '10px' }}>
          <span className="badge badge-neutral">AC {character.ac ?? '—'}</span>
          <span className="badge badge-neutral">Lv {character.level}</span>
          {character.background && <span className="badge badge-source">{character.background}</span>}
          {isActive && <span className="badge badge-gold">Active</span>}
        </div>
      </div>
    </div>
  );
}

function CampaignCard({ campaign, isActive, onClick }) {
  return (
    <div
      className={`card ${isActive ? 'card-gold' : ''}`}
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      <div className="flex items-center justify-between" style={{ marginBottom: '8px' }}>
        <div className="font-display text-lg" style={{ color: isActive ? 'var(--text-gold)' : 'var(--text-primary)' }}>
          🗺️ {campaign.name}
        </div>
        {isActive && <span className="badge badge-gold">Active</span>}
      </div>
      <div className="text-sm text-muted">{campaign.setting || 'No setting specified'}</div>
      {campaign.dm && <div className="text-xs text-muted" style={{ marginTop: '4px' }}>DM: {campaign.dm}</div>}
      <div className="text-xs text-muted" style={{ marginTop: '4px' }}>
        {campaign.sessions?.length ?? 0} sessions • {campaign.npcs?.length ?? 0} NPCs
      </div>
    </div>
  );
}

export default function Home() {
  const { state, actions } = useApp();
  const navigate = useNavigate();
  const [showNewCampaign, setShowNewCampaign] = useState(false);
  const [newCampaign, setNewCampaign] = useState({ name: '', setting: '', dm: '' });

  const handleCreateCampaign = () => {
    if (!newCampaign.name) return;
    actions.addCampaign({ ...newCampaign, sessions: [], npcs: [], locations: [], quests: [], loot: [], partyGold: 0 });
    setNewCampaign({ name: '', setting: '', dm: '' });
    setShowNewCampaign(false);
  };

  return (
    <div style={{ animation: 'slideIn 0.3s ease' }}>
      {/* Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(139,105,20,0.12) 0%, rgba(107,26,26,0.08) 50%, rgba(107,53,160,0.08) 100%)',
        border: '1px solid var(--color-border-gold)',
        borderRadius: 'var(--radius-xl)',
        padding: '40px 48px',
        marginBottom: '40px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative corner accents */}
        <div style={{ position: 'absolute', top: 12, left: 12, width: 30, height: 30, borderTop: '2px solid var(--color-gold-mid)', borderLeft: '2px solid var(--color-gold-mid)' }} />
        <div style={{ position: 'absolute', top: 12, right: 12, width: 30, height: 30, borderTop: '2px solid var(--color-gold-mid)', borderRight: '2px solid var(--color-gold-mid)' }} />
        <div style={{ position: 'absolute', bottom: 12, left: 12, width: 30, height: 30, borderBottom: '2px solid var(--color-gold-mid)', borderLeft: '2px solid var(--color-gold-mid)' }} />
        <div style={{ position: 'absolute', bottom: 12, right: 12, width: 30, height: 30, borderBottom: '2px solid var(--color-gold-mid)', borderRight: '2px solid var(--color-gold-mid)' }} />

        <div className="text-center">
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚔️ 🐉 ⚔️</div>
          <h1 style={{ fontFamily: 'var(--font-decorative)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--text-gold)', textShadow: '0 0 40px var(--color-gold-glow)', marginBottom: '8px' }}>
            Tavern Keeper
          </h1>
          <p className="text-secondary" style={{ fontSize: 'var(--font-size-lg)', maxWidth: '500px', margin: '0 auto 24px' }}>
            Your party's D&D 5.5e companion. Manage characters, track campaigns, and forge legends.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button className="btn btn-primary btn-lg" onClick={() => navigate('/characters/new')}>
              ✨ Create Character
            </button>
            <button className="btn btn-secondary btn-lg" onClick={() => navigate('/compendium')}>
              📖 Open Compendium
            </button>
          </div>
        </div>
      </div>

      <div className="grid-2" style={{ gap: '32px' }}>
        {/* Party Section */}
        <div>
          <div className="section-header">
            <div className="section-title">⚔️ The Party ({state.characters.length}/8)</div>
            <button className="btn btn-primary btn-sm" onClick={() => navigate('/characters/new')}>
              + Add Hero
            </button>
          </div>

          {state.characters.length === 0 ? (
            <div className="empty-state" style={{ padding: '40px 20px' }}>
              <div className="empty-state-icon">🧙</div>
              <div className="empty-state-title">No Heroes Yet</div>
              <div className="empty-state-desc">Create your first character to begin your adventure.</div>
              <button className="btn btn-primary" onClick={() => navigate('/characters/new')}>Create Character</button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {state.characters.map(char => (
                <CharacterCard
                  key={char.id}
                  character={char}
                  isActive={char.id === state.activeCharacterId}
                  onClick={() => {
                    actions.setActiveCharacter(char.id);
                    navigate(`/characters/${char.id}`);
                  }}
                />
              ))}
              {state.characters.length < 8 && (
                <button
                  className="btn btn-secondary"
                  style={{ marginTop: '4px' }}
                  onClick={() => navigate('/characters/new')}
                >
                  + Add Party Member ({state.characters.length}/8)
                </button>
              )}
            </div>
          )}
        </div>

        {/* Campaigns Section */}
        <div>
          <div className="section-header">
            <div className="section-title">🗺️ Campaigns</div>
            <button className="btn btn-primary btn-sm" onClick={() => setShowNewCampaign(true)}>
              + New
            </button>
          </div>

          {state.campaigns.length === 0 ? (
            <div className="empty-state" style={{ padding: '40px 20px' }}>
              <div className="empty-state-icon">🗺️</div>
              <div className="empty-state-title">No Campaigns</div>
              <div className="empty-state-desc">Start a new campaign to track your group's adventure.</div>
              <button className="btn btn-primary" onClick={() => setShowNewCampaign(true)}>New Campaign</button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {state.campaigns.map(campaign => (
                <CampaignCard
                  key={campaign.id}
                  campaign={campaign}
                  isActive={campaign.id === state.activeCampaignId}
                  onClick={() => {
                    actions.setActiveCampaign(campaign.id);
                    navigate('/campaign');
                  }}
                />
              ))}
            </div>
          )}

          {/* Quick Stats */}
          {state.campaigns.length > 0 && (
            <div className="card" style={{ marginTop: '16px', background: 'rgba(139,105,20,0.06)' }}>
              <div className="text-xs text-muted font-display" style={{ letterSpacing: '0.08em', marginBottom: '12px', textTransform: 'uppercase' }}>
                📊 Party Overview
              </div>
              <div className="grid-2" style={{ gap: '12px' }}>
                <div className="text-center">
                  <div className="font-display text-gold" style={{ fontSize: '28px', fontWeight: 700 }}>
                    {state.characters.length}
                  </div>
                  <div className="text-xs text-muted">Heroes</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-gold" style={{ fontSize: '28px', fontWeight: 700 }}>
                    {state.campaigns.reduce((acc, c) => acc + (c.sessions?.length ?? 0), 0)}
                  </div>
                  <div className="text-xs text-muted">Sessions</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Access Row */}
      <div className="grid-4" style={{ marginTop: '32px' }}>
        {[
          { icon: '📖', label: 'Spell Browser', sub: 'Search all spells', path: '/compendium', tab: 'spells' },
          { icon: '🗡️', label: 'Equipment', sub: 'Weapons & armor', path: '/compendium', tab: 'equipment' },
          { icon: '🎨', label: 'Homebrew', sub: 'Create custom content', path: '/homebrew' },
          { icon: '💾', label: 'Export Data', sub: 'Backup your party', action: 'export' },
        ].map(item => (
          <div
            key={item.label}
            className="card"
            style={{ cursor: 'pointer', textAlign: 'center', padding: '20px 16px' }}
            onClick={() => item.action === 'export' ? actions.exportData() : navigate(item.path)}
          >
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>{item.icon}</div>
            <div className="font-display" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-primary)', fontWeight: 600 }}>{item.label}</div>
            <div className="text-xs text-muted" style={{ marginTop: '4px' }}>{item.sub}</div>
          </div>
        ))}
      </div>

      {/* New Campaign Modal */}
      {showNewCampaign && (
        <div className="modal-overlay" onClick={() => setShowNewCampaign(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">New Campaign</h2>
              <button className="modal-close" onClick={() => setShowNewCampaign(false)}>✕</button>
            </div>
            <div className="form-group">
              <label className="form-label">Campaign Name *</label>
              <input className="form-input" placeholder="e.g. Curse of Strahd" value={newCampaign.name}
                onChange={e => setNewCampaign(p => ({ ...p, name: e.target.value }))} />
            </div>
            <div className="form-group">
              <label className="form-label">Setting</label>
              <input className="form-input" placeholder="e.g. Barovia, Forgotten Realms..." value={newCampaign.setting}
                onChange={e => setNewCampaign(p => ({ ...p, setting: e.target.value }))} />
            </div>
            <div className="form-group">
              <label className="form-label">Dungeon Master</label>
              <input className="form-input" placeholder="DM name" value={newCampaign.dm}
                onChange={e => setNewCampaign(p => ({ ...p, dm: e.target.value }))} />
            </div>
            <div className="flex gap-3 justify-between" style={{ marginTop: '24px' }}>
              <button className="btn btn-secondary" onClick={() => setShowNewCampaign(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={handleCreateCampaign} disabled={!newCampaign.name}>
                🗺️ Create Campaign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
