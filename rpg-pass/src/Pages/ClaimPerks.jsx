import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { usePrivy } from '@privy-io/react-auth';
import { ReclaimProofRequest } from '@reclaimprotocol/js-sdk';
import { useXP } from '../contexts/XPContext';
import "../PageStyles/ClaimPerks.css";
import logo from "../assets/logo.png";

// Reclaim Protocol Configuration
const RECLAIM_APP_ID = import.meta.env.VITE_RECLAIM_APP_ID;
const RECLAIM_APP_SECRET = import.meta.env.VITE_RECLAIM_APP_SECRET;

// Provider IDs from Reclaim
const PROVIDER_IDS = {
  github: import.meta.env.VITE_RECLAIM_PROVIDER_GITHUB,
  twitter: import.meta.env.VITE_RECLAIM_PROVIDER_TWITTER,
  linkedin: import.meta.env.VITE_RECLAIM_PROVIDER_LINKEDIN,
};

// Validate environment variables
if (!RECLAIM_APP_ID || !RECLAIM_APP_SECRET) {
  console.error('Missing Reclaim Protocol credentials. Please check your .env file.');
}

if (!PROVIDER_IDS.github || !PROVIDER_IDS.twitter || !PROVIDER_IDS.linkedin) {
  console.error('Missing Reclaim Provider IDs. Please check your .env file.');
}

