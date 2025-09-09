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
        <div className="page w-10/12 !ml-80 !mb-25 !p-5 flex flex-col min-h-screen">
          <div className="contents w-10/12 overflow-y-scroll">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/hobbies" element={<Hobbies />} />
              <Route path="/threads" element={<Threads />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
