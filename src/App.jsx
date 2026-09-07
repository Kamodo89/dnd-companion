import { BrowserRouter, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Home from './pages/Home';
import CharacterSheet from './pages/CharacterSheet';
import CharacterCreator from './pages/CharacterCreator';
import CampaignTracker from './pages/CampaignTracker';
import Compendium from './pages/Compendium';
import HomebrewCreator from './pages/HomebrewCreator';
import './index.css';

const NAV_ITEMS = [
  { label: 'Home', path: '/', icon: '🏰', end: true },
  { label: 'Characters', path: '/characters', icon: '⚔️' },
  { label: 'Campaign', path: '/campaign', icon: '🗺️' },
  { label: 'Compendium', path: '/compendium', icon: '📖' },
  { label: 'Homebrew', path: '/homebrew', icon: '🎨' },
];

function Sidebar() {
  return (
    <aside className="app-sidebar">
      <div className="sidebar-logo">
        <span className="sidebar-logo-icon">⚔️</span>
        <div>
          <div className="sidebar-logo-text">Tavern<br/>Keeper</div>
          <div className="sidebar-logo-subtitle">D&D 5.5e Companion</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="sidebar-section-label">Navigation</div>
        {NAV_ITEMS.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
          >
            <span style={{ fontSize: '18px' }}>{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <span style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.4 }}>
          🎲 D&D 5.5e (2024)<br />
          For personal use only
        </span>
      </div>
    </aside>
  );
}

function AppRoutes() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="app-main">
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<CharacterSheet />} />
            <Route path="/characters/new" element={<CharacterCreator />} />
            <Route path="/characters/:id" element={<CharacterSheet />} />
            <Route path="/campaign" element={<CampaignTracker />} />
            <Route path="/compendium" element={<Compendium />} />
            <Route path="/homebrew" element={<HomebrewCreator />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
}
