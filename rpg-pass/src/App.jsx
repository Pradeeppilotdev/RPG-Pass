import './App.css';
import LandingPage from './Pages/LandingPage';
import Dashboard from './Pages/Dashboard';
import ClaimPerks from './Pages/ClaimPerks';
import ProtectedRoute from './Components/ProtectedRoute';
import { XPProvider } from './contexts/XPContext';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <XPProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
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
          </Routes>
        </BrowserRouter>
      </XPProvider>
    </>
  )
}

export default App
