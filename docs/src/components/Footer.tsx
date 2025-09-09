import github from "../assets/github.svg"
import instagram from "../assets/instagram.svg"
import linkedin from "../assets/linkedin.svg"

function Footer(){
    return (
        <footer className="footer bg-[#242424] w-10/12 h-25 flex flex-row text-white justify-between fixed bottom-0 items-center p-5 right-0">
            <p className="copyrightText text-2xl !ml-20">© Copyright by Daburu 2025 All rights reserved.</p>
            <div className="sns flex flex-row gap-4 !mr-20">
                    <a className="w-15 h-15 flex items-center justify-center rounded-[50%] bg-black border border-white" href="https://github.com/Dablestar">
                        <img className="w-10 h-10" src={github} alt="Social Icon 1" />
                    </a>
                    <a className="w-15 h-15 flex items-center justify-center rounded-[50%] bg-linear-to-r [background:linear-gradient(60deg,#EEDC35_0%,#F26032_30%,#FF0303_65%,#941EFC_100%)]" href="https://www.instagram.com/buruchoi/">
                        <img className="w-10 h-10" src={instagram} alt="Social Icon 2" />
                    </a>
                    <a className="w-15 h-15 flex items-center justify-center rounded-[50%] bg-[#0077B5] !mr-20" href="https://www.linkedin.com/in/jungbyn-choi-ab8248285/">
                        <img className="w-10 h-10" src={linkedin} alt="Social Icon 3" />
                    </a>
                </div>
        </footer>
    )
}
export default Footer