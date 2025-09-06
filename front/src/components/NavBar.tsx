import { Link } from "react-router-dom"
import "../index.css"

function NavBar(){
    return(
        <div className={"sidebar w-3/12 flex flex-col bg-[#d9d9d9] p-5 min-h-screen"}>
                <div className="logo flex cinzel-decorative-regular text-center text-xl !mt-5 content-center">
                    <span className={"title w-8/12 text-white weight-bold text-center"}><Link to="/">Logo</Link></span>
                </div>
                <nav className="flex flex-grow flex-col">
                    <ul className="!mt-15 text-white font-bold text-center">
                        <li className="h-15 flex items-center justify-center transition hover:bg-[#242424] text-black hover:text-white"><Link to={"/"}>Home</Link></li>
                        <li className="h-15 flex items-center justify-center transition hover:bg-[#242424] text-black hover:text-white"><Link to={"/aboutme"}>About Me</Link></li>
                        <li className="h-15 flex items-center justify-center transition hover:bg-[#242424] text-black hover:text-white"><Link to={"/hobbies"}>Hobbies</Link></li>
                        <li className="h-15 flex items-center justify-center transition hover:bg-[#242424] text-black hover:text-white"><Link to={"/threads"}>r/daburu</Link></li>
                    </ul>
                </nav>
                <div className="languageSettings">
                    <span>
                        <img className="w-6 h-3" src="/path/to/english-flag.png" alt="English" />
                        <img className="w-6 h-3" src="/path/to/spanish-flag.png" alt="Spanish" />
                    </span>
                </div>
        </div>
        
    )
}
export default NavBar