const ClaimPerks = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = usePrivy();
  const { addProvider, isProviderConnected, getProviderXP } = useXP();
  const [loading, setLoading] = useState({});

  const handleClaim = async (provider) => {
    if (isProviderConnected(provider)) {
      alert(`${provider} is already connected!`);
      return;
    }

    setLoading((prev) => ({ ...prev, [provider]: true }));

    try {
      const providerId = PROVIDER_IDS[provider];
      if (!providerId) {
        throw new Error(`Provider ID not found for ${provider}`);
      }

      // Initialize Reclaim proof request using the correct API
      const reclaimRequest = await ReclaimProofRequest.init(
        RECLAIM_APP_ID,
        RECLAIM_APP_SECRET,
        providerId
      );

      // Note: We don't set a callback URL because:
      // 1. Localhost URLs can't be reached by Reclaim's servers
      // 2. We're using startSession() which receives proofs directly via the SDK
      // 3. Callback URLs are mainly for backend verification

      // Trigger the Reclaim flow (handles browser extension, QR code, mobile apps automatically)
      await reclaimRequest.triggerReclaimFlow();

      // Start session to listen for verification results
      await reclaimRequest.startSession({
        onSuccess: (proofs) => {
          setLoading((prev) => ({ ...prev, [provider]: false }));
          
          // Simple verification: if proof exists, account is verified
          if (proofs && typeof proofs !== 'string') {
            // Proof received successfully - account exists and is verified
            if (Array.isArray(proofs)) {
              // Multiple proofs (cascading providers)
              console.log('Multiple proofs received:', proofs);
            } else {
              // Single proof
              console.log('Proof received:', proofs?.claimData?.context);
            }
            
            // Account verified - award XP
            addProvider(provider);
            alert(`Successfully verified ${provider} account! You earned ${getProviderXP(provider)} XP!`);
            navigate('/dash');
          } else if (proofs && typeof proofs === 'string') {
            // String message received (shouldn't happen without callback URL, but handle it)
            console.log('SDK Message:', proofs);
            // Account verified - award XP
            addProvider(provider);
            alert(`Successfully verified ${provider} account! You earned ${getProviderXP(provider)} XP!`);
            navigate('/dash');
          }
        },
        onFailure: (error) => {
          setLoading((prev) => ({ ...prev, [provider]: false }));
          console.error('Reclaim verification failed:', error);
          alert(`Verification failed: ${error.message || 'Please try again.'}`);
        },
      });

    } catch (error) {
      console.error(`Error initiating Reclaim for ${provider}:`, error);
      setLoading((prev) => ({ ...prev, [provider]: false }));
      alert(`Error: ${error.message || 'Failed to start verification. Please try again.'}`);
    }
  };

  // Note: We're not using callback URLs, so proofs are received directly via startSession()
  // This useEffect is kept for potential future use if we add callback URL support

  return (
    <div className="page-container">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon">
            <img src={logo} alt="RPG Pass Logo" />
          </div>
          <span>RPG Pass</span>
        </div>

        {/* Navigation Tabs */}
        <div className="nav-tabs">
          <button
            className={`nav-tab ${location.pathname === '/dash' ? 'active' : ''}`}
            onClick={() => navigate('/dash')}
          >
            Dashboard
          </button>
          <button
            className={`nav-tab ${location.pathname === '/claim' ? 'active' : ''}`}
            onClick={() => navigate('/claim')}
          >
            Quests
          </button>
        </div>

        <button className="disconnect-btn" onClick={logout}>
          Disconnect
        </button>
      </nav>

      {/* HEADER */}
      <header className="header">
        <h1>AVAILABLE QUESTS</h1>
        <p className="header-subtitle">Complete quests to earn XP and increase your reputation score</p>
      </header>

      <div className="quests-list">
        
        {/* QUEST 1: GITHUB */}
        <div className="quest-row">
          <div className="quest-icon">
             {/* Github Icon SVG */}
             <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.04-.015-2.04-3.338.72-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12"/></svg>
          </div>
          <div className="quest-details">
            <div className="quest-header">
              <h3>Code Warrior</h3>
              <span className="xp-badge">+{getProviderXP('github')} XP</span>
              {isProviderConnected('github') && <span className="verified-badge">✓ Verified</span>}
            </div>
            <p>Verify your GitHub account</p>
          </div>
          <button 
            className={`claim-btn ${isProviderConnected('github') ? 'claimed' : ''}`}
            onClick={() => handleClaim('github')}
            disabled={loading.github || isProviderConnected('github')}
          >
            {loading.github ? 'VERIFYING...' : isProviderConnected('github') ? 'VERIFIED' : 'CLAIM REWARD'}
          </button>
        </div>

        {/* QUEST 2: TWITTER/X */}
        <div className="quest-row">
          <div className="quest-icon">
            {/* X Icon SVG */}
            <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </div>
          <div className="quest-details">
            <div className="quest-header">
              <h3>Social Butterfly</h3>
              <span className="xp-badge">+{getProviderXP('twitter')} XP</span>
              {isProviderConnected('twitter') && <span className="verified-badge">✓ Verified</span>}
            </div>
            <p>Verify your X (Twitter) account</p>
          </div>
          <button 
            className={`claim-btn ${isProviderConnected('twitter') ? 'claimed' : ''}`}
            onClick={() => handleClaim('twitter')}
            disabled={loading.twitter || isProviderConnected('twitter')}
          >
            {loading.twitter ? 'VERIFYING...' : isProviderConnected('twitter') ? 'VERIFIED' : 'CLAIM REWARD'}
          </button>
        </div>

        {/* QUEST 3: LINKEDIN */}
        <div className="quest-row">
          <div className="quest-icon">
            {/* LinkedIn Icon SVG */}
            <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </div>
          <div className="quest-details">
            <div className="quest-header">
              <h3>Professional Network</h3>
              <span className="xp-badge">+{getProviderXP('linkedin')} XP</span>
              {isProviderConnected('linkedin') && <span className="verified-badge">✓ Verified</span>}
            </div>
            <p>Verify your LinkedIn account</p>
          </div>
          <button 
            className={`claim-btn ${isProviderConnected('linkedin') ? 'claimed' : ''}`}
            onClick={() => handleClaim('linkedin')}
            disabled={loading.linkedin || isProviderConnected('linkedin')}
          >
            {loading.linkedin ? 'VERIFYING...' : isProviderConnected('linkedin') ? 'VERIFIED' : 'CLAIM REWARD'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ClaimPerks;