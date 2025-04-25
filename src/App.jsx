import './App.css'
import Home from "./Home"
import AboutMe from "./AboutMe"
import Hobbies from "./Hobbies"
import Burugall from "./Burugall"
import NavBar from "./NavBar"
import { Route, Routes, BrowserRouter } from 'react-router-dom'
 
//Route
const App = () => {
  return(
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/aboutMe" element={<AboutMe/>}></Route>
          <Route path="/hobbies" element={<Hobbies/>}></Route>
          <Route path="/burugall" element={<Burugall/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}  

export default App
