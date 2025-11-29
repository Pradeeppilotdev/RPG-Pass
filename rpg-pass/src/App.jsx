import './App.css';

// Main App Pages
import LandingPage from './Pages/LandingPage';
import Dashboard from './Pages/Dashboard';
import ClaimPerks from './Pages/ClaimPerks';

// Documentation Pages
import IntroductionPage from "./DocPages/IntroductionPage";
import ArchitecturePage from "./DocPages/ArchitecturePage";
import IntegrationGuide from "./DocPages/IntegrationGuide";
import SupportedProviders from "./DocPages/SupportedProviders";

// Components & Contexts
import ProtectedRoute from './Components/ProtectedRoute';
import { XPProvider } from './contexts/XPContext';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <XPProvider>
      <BrowserRouter>
        <Routes>
          
          {/* --- PUBLIC LANDING --- */}
          <Route path="/" element={<LandingPage />} />

          {/* --- PROTECTED APP ROUTES --- */}
          {/* These require Privy Login */}
          <Route 
            path='/dash' 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path='/claim' 
            element={
              <ProtectedRoute>
                <ClaimPerks />
              </ProtectedRoute>
            } 
          />

          {/* --- PUBLIC DOCUMENTATION ROUTES --- */}
          {/* These are accessible to judges without login */}
          <Route path='/doc/intro' element={<IntroductionPage />} />
          <Route path='/doc/architecture' element={<ArchitecturePage />} />
          <Route path='/doc/guide' element={<IntegrationGuide />} />
          <Route path='/doc/providers' element={<SupportedProviders />} />

        </Routes>
      </BrowserRouter>
    </XPProvider>
  )
}

export default App;