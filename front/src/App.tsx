import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import AboutMe from './components/AboutMe'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Hobbies from './components/Hobbies'
import Threads from './components/Threads'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="contents pl-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/threads" element={<Threads />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
