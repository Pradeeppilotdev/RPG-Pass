import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const DocSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      path: '/doc/intro',
      label: 'Introduction',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
    },
    {
      path: '/doc/architecture',
      label: 'Architecture',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
    },
    {
      path: '/doc/guide',
      label: 'Integration Guide',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6m5.66-13.66l-4.24 4.24m0 6l-4.24 4.24M23 12h-6m-6 0H5m13.66 5.66l-4.24-4.24m0-6l-4.24-4.24"></path></svg>
    },
    {
      path: '/doc/providers',
      label: 'Providers',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="7" width="14" height="14" rx="1" ry="1"></rect><path d="M3 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z"></path><path d="M3 17a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2z"></path></svg>
    }
  ];

  return (
    <div className="doc-sidebar">
      {/* Logo Section */}
      <div className="sidebar-header">
        <div className="sidebar-logo" onClick={() => navigate('/')}>
          <img src={logo} alt="RPG Pass" />
          <span>RPG PASS</span>
        </div>
        <div className="docs-label">DOCUMENTATION</div>
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            <div className="nav-icon">{item.icon}</div>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <button className="back-home-btn" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </div>

      <style jsx>{`
        .doc-sidebar {
          width: 280px;
          min-height: 100vh;
          background: #0a0a0a;
          border-right: 1px solid #222;
          display: flex;
          flex-direction: column;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 100;
          padding: 30px 0;
        }

        .sidebar-header {
          padding: 0 24px;
          margin-bottom: 40px;
        }

        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          margin-bottom: 20px;
          transition: opacity 0.2s;
        }

        .sidebar-logo:hover {
          opacity: 0.8;
        }

        .sidebar-logo img {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }

        .sidebar-logo span {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.5px;
        }

        .docs-label {
          font-size: 10px;
          font-weight: 600;
          color: #666;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 8px 12px;
          background: #111;
          border-radius: 4px;
          display: inline-block;
        }

        .sidebar-nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 0 16px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: transparent;
          border: none;
          color: #888;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s;
          text-align: left;
          font-family: 'Inter', sans-serif;
        }

        .nav-item:hover {
          background: #111;
          color: #fff;
        }

        .nav-item.active {
          background: #fff;
          color: #000;
        }

        .nav-item.active .nav-icon {
          opacity: 1;
        }

        .nav-icon {
          width: 18px;
          height: 18px;
          opacity: 0.7;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-icon svg {
          width: 100%;
          height: 100%;
        }

        .nav-label {
          flex: 1;
        }

        .sidebar-footer {
          padding: 0 24px;
          margin-top: 20px;
        }

        .back-home-btn {
          width: 100%;
          padding: 12px 16px;
          background: #111;
          border: 1px solid #222;
          color: #888;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
        }

        .back-home-btn:hover {
          border-color: #fff;
          color: #fff;
          background: #0a0a0a;
        }

        @media (max-width: 768px) {
          .doc-sidebar {
            width: 100%;
            min-height: auto;
            position: static;
            border-right: none;
            border-bottom: 1px solid #222;
            padding: 20px 0;
          }

          .sidebar-header {
            padding: 0 20px;
            margin-bottom: 20px;
          }

          .sidebar-logo img {
            width: 32px;
            height: 32px;
          }

          .sidebar-logo span {
            font-size: 16px;
          }

          .sidebar-nav {
            padding: 0 12px;
            flex-direction: row;
            overflow-x: auto;
            gap: 8px;
          }

          .nav-item {
            flex-shrink: 0;
            padding: 10px 14px;
          }

          .nav-label {
            white-space: nowrap;
          }

          .sidebar-footer {
            padding: 0 20px;
            margin-top: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default DocSidebar;
