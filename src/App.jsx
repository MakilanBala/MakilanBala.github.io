import { useState } from 'react'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import CheatGameProject from './pages/Cheat_Game_Project'

import Header from './components/Header'
import Footer from './components/Footer'

import './styles/global.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='app-container'>
      <Header />
      
      <main style={{ flex:1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cheat-game" element={<CheatGameProject />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App
