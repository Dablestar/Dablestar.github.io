import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
 
//Route
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  )
}

// Main Contents Section 
function MainContents(){
  <div className="container">
    
  </div>
}

// Header Navigation Menu at the left side of the page
function HeaderNavMenu(){
  return(
    <ul>
    <li><button title="test" onClick={() => }></button></li>
    <li><button title="test"></button></li>
    <li><button title="test"></button></li>
    <li><button title="test"></button></li>
  </ul>  
  )
}

function FooterSection(){

}

function HomeScreen(){
  <div className="test">test-HomeScreen</div>
}
function AboutMe(){
  <div className="test">test-AboutMe</div>
}
function Hobbies(){
  <div className="test">test-Hobbies</div>
}
function RDaburu(){
  <div className="test">test-r/Daburu</div>
}
function ChangeLanguage(){
  alert('language change')
}





export default App
