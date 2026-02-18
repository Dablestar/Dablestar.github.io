import utsLogo from '../assets/uts.png'
import utsCollegeLogo from '../assets/utscollege.png'
import yydhLogo from '../assets/yydh.webp'
import uwaterlooLogo from '../assets/uwaterloo.webp'

import androidLogo from '../assets/android.png'
import reactLogo from '../assets/react.png'
import nodeLogo from '../assets/node.png'
import javaLogo from '../assets/java.png'
import figmaLogo from '../assets/figma.png'
import unityLogo from '../assets/unity.svg'

import youngoneLogo from '../assets/youngone.svg'
import puzzleLogo from '../assets/puzzleai_logo.jpeg'
import militaryLogo from '../assets/mf.png'

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
                <ul className='list-disc !ml-20 text-2xl font-thin'>
                    <li className='!mt-5'>Name: Jungbyn Choi a.k.a Martin</li>
                    <li className='!mt-5'>Age: 22</li>
                    <li className='!mt-5'>Intl. Geek Student Studying CS/IT</li>
                </ul>
                <div className="profilePic">
                    <img className="w-54 h-70 !ml-20 border" src={profile} alt="Profile Picture"/>
                </div>
            </div> 

            <hr className='!mt-5'/>

            <div className="educationInfo flex flex-col gap-4 !mt-5 text-xl">
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
                <p className="title text-2xl font-regular !mt-5">Main Skills & Technologies</p>
                <div className="skillGrid grid-cols-2 grid-rows-3 grid !mt-4 text-xl">
                    <div className="skill flex flex-col items-center justify-center !p-4">
                        <img className="w-20 h-20 skillIcon" src={reactLogo} alt="reactLogo" />
                        <p className='text-xl font-regular'>React</p>
                        <p className='font-thin'>Front-end Components Implementation</p>
                    </div>
                    <div className="skill flex flex-col items-center justify-center !p-4">
                        <img className="w-20 h-20 skillIcon" src={nodeLogo} alt="nodeLogo" />
                        <p className='text-xl font-regular'>Node.js</p>
                        <p className='font-thin'>Back-end Server Implementation</p>
                    </div>
                    <div className="skill flex flex-col items-center justify-center !p-4">
                        <img className="w-20 h-20 skillIcon" src={unityLogo} alt="unityLogo" />
                        <p className='text-xl font-regular'>Unity</p>
                        <p className='font-thin'>2D/3D Game Development</p>
                    </div>
                    <div className="skill flex flex-col items-center justify-center !p-4">
                        <img className="w-20 h-20 skillIcon" src={javaLogo} alt="javaLogo" />
                        <p className='text-xl font-regular'>Java</p>
                        <p className='font-thin'>Object Oriented Implementation Approach</p>
                    </div>
                    <div className="skill flex flex-col items-center justify-center !p-4">
                        <img className="w-15 h-20 skillIcon" src={figmaLogo} alt="figmaLogo" />
                        <p className='text-xl font-regular'>Figma</p>
                        <p className='font-thin'>Collaborative User Interface Planning and Prototype</p>
                    </div>
                    <div className="skill flex flex-col items-center justify-center !p-4">
                        <img className="w-20 h-20 skillIcon" src={androidLogo} alt="androidLogo" />
                        <p className='text-xl font-regular'>Android</p>
                        <p className='font-thin'>Mobile Application Development w/Kotlin</p>
                    </div>
                </div>
            </div>

            <hr className='!mt-5' />
            
            <div className="carrerWork">
                <p className='title text-2xl font-regular !mt-5'>Carrer and Working Experience</p>
                <div className="workExpList grid grid-cols-1 grid-row-3 !p-5 text-xl">
                    <div className="workExp flex items-center">
                        <div className="imgContainer w-80 h-40 flex justify-center">
                            <img className="workImg w-40 h-40" src={puzzleLogo} alt="puzzleai" />
                        </div>
                        <div className="workContents w-80 !ml-5">
                            <div className="title font-regular">
                                PuzzleAI
                            </div>
                            <div className="workDescription font-thin">
                                Temporary Application Tester
                            </div>
                        </div>
                        <div className="workPeriod font-thin">
                                May 2025 - Jun 2025
                        </div>
                    </div>
                    <div className="workExp flex items-center !mt-5">
                        <div className="imgContainer w-80 h-40 flex justify-center">
                            <img className="workImg w-32 h-40" src={militaryLogo} alt="koodgun" />
                        </div>
                        <div className="workContents w-80 !ml-5">
                            <div className="title text-xl font-regular">
                                Republic of Korea Army
                            </div>
                            <div className="workDescription font-thin">
                                Mandatory Military Service
                            </div>
                        </div>
                        <div className="workPeriod font-thin">
                                Oct 2021 - Apr 2023
                        </div>
                    </div>
                    <div className="workExp flex items-center !mt-5">
                        <div className="imgContainer w-80 h-40 flex items-center">
                            <img className="workImg" src={youngoneLogo} alt=""/>    
                        </div>
                        <div className="workContents w-80 !ml-5">
                            <div className="title text-xl font-regular">
                                YoungOne Trading - EPM Network
                            </div>
                            <div className="workDescription font-thin">
                                Temporary Contract Office Clerk
                            </div>
                        </div>
                        <div className="workPeriod font-thin">
                                Jun 2021 - Aug 2021
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe