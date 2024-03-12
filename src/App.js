import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import { createGlobalStyle } from 'styled-components';
import LandingPage from './LandingPage';
import Team from './components/Team';
import SignIn from './components/SignIn';

function App() {
  return (
    <>
      <Router>
        <Routes> {/* Use Routes instead of Route */}
          <Route path="/SignIn" element={<SignIn />} /> {/* Define your routes inside Routes */}
          <Route path="/" element={<LandingPage />} /> {/* Example: Default route */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
