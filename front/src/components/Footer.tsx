import github from "../assets/github.svg"
import instagram from "../assets/instagram.svg"
import linkedin from "../assets/linkedin.svg"

function Footer(){
    return (
        <footer className="footer bg-[#242424] w-full h-2/12 flex flex-row text-white">
            <p>© Copyright by Daburu 2025 All rights reserved.</p>
            <div className="sns flex flex-row gap-4 !mt-2 float-right">
                    <a className="w-15 h-15 flex items-center justify-center rounded-[50%] bg-black border border-white" href="#">
                        <img className="w-10 h-10" src={github} alt="Social Icon 1" />
                    </a>
                    <a className="w-15 h-15 flex items-center justify-center rounded-[50%]" href="#">
                        <img className="w-10 h-10" src={instagram} alt="Social Icon 2" />
                    </a>
                    <a className="w-15 h-15 flex items-center justify-center rounded-[50%]" href="#">
                        <img className="w-10 h-10" src={linkedin} alt="Social Icon 3" />
                    </a>
                </div>
        </footer>
    )
}
export default Footer