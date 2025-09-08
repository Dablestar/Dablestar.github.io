import utsLogo from '../assets/uts.png'
import utsCollegeLogo from '../assets/utscollege.png'
import yydhLogo from '../assets/yydh.webp'
import uwaterlooLogo from '../assets/uwaterloo.webp'
import profile from '../assets/profile.jpg'
import "../index.css"

function AboutMe(){
    return(
         <div className="aboutMe w-full !mb-20">
            <span className="aboutMeText text-4xl">About Me</span>
            <div className="!mt-5">
                <p className="title text-2xl"> Personal Information</p>
            </div>
            <div className="personalInfo flex flex-row gap-8 mt-4 items-center">
                <ul className='list-disc !ml-20 text-xl font-thin'>
                    <li className='!mt-5'>Name: Jungbyn Choi a.k.a Martin</li>
                    <li className='!mt-5'>Age: 22</li>
                    <li className='!mt-5'>Nationality: Korean</li>
                </ul>
                <div className="profilePic">
                    <img className="w-48 h-64 !ml-20" src={profile} alt="Profile Picture"/>
                </div>
            </div> 

            <hr className='!mt-5'/>

            <div className="educationInfo grid grid-row-4 grid-col-1 gap-4 !mt-5 text-xl">
                <p className="title text-2xl">Education</p>
                <div className="school flex flex-row items-center !ml-4 font-thin">
                    <img src={utsLogo} alt="" className="schoolLogo w-30 h-30"/>
                    <ul className="schoolInfo !ml-4 w-80">
                        <li className='font-medium'>University of Technology Sydney</li>
                        <li>Bachelor of Information Technology</li>
                        <li>Feb 2024 - Present</li>
                    </ul>
                    <ul className="schoolActivities list-disc !ml-8">
                        <li>Advanced software skills with many team projects</li>
                        <li>Started interface designs</li>
                        <li>C++ / Blazor / React / Node.js</li>
                    </ul>
                </div>
                <div className="school flex flex-row items-center !ml-4 font-thin">
                    <img src={uwaterlooLogo} alt="waterloo" className="schoolLogo w-30 h-30"/>
                    <ul className="schoolInfo !ml-4 w-80">
                        <li className='font-medium'>University of Waterloo</li>
                        <li>Global Exchange - Computer Science</li>
                        <li>Jun 2025 - Apr 2025</li>
                    </ul>
                    <ul className="schoolActivities list-disc !ml-8">
                        <li>Collaborated with students from various backgrounds</li>
                        <li>Winter survival</li>
                        <li>Python / Kotlin</li>
                    </ul>
                </div>
                <div className="school flex flex-row items-center !ml-4 font-thin">
                    <img src={utsCollegeLogo} alt="" className="schoolLogo w-30 h-30"/>
                    <ul className="schoolInfo !ml-4 w-80">
                        <li className='font-medium'>UTS College</li>
                        <li>Diploma of Information Technology</li>
                        <li>Jun 2023 - Dec 2023</li>
                    </ul>
                    <ul className="schoolActivities list-disc !ml-8">
                        <li>Language skills and advanced software development</li>
                        <li>Started to adapted to Australian society</li>
                        <li>JavaFX / mySQL / </li>
                    </ul>
                </div>
                <div className="school flex flex-row items-center !ml-4 font-thin">
                    <img src={yydhLogo} alt="" className="schoolLogo w-30 h-30"/>
                    <ul className="schoolInfo !ml-4 w-80">
                        <li className='font-medium'>Yang-Young Digital Highschool</li>
                        <li>Software Development Major</li>
                        <li>Mar 2018 - Feb 2021</li>
                    </ul>
                    <ul className="schoolActivities list-disc !ml-8">
                        <li>Fundamentals of Programming and Web Development</li>
                        <li>Variety of Professional Certificates</li>
                        <li>HTML / CSS / Java / JSP / Unity / OracleDB</li>
                    </ul>
                </div>
            </div>
            <hr className='!mt-5'/>
            <div className="skillTech">
                <p className="title text-xl font-bold !mt-5">Main Skills & Technologies</p>
                <div className="skillGrid grid-cols-2 grid-rows-3 grid !mt-4">
                    <div className="skill flex flex-col items-center justify-center !p-4">
                        <img className="w-12 h-12 skillIcon" src="" alt="" />
                        <p className='text-xl'>Technology Name</p>
                        <p>Details</p>
                    </div>
                    <div className="skill flex flex-col items-center justify-center !p-4">
                        <img className="w-12 h-12 skillIcon" src="" alt="" />
                        <p className='text-xl'>Technology Name</p>
                        <p>Details</p>
                    </div>
                    <div className="skill flex flex-col items-center justify-center !p-4">
                        <img className="w-12 h-12 skillIcon" src="" alt="" />
                        <p className='text-xl'>Technology Name</p>
                        <p>Details</p>
                    </div>
                    <div className="skill flex flex-col items-center justify-center !p-4">
                        <img className="w-12 h-12 skillIcon" src="" alt="" />
                        <p className='text-xl'>Technology Name</p>
                        <p>Details</p>
                    </div>
                    <div className="skill flex flex-col items-center justify-center !p-4">
                        <img className="w-12 h-12 skillIcon" src="" alt="" />
                        <p className='text-xl'>Technology Name</p>
                        <p>Details</p>
                    </div>
                    <div className="skill flex flex-col items-center justify-center !p-4">
                        <img className="w-12 h-12 skillIcon" src="" alt="" />
                        <p className='text-xl'>Technology Name</p>
                        <p>Details</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe