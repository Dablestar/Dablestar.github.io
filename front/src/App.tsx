import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import AboutMe from './components/AboutMe'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Hobbies from './components/Hobbies'
import Threads from './components/Threads'
import "./index.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="contents w-full flex flex-row">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/threads" element={<Threads />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
