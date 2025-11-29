import React from 'react';
import DocSidebar from "../components/DocSidebar";

const IntegrationGuide = () => {
  return (
    <div className="doc-layout">
      <DocSidebar />
      <div className="guide-container">
      
      {/* HEADER */}
      <header className="guide-header">
        <h1>INTEGRATION GUIDE</h1>
        <p className="subtitle">Add Sybil-resistance to your game in 3 lines of code.</p>
      </header>

      <div className="content-wrapper">
        
        {/* LEFT COLUMN: Steps */}
        <div className="steps-column">
          
          <div className="step-item">
            <div className="step-marker">01</div>
            <div className="step-content">
              <h3>Install the SDK</h3>
              <p>Add our lightweight wrapper to your project. It's fully typed and compatible with viem/ethers.</p>
              <div className="inline-code">npm install @rpg-pass/sdk</div>
            </div>
          </div>

          <div className="step-item">
            <div className="step-marker">02</div>
            <div className="step-content">
              <h3>Initialize the Client</h3>
              <p>Connect to the Monad Testnet using your API Key. This initializes the connection to our Paymaster.</p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-marker">03</div>
            <div className="step-content">
              <h3>Sponsor a Transaction</h3>
              <p>Wrap your game action (like minting an item) with our <code className="highlight">sponsor()</code> function. We handle the gas estimation and Paymaster signature.</p>
              <div className="note-box">
                <span className="icon">ℹ️</span>
                <span>Requires User Reputation  50 XP</span>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: The "Terminal" Code Block */}
        <div className="code-column">
          <div className="code-window">
            
            {/* Window Controls */}
            <div className="window-header">
              <div className="dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="filename">game-logic.ts</span>
            </div>

            {/* Syntax Highlighted Code (CSS Simulation) */}
            <div className="code-body">
              <div className="line"><span className="kwd">import</span> {'{'} RpgPass {'}'} <span className="kwd">from</span> <span className="str">'@rpg-pass/sdk'</span>;</div>
              <div className="line empty"></div>
              <div className="line comment">// 1. Initialize</div>
              <div className="line"><span className="kwd">const</span> rpg = <span className="kwd">new</span> RpgPass({'{'}</div>
              <div className="line indent">apiKey: <span className="str">"rpg_live_..."</span>,</div>
              <div className="line indent">chain: <span className="str">"monad-testnet"</span></div>
              <div className="line">{'}'});</div>
              <div className="line empty"></div>
              <div className="line comment">// 2. Execute Game Action</div>
              <div className="line"><span className="kwd">async function</span> <span className="fn">mintSword</span>(userAddress) {'{'}</div>
              <div className="line indent">
                <span className="kwd">try</span> {'{'}
              </div>
              <div className="line indent double">
                <span className="kwd">const</span> tx = <span className="kwd">await</span> rpg.<span className="fn">sponsor</span>({'{'}</div>
              <div className="line indent triple">target: contractAddress,</div>
              <div className="line indent triple">data: encodedMintData,</div>
              <div className="line indent triple">minRep: <span className="num">50</span> <span className="comment">// Min XP required</span></div>
              <div className="line indent double">{'}'});</div>
              <div className="line empty"></div>
              <div className="line indent double"><span className="fn">console</span>.log(<span className="str">"Gas Sponsored! Tx:"</span>, tx.hash);</div>
              <div className="line indent">{'}'} <span className="kwd">catch</span> (err) {'{'}</div>
              <div className="line indent double"><span className="fn">console</span>.error(<span className="str">"Reputation too low."</span>);</div>
              <div className="line indent">{'}'}</div>
              <div className="line">{'}'}</div>
            </div>

          </div>
        </div>

      </div>

      <style jsx>{`
        /* THEME VARIABLES */
        :root {
          --bg-black: #000000;
          --bg-dark: #111111;
          --border: #333333;
          --text-white: #ffffff;
          --text-grey: #888888;
          --accent-code: #cccccc;
        }

        .guide-container {
          padding: 60px;
          background-color: var(--bg-black);
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
          color: var(--text-white);
          margin-left: 280px;
        }

        .doc-layout {
          display: flex;
          min-height: 100vh;
          background: #000;
        }

        /* HEADER */
        .guide-header { margin-bottom: 60px; border-bottom: 1px solid var(--border); padding-bottom: 40px; }
        .guide-header h1 { font-size: 48px; font-weight: 900; letter-spacing: -2px; margin-bottom: 10px; }
        .subtitle { font-size: 18px; color: var(--text-grey); font-family: monospace; }

        /* LAYOUT */
        .content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        /* STEPS COLUMN */
        .steps-column { display: flex; flex-direction: column; gap: 40px; }

        .step-item { display: flex; gap: 20px; }
        
        .step-marker {
          font-family: monospace;
          color: var(--text-grey);
          border-right: 2px solid var(--border);
          padding-right: 20px;
          font-size: 14px;
          height: fit-content;
        }

        .step-content h3 { font-size: 20px; font-weight: 700; margin-bottom: 10px; }
        .step-content p { color: var(--text-grey); line-height: 1.6; font-size: 15px; margin-bottom: 15px; }

        .inline-code {
          background: var(--bg-dark);
          border: 1px solid var(--border);
          padding: 10px 15px;
          font-family: 'Fira Code', monospace;
          font-size: 13px;
          display: inline-block;
          border-radius: 4px;
          color: #fff;
        }

        code.highlight {
          background: rgba(255,255,255,0.1);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: monospace;
          color: #fff;
        }

        .note-box {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          color: var(--text-white);
          opacity: 0.8;
          margin-top: 10px;
        }

        /* CODE COLUMN */
        .code-window {
          background: #0d0d0d;
          border: 1px solid var(--border);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }

        .window-header {
          background: #1a1a1a;
          padding: 10px 15px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--border);
        }

        .dots { display: flex; gap: 6px; margin-right: 15px; }
        .dot { width: 10px; height: 10px; border-radius: 50%; }
        .red { background: #ff5f56; }
        .yellow { background: #ffbd2e; }
        .green { background: #27c93f; }

        .filename { font-family: monospace; font-size: 12px; color: var(--text-grey); }

        .code-body {
          padding: 20px;
          font-family: 'Fira Code', 'Courier New', monospace;
          font-size: 13px;
          line-height: 1.6;
          color: #a9b7c6;
        }

        /* SYNTAX HIGHLIGHTING (Monochrome adapted) */
        .kwd { color: #fff; font-weight: bold; } /* Keywords white */
        .str { color: #888; } /* Strings grey */
        .fn { color: #ccc; } /* Functions light grey */
        .num { color: #fff; } /* Numbers white */
        .comment { color: #444; font-style: italic; } /* Comments dark grey */
        
        .indent { padding-left: 20px; }
        .double { padding-left: 40px; }
        .triple { padding-left: 60px; }
        .empty { height: 10px; }

        @media (max-width: 900px) {
          .content-wrapper { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .doc-layout {
            flex-direction: column;
          }

          .guide-container {
            margin-left: 0;
            padding: 40px 20px;
          }
        }
      `}</style>
      </div>
    </div>
  );
};

export default IntegrationGuide;