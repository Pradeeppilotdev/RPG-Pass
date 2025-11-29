import React from 'react';
import DocSidebar from "../components/DocSidebar";

const SupportedProviders = () => {
  return (
    <div className="doc-layout">
      <DocSidebar />
      <div className="providers-container">
      
      {/* HEADER */}
      <header className="page-header">
        <h1>PROVIDER REGISTRY</h1>
        <p className="subtitle">Current and planned integrations for reputation verification.</p>
      </header>

      {/* SECTION 1: LIVE INTEGRATIONS */}
      <section className="section-block">
        <div className="section-label">
          <span className="status-dot live"></span>
          LIVE ON TESTNET
        </div>
        
        <div className="grid-container">
          
          {/* CARD: GITHUB */}
          <div className="provider-card">
            <div className="card-top">
              <div className="icon-box">
                {/* Github SVG */}
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.04-.015-2.04-3.338.72-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12"/></svg>
              </div>
              <span className="tier-badge">DEV TIER</span>
            </div>
            <h3>GitHub</h3>
            <p className="desc">Verifies contribution history and account age.</p>
            
            <div className="specs-box">
              <div className="spec-row">
                <span>Min Commits</span>
                <span className="val">50+</span>
              </div>
              <div className="spec-row">
                <span>Reward</span>
                <span className="val xp">+50 XP</span>
              </div>
            </div>
          </div>

          {/* CARD: TWITTER */}
          <div className="provider-card">
            <div className="card-top">
              <div className="icon-box">
                {/* X SVG */}
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </div>
              <span className="tier-badge">SOCIAL TIER</span>
            </div>
            <h3>X (Twitter)</h3>
            <p className="desc">Verifies organic social graph and follower count.</p>

            <div className="specs-box">
              <div className="spec-row">
                <span>Min Followers</span>
                <span className="val">100+</span>
              </div>
              <div className="spec-row">
                <span>Reward</span>
                <span className="val xp">+30 XP</span>
              </div>
            </div>
          </div>

          {/* CARD: LINKEDIN */}
          <div className="provider-card">
            <div className="card-top">
              <div className="icon-box">
                {/* LinkedIn SVG */}
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </div>
              <span className="tier-badge">PRO TIER</span>
            </div>
            <h3>LinkedIn</h3>
            <p className="desc">Verifies professional employment history.</p>

            <div className="specs-box">
              <div className="spec-row">
                <span>Work Experience</span>
                <span className="val">1+ Years</span>
              </div>
              <div className="spec-row">
                <span>Reward</span>
                <span className="val xp">+40 XP</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: ROADMAP (Faded) */}
      <section className="section-block roadmap">
        <div className="section-label">
          <span className="status-dot planned"></span>
          PLANNED INTEGRATIONS
        </div>
        
        <div className="grid-container">
          
          <div className="provider-card faded">
            <div className="card-top">
              <div className="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="2" x2="10" y2="6"></line><line x1="14" y1="6" x2="18" y2="2"></line><line x1="2" y1="12" x2="6" y2="8"></line><line x1="2" y1="16" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="8"></line><line x1="18" y1="16" x2="22" y2="12"></line><polygon points="10 6 14 6 16 12 14 18 10 18 8 12 10 6"></polygon></svg>
              </div>
              <span className="tier-badge">GAMER</span>
            </div>
            <h3>Steam</h3>
            <p className="desc">Verify playtime hours on specific game titles.</p>
          </div>

          <div className="provider-card faded">
            <div className="card-top">
              <div className="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8l4 4-4 4"></path><polyline points="3 12 7 12 10 3"></polyline><path d="M7 12v8"></path><circle cx="17" cy="16" r="2"></circle><circle cx="7" cy="20" r="2"></circle></svg>
              </div>
              <span className="tier-badge">IRL</span>
            </div>
            <h3>Uber</h3>
            <p className="desc">Verify ride history for location proof.</p>
          </div>

          <div className="provider-card faded">
            <div className="card-top">
              <div className="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              </div>
              <span className="tier-badge">PRO</span>
            </div>
            <h3>LinkedIn</h3>
            <p className="desc">Verify professional employment history.</p>
          </div>

        </div>
      </section>

      <style jsx>{`
        /* THEME VARIABLES */
        :root {
          --bg-black: #000000;
          --bg-dark: #111111;
          --border: #333333;
          --text-white: #ffffff;
          --text-grey: #888888;
        }

        .providers-container {
          padding: 60px;
          background-color: var(--bg-black);
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
          color: var(--text-white);
          margin-left: 280px;
          width: 100%;
          flex: 1;
        }

        .doc-layout {
          display: flex;
          min-height: 100vh;
          background: #000;
        }

        /* HEADER */
        .page-header { margin-bottom: 60px; }
        .page-header h1 { font-size: 48px; font-weight: 900; letter-spacing: -2px; margin-bottom: 10px; }
        .subtitle { font-size: 18px; color: var(--text-grey); font-family: monospace; }

        /* SECTIONS */
        .section-block { margin-bottom: 60px; }
        
        .section-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: monospace;
          color: var(--text-grey);
          font-size: 12px;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 10px;
        }

        .status-dot { width: 8px; height: 8px; border-radius: 50%; }
        .live { background: #fff; box-shadow: 0 0 10px rgba(255,255,255,0.5); }
        .planned { background: #444; border: 1px solid #666; }

        /* GRID */
        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        /* CARD STYLES */
        .provider-card {
          background: var(--bg-dark);
          border: 1px solid var(--border);
          padding: 24px;
          border-radius: 4px;
          transition: transform 0.2s, border-color 0.2s;
        }

        .provider-card:hover {
          border-color: var(--text-white);
          transform: translateY(-2px);
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .icon-box {
          width: 40px;
          height: 40px;
          background: #000;
          border: 1px solid #333;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          color: #fff;
        }

        .icon-box svg {
          width: 20px;
          height: 20px;
        }

        .tier-badge {
          font-size: 10px;
          border: 1px solid #444;
          padding: 4px 8px;
          border-radius: 20px;
          color: #888;
          text-transform: uppercase;
        }

        h3 { font-size: 20px; font-weight: 700; margin-bottom: 8px; }
        .desc { font-size: 14px; color: var(--text-grey); line-height: 1.5; margin-bottom: 20px; height: 40px; }

        /* SPECS BOX */
        .specs-box {
          background: #000;
          padding: 15px;
          border-radius: 4px;
        }

        .spec-row {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          margin-bottom: 8px;
        }
        .spec-row:last-child { margin-bottom: 0; }

        .spec-row span:first-child { color: var(--text-grey); }
        .val { font-family: monospace; font-weight: 600; }
        .val.xp { color: #fff; text-decoration: underline; }

        /* ROADMAP STYLES */
        .roadmap .provider-card {
          background: transparent;
          border: 1px dashed #333;
          opacity: 0.6;
        }
        .roadmap .provider-card:hover {
          opacity: 1;
          border-style: solid;
        }

        @media (max-width: 768px) {
          .doc-layout {
            flex-direction: column;
          }

          .providers-container {
            margin-left: 0;
            padding: 40px 20px;
          }
        }
      `}</style>
      </div>
    </div>
  );
};

export default SupportedProviders;