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
        <div className="page w-10/12 h-auto flex flex-col">
          <div className="contents !p-5 w-10/12 flex flex-col fixed right-0 top-0 overflow-scroll shrink-0 ">
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
