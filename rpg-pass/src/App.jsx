import { useState } from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Dashboard from './Pages/Dashboard';
import ClaimPerks from './Pages/ClaimPerks';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/dash' element={<Dashboard />} />
          <Route path='/claim' element={<ClaimPerks />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
