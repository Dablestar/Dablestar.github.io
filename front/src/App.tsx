import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import AboutMe from './components/AboutMe'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Hobbies from './components/Hobbies'
import Threads from './components/Threads'
import "./index.css"

import { useState } from 'react'


function App() {
  const [isNavHover, setNavHover] = useState(false);
  return (
    <>
      <BrowserRouter>
        <NavBar setNavHover={setNavHover}/>
        <div className={`page !mb-25 !p-5 flex flex-col min-h-screen ${isNavHover ? "!ml-75" : "!ml-40"} transition-all duration-300 ease-in-out`}>
          <div className="contents flex-grow overflow-y-scroll">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/hobbies" element={<Hobbies />} />
              <Route path="/threads" element={<Threads />} />
            </Routes>
          </div>
          <Footer isNavHover={isNavHover} />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
