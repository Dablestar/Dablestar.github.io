import utsLogo from '../assets/uts.png'
import utsCollegeLogo from '../assets/utscollege.png'
import yydhLogo from '../assets/yydh.webp'
import profile from '../assets/profile.jpg'
import "../index.css"

function AboutMe(){
    return(
         <div className="aboutMe shrink-0">
            <span className="aboutMeText text-2xl font-bold">About Me</span>
            <div className="personalInfo flex flex-row gap-8 mt-4 items-center">
                <div className="">
                    <p className="title text-xl font-bold"> Personal Information</p>
                    <ul>
                        <li>Name: Jungbyn Choi a.k.a Martin</li>
                        <li>Age: 22</li>
                        <li>Nationality: Korean</li>
                    </ul>
                </div>
                <div className="profilePic">
                    <img className="w-24 h-32 " src={profile} alt="Profile Picture"/>
                </div>
            </div>

            <hr className='!mt-5'/>

            <div className="educationInfo grid grid-row-3 grid-col-1 gap-4 !mt-5">
                <p className="title text-xl font-bold">Education</p>
                <div className="school flex flex-row items-center">
                    <img src={utsLogo} alt="" className="schoolLogo w-30 h-30"/>
                    <ul className="schoolInfo !ml-4">
                        <li className='font-bold'>University of Technology Sydney</li>
                        <li>Bachelor of Information Technology</li>
                        <li>Feb 2024 - Present</li>
                    </ul>
                    <ul className="schoolActivities">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="school flex flex-row items-center !ml-4">
                    <img src={utsCollegeLogo} alt="" className="schoolLogo w-30 h-30"/>
                    <ul className="schoolInfo">
                        <li className='font-bold'>UTS College</li>
                        <li>Diploma of Information Technology</li>
                        <li>Jun 2023 - Dec 2023</li>
                    </ul>
                    <ul className="schoolActivities">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="school flex flex-row items-center !ml-4">
                    <img src={yydhLogo} alt="" className="schoolLogo w-30 h-30"/>
                    <ul className="schoolInfo">
                        <li className='font-bold'>Yang-Young Digital Highschool</li>
                        <li>Software Development Major</li>
                        <li>Mar 2018 - Feb 2021</li>
                    </ul>
                    <ul className="schoolActivities">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <hr className='!mt-5'/>
            <div className="skillTech">
                <p className="title text-xl font-bold !mt-5">Skills & Technologies</p>
                <div className="skillGrid grid-cols-2 grid-rows-2 grid gap-4 !mt-4">
                    <div className="skill flex flex-col items-center justify-center !p-4">
                        <img className="w-12 h-12 skillIcon" src="" alt="" />
                        <p>Technology Name</p>
                        <p>Details</p>
                    </div>
                    <div className="skill flex flex-col items-center justify-center !p-4">
                        <img className="w-12 h-12 skillIcon" src="" alt="" />
                        <p>Technology Name</p>
                        <p>Details</p>
                    </div>
                    <div className="skill flex flex-col items-center justify-center !p-4">
                        <img className="w-12 h-12 skillIcon" src="" alt="" />
                        <p>Technology Name</p>
                        <p>Details</p>
                    </div>
                    <div className="skill flex flex-col items-center justify-center !p-4">
                        <img className="w-12 h-12 skillIcon" src="" alt="" />
                        <p>Technology Name</p>
                        <p>Details</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe