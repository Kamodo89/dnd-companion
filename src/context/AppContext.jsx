import { createContext, useContext, useReducer, useEffect } from 'react';

const AppContext = createContext(null);

const initialState = {
  characters: [],
  campaigns: [],
  homebrew: {
    species: [],
    classes: [],
    subclasses: [],
    spells: [],
    backgrounds: [],
    feats: [],
    items: [],
    monsters: [],
  },
  activeCharacterId: null,
  activeCampaignId: null,
};

function appReducer(state, action) {
  switch (action.type) {
    // ── Characters ──
    case 'ADD_CHARACTER':
      return { ...state, characters: [...state.characters, action.character] };
    case 'UPDATE_CHARACTER':
      return {
        ...state,
        characters: state.characters.map(c =>
          c.id === action.character.id ? action.character : c
        ),
      };
    case 'DELETE_CHARACTER':
      return {
        ...state,
        characters: state.characters.filter(c => c.id !== action.id),
        activeCharacterId: state.activeCharacterId === action.id ? null : state.activeCharacterId,
      };
    case 'SET_ACTIVE_CHARACTER':
      return { ...state, activeCharacterId: action.id };

    // ── Campaigns ──
    case 'ADD_CAMPAIGN':
      return { ...state, campaigns: [...state.campaigns, action.campaign] };
    case 'UPDATE_CAMPAIGN':
      return {
        ...state,
        campaigns: state.campaigns.map(c =>
          c.id === action.campaign.id ? action.campaign : c
        ),
      };
    case 'DELETE_CAMPAIGN':
      return {
        ...state,
        campaigns: state.campaigns.filter(c => c.id !== action.id),
        activeCampaignId: state.activeCampaignId === action.id ? null : state.activeCampaignId,
      };
    case 'SET_ACTIVE_CAMPAIGN':
      return { ...state, activeCampaignId: action.id };

    // ── Homebrew ──
    case 'ADD_HOMEBREW':
      return {
        ...state,
        homebrew: {
          ...state.homebrew,
          [action.category]: [...state.homebrew[action.category], action.item],
        },
      };
    case 'UPDATE_HOMEBREW':
      return {
        ...state,
        homebrew: {
          ...state.homebrew,
          [action.category]: state.homebrew[action.category].map(item =>
            item.id === action.item.id ? action.item : item
          ),
        },
      };
    case 'DELETE_HOMEBREW':
      return {
        ...state,
        homebrew: {
          ...state.homebrew,
          [action.category]: state.homebrew[action.category].filter(item => item.id !== action.id),
        },
      };

    // ── Import/Export ──
    case 'IMPORT_DATA':
      return { ...state, ...action.data };

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState, (init) => {
    try {
      const saved = localStorage.getItem('dnd-companion-data');
      return saved ? { ...init, ...JSON.parse(saved) } : init;
    } catch {
      return init;
    }
  });

  useEffect(() => {
    localStorage.setItem('dnd-companion-data', JSON.stringify(state));
  }, [state]);

  const actions = {
    // Characters
    addCharacter: (char) => dispatch({ type: 'ADD_CHARACTER', character: { ...char, id: crypto.randomUUID(), createdAt: Date.now() } }),
    updateCharacter: (char) => dispatch({ type: 'UPDATE_CHARACTER', character: char }),
    deleteCharacter: (id) => dispatch({ type: 'DELETE_CHARACTER', id }),
    setActiveCharacter: (id) => dispatch({ type: 'SET_ACTIVE_CHARACTER', id }),

    // Campaigns
    addCampaign: (campaign) => dispatch({ type: 'ADD_CAMPAIGN', campaign: { ...campaign, id: crypto.randomUUID(), createdAt: Date.now() } }),
    updateCampaign: (campaign) => dispatch({ type: 'UPDATE_CAMPAIGN', campaign }),
    deleteCampaign: (id) => dispatch({ type: 'DELETE_CAMPAIGN', id }),
    setActiveCampaign: (id) => dispatch({ type: 'SET_ACTIVE_CAMPAIGN', id }),

    // Homebrew
    addHomebrew: (category, item) => dispatch({ type: 'ADD_HOMEBREW', category, item: { ...item, id: crypto.randomUUID(), isHomebrew: true } }),
    updateHomebrew: (category, item) => dispatch({ type: 'UPDATE_HOMEBREW', category, item }),
    deleteHomebrew: (category, id) => dispatch({ type: 'DELETE_HOMEBREW', category, id }),

    // Import/Export
    exportData: () => {
      const data = JSON.stringify(state, null, 2);
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `dnd-companion-backup-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
    },
    importData: (data) => dispatch({ type: 'IMPORT_DATA', data }),
  };

  const getCharacter = (id) => state.characters.find(c => c.id === id);
  const getCampaign = (id) => state.campaigns.find(c => c.id === id);
  const activeCharacter = state.characters.find(c => c.id === state.activeCharacterId);
  const activeCampaign = state.campaigns.find(c => c.id === state.activeCampaignId);

  return (
    <AppContext.Provider value={{ state, dispatch, actions, getCharacter, getCampaign, activeCharacter, activeCampaign }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
