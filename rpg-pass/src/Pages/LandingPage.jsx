import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrivy } from '@privy-io/react-auth';
import "../PageStyles/LandingPage.css";

import logo from "../assets/logo.png";

const LandingPage = () => {
  const navigate = useNavigate();
  const { login, ready, authenticated } = usePrivy();

  const handleConnect = async () => {
    if (!ready) return;
    
    if (authenticated) {
      // Already authenticated, navigate to dashboard
      navigate('/dash');
    } else {
      // Trigger Privy login
      await login();
      // After successful login, navigate to dashboard
      navigate('/dash');
    }
  };

  // Redirect if already authenticated
  React.useEffect(() => {
    if (ready && authenticated) {
      navigate('/dash');
    }
  }, [ready, authenticated, navigate]);

  return (
    <div className="landing-container">
      
      {/* 1. NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon">
            <img src={logo} alt="RPG Pass Logo" />
          </div>
          <span>RPG Pass</span>
        </div>
        <button className="connect-btn" onClick={handleConnect}>
          Sign In
        </button>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-badge">
          <span className="dot"></span>
          <span>Monad Blitz Live</span>
        </div>
        
        <h1 className="hero-title">
          YOUR REPUTATION IS <br />
          <span className="highlight">YOUR CURRENCY.</span>
        </h1>
        
        <p className="hero-subtitle">
          Stop paying for gas. Verify your real-world achievements to unlock 
          VIP perks and sponsored gameplay across Web3.
        </p>

        <div className="hero-actions">
          <button className="cta-primary" onClick={handleConnect}>
            Start Verification
          </button>
          <div className="cta-secondary">
            Powered by <span className="white-text">Reclaim Protocol</span>
          </div>
        </div>
      </section>

      {/* 3. FEATURE CARDS */}
      <section className="cards-grid">
        
        {/* Card 1: The Problem */}
        <div className="info-card dark-card">
          <div className="card-top">
            <span className="card-number">01</span>
            <div className="icon-circle">
              {/* Ban/Block Icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
            </div>
          </div>
          <h3>The Problem</h3>
          <p>Bots are draining gas tanks. Developers are wasting money sponsoring Sybil attackers.</p>
        </div>

        {/* Card 2: The Solution */}
        <div className="info-card white-card">
          <div className="card-top">
            <span className="card-number dark-text">02</span>
            <div className="icon-circle dark-bg">
              {/* Check/Verify Icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
          </div>
          <h3 className="dark-text">The Solution</h3>
          <p className="dark-text">We verify your GitHub commits and X followers to prove you are "High Value."</p>
        </div>

        {/* Card 3: The Reward */}
        <div className="info-card gray-card">
          <div className="card-top">
            <span className="card-number">03</span>
            <div className="icon-circle dark-bg">
              {/* Gas/Fuel Icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22v-8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8"></path><path d="M15 2h4a2 2 0 0 1 2 2v13a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2"></path><path d="M13 2H5a2 2 0 0 0-2 2v6h12V4a2 2 0 0 0-2-2z"></path></svg>
            </div>
          </div>
          <h3>The Reward</h3>
          <p>Get instant Gas Sponsorship. Your reputation pays the transaction fees.</p>
        </div>

      </section>

      {/* 4. FOOTER STATS */}
      <footer className="stats-footer">
        <div className="stat-pill">
          <span className="label">Supported Chains</span>
          <span className="value">Monad Testnet</span>
        </div>
        <div className="stat-pill">
          <span className="label">Integrations</span>
          <span className="value">GitHub • Twitter • Instagram</span>
        </div>
      </footer>

      {/* CSS STYLES */}
      
    </div>
  );
};

export default LandingPage;