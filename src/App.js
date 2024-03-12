import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import LandingPage from './LandingPage';
import SignIn from './components/SignIn';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from '@vercel/analytics';


function App() {
  return (
    <>
      <Router>
        <Routes> {/* Use Routes instead of Route */}
          <Route path="/SignIn" element={<SignIn />} /> {/* Define your routes inside Routes */}
          <Route path="/" element={<LandingPage />} /> {/* Example: Default route */}
        </Routes>
      </Router>
      <SpeedInsights/>
      
    </>
  );
}

export default App;
