import { Link } from "react-router-dom"
import "../index.css"
import krFlag from "../assets/navBar/kr.png"
import enFlag from "../assets/navBar/en.png"
import { useState } from "react"



function NavBar({setNavHover}: {setNavHover: (isHover: boolean) => void}){
    return( 
        <div className={"sidebar w-1/12 flex flex-col bg-[#d9d9d9] p-5 min-h-screen fixed transition-all duration-300 ease-in-out hover:w-2/12"} onMouseEnter={() => setNavHover(true)} onMouseLeave={() => setNavHover(false)}>
                <div className="logo flex cinzel-decorative-regular text-center text-xl font-thin !mt-5 content-center">
                    <span className={"title w-8/12 text-white weight-bold text-center"}><Link to="/">Logo</Link></span>
                </div>
                <nav className="flex flex-grow flex-col">
                    <ul className="!mt-15 text-white font-thin text-center">
                        <li className="h-15 flex items-center justify-center transition hover:bg-[#242424] text-black hover:text-white"><Link to={"/"}>Home</Link></li>
                        <li className="h-15 flex items-center justify-center transition hover:bg-[#242424] text-black hover:text-white"><Link to={"/aboutme"}>About Me</Link></li>
                        <li className="h-15 flex items-center justify-center transition hover:bg-[#242424] text-black hover:text-white"><Link to={"/hobbies"}>Hobbies</Link></li>
                        <li className="h-15 flex items-center justify-center transition hover:bg-[#242424] text-black hover:text-white"><Link to={"/threads"}>r/daburu</Link></li>
                    </ul>
                </nav>
                <div className="languageSettings flex h-15 items-center justify-center gap-2 text-black">
                    <span>
                        <span className="w-25 h-15 rounded hover:bg-[#ABABAB]"><img className="w-10 h-5" src={enFlag} alt="English" /></span>
                        <span className="w-25 h-15 rounded hover:bg-[#ABABAB]"><img className="w-10 h-5"src={krFlag} alt="Korean" /></span>
                    </span>
                </div>
        </div>
        
    )
}
export default NavBar