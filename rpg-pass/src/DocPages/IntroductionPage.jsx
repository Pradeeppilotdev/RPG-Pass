import React from 'react';
import logo from "../assets/logo.png";
import DocSidebar from "../components/DocSidebar";

const IntroductionPage = () => {
  return (
    <div className="doc-layout">
      <DocSidebar />
      <div className="intro-page-container">
      
      {/* 1. COVER PHOTO SECTION (Approx. 3/4 height) */}
      <div className="cover-photo-section">
        <div className="image-wrapper">
          {/* RPG Pass Logo Card */}
          <div className="card-container">
            <img
              src={logo}
              alt="RPG Pass Logo"
              className="cover-image"
            />
          </div>
          {/* Overlay to ensure theme consistency and add texture */}
          <div className="texture-overlay"></div>
        </div>
        
        <div className="hero-text-overlay">
          <h1>RPG PASS</h1>
          <p>The Reputation Layer for On-Chain Gaming.</p>
        </div>
      </div>

      {/* 2. SUMMARY SECTION */}
      <div className="summary-section">
        <div className="summary-content">
          <div className="summary-header">
            <h2>What We Do</h2>
            <div className="divider"></div>
          </div>
          
          <div className="summary-grid">
            <div className="text-column">
              <p className="lead">
                RPG Pass is a <strong>Sybil-resistant gas sponsorship protocol</strong> built for the Monad ecosystem.
              </p>
              <p>
                Web3 gaming suffers from a bot problem. Developers bleed treasury funds sponsoring transactions for fake users. We solve this by introducing a verifiable "Proof of Quality" layer before any gas is sponsored.
              </p>
            </div>
            <div className="text-column">
              <p>
                By leveraging <strong>Privy</strong> for seamless embedded wallets and <strong>Reclaim Protocol</strong> for zero-knowledge proofs of Web2 activity (like GitHub commits or X followers), we generate a unique Reputation Score for every player.
              </p>
              <p>
                Our custom Paymaster uses this score to make a simple decision: <strong>Real Players play for free. Bots pay full price.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* THEME VARIABLES */
        :root {
          --bg-black: #000000;
          --bg-dark: #111111;
          --bg-medium: #222222;
          --text-white: #ffffff;
          --text-grey: #cccccc;
          --grid-line: #1a1a1a;
        }

        .intro-page-container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          background-color: var(--bg-black);
          font-family: 'Inter', sans-serif;
          margin-left: 280px;
        }

        /* --- 1. COVER PHOTO SECTION --- */
        .cover-photo-section {
          position: relative;
          width: 100%;
          height: 65vh; /* 3/4 of viewport height */
          min-height: 500px;
          overflow: hidden;
          border-bottom: 1px solid var(--bg-medium);
        }

        .image-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 40px 80px 40px 40px;
        }

        .card-container {
          background: transparent;
          border-radius: 16px;
          padding: 0;
          max-width: 400px;
          max-height: 400px;
          width: 100%;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.8));
        }

        .card-container:hover {
          transform: translateY(-8px) scale(1.05);
          filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.9))
                  drop-shadow(0 0 30px rgba(255, 255, 255, 0.15));
        }

        .cover-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 8px;
        }

        /* Adds the square grid pattern subtly over the image */
        .texture-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image:
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }

        .hero-text-overlay {
          position: absolute;
          bottom: 60px;
          left: 60px;
          z-index: 2;
        }

        .hero-text-overlay h1 {
          font-size: 64px;
          font-weight: 900;
          color: var(--text-white);
          margin-bottom: 10px;
          letter-spacing: -2px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .hero-text-overlay p {
          font-size: 24px;
          color: var(--text-grey);
          font-weight: 300;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }


        /* --- 2. SUMMARY SECTION --- */
        .summary-section {
          flex: 1; /* Takes up remaining space */
          background-color: var(--bg-black);
          /* Maintains the background pattern */
          background-image:
              linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
              linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px);
          background-size: 50px 50px;
          padding: 60px;
          display: flex;
          justify-content: center;
        }

        .summary-content {
          max-width: 1000px;
          width: 100%;
        }

        .summary-header {
          margin-bottom: 40px;
        }

        .summary-header h2 {
          font-size: 32px;
          font-weight: 700;
          color: var(--text-white);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 15px;
        }

        .divider {
          width: 60px;
          height: 4px;
          background: var(--text-white);
        }

        .summary-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .text-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        p {
          font-size: 16px;
          line-height: 1.7;
          color: var(--text-grey);
        }

        .lead {
          font-size: 18px;
          color: var(--text-white);
        }

        strong {
          font-weight: 700;
          color: var(--text-white);
          border-bottom: 1px solid rgba(255,255,255,0.3);
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .cover-photo-section { height: 50vh; }
          .hero-text-overlay { left: 30px; bottom: 30px; }
          .hero-text-overlay h1 { font-size: 42px; }
          .hero-text-overlay p { font-size: 18px; }

          .image-wrapper {
            padding: 20px;
            justify-content: center;
          }
          .card-container {
            max-width: 280px;
            max-height: 280px;
          }

          .summary-section { padding: 40px 30px; }
          .summary-grid { grid-template-columns: 1fr; gap: 30px; }
        }
        /* LAYOUT */
        .doc-layout {
          display: flex;
          min-height: 100vh;
          background: #000;
        }

        @media (max-width: 768px) {
          .doc-layout {
            flex-direction: column;
          }

          .intro-page-container {
            margin-left: 0;
          }
        }
      `}</style>
      </div>
    </div>
  );
};

export default IntroductionPage;