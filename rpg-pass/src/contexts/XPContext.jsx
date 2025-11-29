import React, { createContext, useContext, useState, useEffect } from 'react';

const XPContext = createContext();

// XP points for each provider
export const XP_VALUES = {
  linkedin: 5,
  twitter: 10,
  github: 20,
};

export const useXP = () => {
  const context = useContext(XPContext);
  if (!context) {
    throw new Error('useXP must be used within an XPProvider');
  }
  return context;
};

export const XPProvider = ({ children }) => {
  const [connectedProviders, setConnectedProviders] = useState(() => {
    // Load from localStorage on mount
    const saved = localStorage.getItem('rpg-pass-connected-providers');
    return saved ? JSON.parse(saved) : [];
  });

  const [xpScore, setXpScore] = useState(0);

  // Calculate XP score based on connected providers
  useEffect(() => {
    const totalXP = connectedProviders.reduce((sum, provider) => {
      return sum + (XP_VALUES[provider] || 0);
    }, 0);
    setXpScore(totalXP);
  }, [connectedProviders]);

  // Save to localStorage whenever connectedProviders changes
  useEffect(() => {
    localStorage.setItem('rpg-pass-connected-providers', JSON.stringify(connectedProviders));
  }, [connectedProviders]);

  const addProvider = (provider) => {
    if (!connectedProviders.includes(provider)) {
      setConnectedProviders((prev) => [...prev, provider]);
    }
  };

  const removeProvider = (provider) => {
    setConnectedProviders((prev) => prev.filter((p) => p !== provider));
  };

  const isProviderConnected = (provider) => {
    return connectedProviders.includes(provider);
  };

  const getProviderXP = (provider) => {
    return XP_VALUES[provider] || 0;
  };

  const isEligibleForGasSponsor = () => {
    return xpScore >= 15;
  };

  return (
    <XPContext.Provider
      value={{
        connectedProviders,
        xpScore,
        addProvider,
        removeProvider,
        isProviderConnected,
        getProviderXP,
        isEligibleForGasSponsor,
      }}
    >
      {children}
    </XPContext.Provider>
  );
};

