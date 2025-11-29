import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { usePrivy } from '@privy-io/react-auth';

import "../PageStyles/Dashboard.css";
import logo from "../assets/logo.png";
import blocky from "../assets/blocky.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user } = usePrivy();

  // Hackathon Trick: Truncate wallet for display
  const walletDisplay = user?.wallet?.address
    ? `${user.wallet.address.slice(0, 6)}...${user.wallet.address.slice(-4)}`
    : "0x123...abc";

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
              0 <span className="unit">XP</span>
            </div>
            <div className="status-badge">UNRANKED</div>
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