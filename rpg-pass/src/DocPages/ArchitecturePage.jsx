import React from 'react';
import DocSidebar from "../components/DocSidebar";

const ArchitecturePage = () => {
  return (
    <div className="doc-layout">
      <DocSidebar />
      <div className="arch-container">
      
      {/* 1. HEADER */}
      <header className="page-header">
        <h1>SYSTEM ARCHITECTURE</h1>
        <p className="subtitle">The high-level data flow of the RPG Pass protocol.</p>
      </header>

      {/* 2. VISUAL FLOWCHART (CSS Styled) */}
      <section className="diagram-section">
        
        {/* Step 1: User */}
        <div className="flow-node">
          <div className="icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
          <div className="node-label">USER</div>
        </div>

        <div className="flow-arrow">→</div>

        {/* Step 2: Auth Layer */}
        <div className="flow-node">
          <div className="icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          </div>
          <div className="node-label">PRIVY AUTH</div>
          <div className="node-desc">Embedded Wallet</div>
        </div>

        <div className="flow-arrow">→</div>

        {/* Step 3: Proof Layer (The Core) */}
        <div className="flow-node highlight">
          <div className="icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          </div>
          <div className="node-label">RECLAIM</div>
          <div className="node-desc">ZK Proof Gen</div>
        </div>

        <div className="flow-arrow">→</div>

        {/* Step 4: Decision Layer */}
        <div className="flow-node">
          <div className="icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
          </div>
          <div className="node-label">PAYMASTER</div>
          <div className="node-desc">Gas Sponsorship</div>
        </div>

        <div className="flow-arrow">→</div>

        {/* Step 5: Chain */}
        <div className="flow-node">
          <div className="icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
          </div>
          <div className="node-label">MONAD</div>
          <div className="node-desc">Settlement</div>
        </div>

      </section>

      {/* 3. TECHNICAL BREAKDOWN GRID */}
      <section className="details-grid">
        
        <div className="detail-card">
          <div className="card-header">
            <span className="step-num">01</span>
            <h3>Identity & Auth</h3>
          </div>
          <p>
            We utilize <strong>Privy</strong> to onboard users via email or social login, creating a non-custodial embedded wallet. This removes the "seed phrase" friction while maintaining self-custody.
          </p>
        </div>

        <div className="detail-card">
          <div className="card-header">
            <span className="step-num">02</span>
            <h3>The Proof Layer</h3>
          </div>
          <p>
            <strong>Reclaim Protocol</strong> generates Zero-Knowledge proofs of Web2 activity (GitHub commits, X followers). This happens client-side, ensuring user data privacy while generating a verifiable cryptographic proof.
          </p>
        </div>

        <div className="detail-card">
          <div className="card-header">
            <span className="step-num">03</span>
            <h3>The Paymaster Logic</h3>
          </div>
          <p>
            Our custom Paymaster (ERC-4337) queries the user's reputation score before signing any UserOperation. If the score meets the threshold (e.g., 50 XP), the transaction gas is fully sponsored.
          </p>
        </div>

        <div className="detail-card">
          <div className="card-header">
            <span className="step-num">04</span>
            <h3>Settlement</h3>
          </div>
          <p>
            All validated transactions are bundled and settled on the <strong>Monad Testnet</strong>. The reputation score itself is stored as an on-chain attestation, making it composable with other dApps.
          </p>
        </div>

      </section>

      <style jsx>{`
        /* THEME VARIABLES */
        :root {
          --bg-black: #000000;
          --bg-dark: #111111;
          --bg-card: #161616;
          --border: #333333;
          --text-white: #ffffff;
          --text-grey: #888888;
        }

        .arch-container {
          padding: 60px;
          background-color: var(--bg-black);
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
          margin-left: 280px;
          /* Subtle grid pattern */
          background-image:
              linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .doc-layout {
          display: flex;
          min-height: 100vh;
          background: #000;
        }

        /* HEADER */
        .page-header { margin-bottom: 60px; border-left: 4px solid var(--text-white); padding-left: 20px; }
        .page-header h1 { font-size: 48px; font-weight: 800; color: var(--text-white); margin-bottom: 10px; letter-spacing: -1px; }
        .subtitle { font-size: 18px; color: var(--text-grey); font-family: monospace; }

        /* DIAGRAM SECTION */
        .diagram-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-dark);
          padding: 40px;
          border: 1px solid var(--border);
          border-radius: 4px;
          margin-bottom: 60px;
          overflow-x: auto;
        }

        .flow-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-width: 120px;
        }

        .icon-box {
          width: 60px;
          height: 60px;
          background: #000;
          border: 1px solid var(--text-white);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
          border-radius: 50%;
          position: relative;
          z-index: 2;
          color: var(--text-white);
        }

        .icon-box svg {
          width: 24px;
          height: 24px;
          stroke: currentColor;
        }

        .node-label { font-weight: 700; color: var(--text-white); font-size: 14px; margin-bottom: 5px; }
        .node-desc { font-size: 11px; color: var(--text-grey); font-family: monospace; }

        /* Highlight the central node */
        .highlight .icon-box {
          background: var(--text-white);
          box-shadow: 0 0 20px rgba(255,255,255,0.2);
        }

        .highlight .icon-box svg {
          stroke: #000;
        }

        .highlight .node-label {
          color: var(--text-white);
          text-decoration: underline;
        }

        .flow-arrow { font-size: 24px; color: var(--border); font-weight: 300; margin-bottom: 20px; }

        /* DETAILS GRID */
        .details-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .detail-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          padding: 30px;
          transition: transform 0.2s;
        }

        .detail-card:hover { border-color: var(--text-grey); }

        .card-header { display: flex; align-items: center; gap: 15px; margin-bottom: 15px; }
        
        .step-num {
          font-family: monospace;
          color: var(--text-grey);
          font-size: 14px;
          border: 1px solid var(--border);
          padding: 4px 8px;
          border-radius: 4px;
        }

        h3 { color: var(--text-white); font-size: 20px; font-weight: 700; }
        p { color: var(--text-grey); line-height: 1.6; font-size: 14px; }
        strong { color: var(--text-white); font-weight: 600; }

        @media (max-width: 900px) {
          .diagram-section { flex-direction: column; gap: 20px; }
          .flow-arrow { transform: rotate(90deg); margin: 0; }
          .details-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .doc-layout {
            flex-direction: column;
          }

          .arch-container {
            margin-left: 0;
            padding: 40px 20px;
          }
        }
      `}</style>
      </div>
    </div>
  );
};

export default ArchitecturePage;