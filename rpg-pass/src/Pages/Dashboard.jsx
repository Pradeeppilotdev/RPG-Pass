import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { usePrivy, useWallets } from '@privy-io/react-auth';
import { useXP } from '../contexts/XPContext';

import "../PageStyles/Dashboard.css";
import logo from "../assets/logo.png";
import blocky from "../assets/blocky.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user, ready, authenticated } = usePrivy();
  const { wallets, ready: walletsReady } = useWallets();
  const { xpScore, connectedProviders, isEligibleForGasSponsor } = useXP();
  const [walletAddress, setWalletAddress] = useState(null);

  // Get wallet address from Privy
  useEffect(() => {
    if (!ready || !authenticated) {
      setWalletAddress(null);
      return;
    }

    // Debug logging - expand user object to see all properties
    console.log('=== Privy Debug Info ===');
    console.log('User object:', user);
    console.log('User.wallet:', user?.wallet);
    console.log('User.linkedAccounts:', user?.linkedAccounts);
    console.log('Wallets array:', wallets);
    console.log('Wallets Ready:', walletsReady);
    console.log('Wallets length:', wallets?.length);

    let address = null;

    // Method 1: Try from user.wallet.address (most common for embedded wallets)
    if (user?.wallet?.address) {
      address = user.wallet.address;
      console.log('✓ Found address from user.wallet.address:', address);
      setWalletAddress(address);
      return;
    }

    // Method 2: Try from wallets array (from useWallets hook)
    if (walletsReady && wallets && wallets.length > 0) {
      const wallet = wallets[0];
      // Wallet object should have address property directly
      if (wallet.address) {
        address = wallet.address;
        console.log('✓ Found address from wallets[0].address:', address);
        setWalletAddress(address);
        return;
      }
      // Try getAddress method if it exists
      if (typeof wallet.getAddress === 'function') {
        wallet.getAddress().then(addr => {
          if (addr) {
            console.log('✓ Found address from wallet.getAddress():', addr);
            setWalletAddress(addr);
          }
        }).catch(err => console.error('Error getting address:', err));
      }
    }

    // Method 3: Try from user.linkedAccounts
    if (user?.linkedAccounts && Array.isArray(user.linkedAccounts)) {
      const walletAccount = user.linkedAccounts.find(
        account => account.type === 'wallet' || account.walletClientType === 'privy' || account.type === 'embedded_wallet'
      );
      if (walletAccount?.address) {
        address = walletAccount.address;
        console.log('✓ Found address from linkedAccounts:', address);
        setWalletAddress(address);
        return;
      }
    }

    // Method 4: Check if wallet exists but address is in a different property
    if (user?.wallet) {
      console.log('User.wallet object keys:', Object.keys(user.wallet));
      // Try common alternative property names
      address = user.wallet.address || user.wallet.walletAddress || user.wallet.publicAddress;
      if (address) {
        console.log('✓ Found address from user.wallet alternative property:', address);
        setWalletAddress(address);
        return;
      }
    }

    // If no address found, log full user object for debugging
    console.warn('⚠ No wallet address found.');
    console.log('Please expand the User object above to see its structure');
    console.log('User ID:', user?.id);
    console.log('User email:', user?.email?.address);
    console.log('User phone:', user?.phone?.number);
    
    // Show user identifier as fallback if wallet not available
    if (user?.email?.address) {
      const email = user.email.address;
      setWalletAddress(`email:${email.split('@')[0]}`);
    } else if (user?.phone?.number) {
      setWalletAddress(`phone:${user.phone.number.slice(-4)}`);
    } else {
      setWalletAddress(null);
    }
  }, [ready, authenticated, user, wallets, walletsReady]);

  // Truncate wallet for display
  const walletDisplay = walletAddress
    ? walletAddress.startsWith('email:') || walletAddress.startsWith('phone:')
      ? walletAddress // Show email/phone identifier
      : `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` // Truncate wallet address
    : "No wallet";

  // Determine rank based on XP
  const getRank = () => {
    if (xpScore === 0) return 'UNRANKED';
    if (xpScore < 15) return 'BRONZE';
    if (xpScore < 30) return 'SILVER';
    if (xpScore < 50) return 'GOLD';
    return 'PLATINUM';
  };

  return (
    <div className="page-container">

      {/* 1. NAVBAR */}
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

      <main className="main-content">
        
        {/* 2. THE 1x2 GRID CARD LAYOUT */}
        <div className="stats-grid">
          
          {/* LEFT CARD: Profile */}
          <div className="card profile-card">
            <div className="avatar-block">
              <img src={blocky} alt="User Avatar" className="pixel-avatar" />
            </div>
            <div className="profile-info">
              <span className="label">IDENTITY</span>
              <span className="value mono">{walletDisplay}</span>
            </div>
          </div>

          {/* RIGHT CARD: Points */}
          <div className="card points-card">
            <div className="points-header">
              <span className="label">REPUTATION SCORE</span>
              <span className="icon-star">★</span>
            </div>
            <div className="points-value">
              {xpScore} <span className="unit">XP</span>
            </div>
            <div className="status-badge">{getRank()}</div>
            {isEligibleForGasSponsor() && (
              <div className="gas-sponsor-badge" style={{ marginTop: '10px', padding: '8px', background: '#4CAF50', borderRadius: '4px', fontSize: '12px' }}>
                ✓ Eligible for Gas Sponsorship
              </div>
            )}
            {connectedProviders.length > 0 && (
              <div className="connected-providers" style={{ marginTop: '10px', fontSize: '11px', opacity: 0.7 }}>
                Connected: {connectedProviders.join(', ')}
              </div>
            )}
          </div>
        </div>

        {/* 3. BOTTOM ACTION BUTTON */}
        <div className="action-area">
          <button className="prove-btn" onClick={() => navigate('/claim')}>
            PROVE YOUR WORTH
            <span className="arrow">→</span>
          </button>
          <p className="hint-text">Verify your GitHub & X activity to earn XP</p>
        </div>

      </main>

    </div>
  );
};

export default Dashboard;