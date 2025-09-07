function AboutMe(){
    return(
         <div className="aboutMe m-4 p-4 w-full h-full">
            <span className="aboutMeText text-2xl font-bold">About Me</span>

            <div className="personalInfo">
                <div className="">
                    <p className="title text-xl font-bold"> Personal Information</p>
                    <ul>
                        <li>Name: Jungbyn Choi a.k.a Martin</li>
                        <li>Age: 22</li>
                        <li>Nationality: Korean</li>
                    </ul>
                </div>
                <div className="profilePic">
                    <img className="w-48 h-48 rounded-full" src="https://avatars.githubusercontent.com/u/55615385?v=4" alt="Profile Picture"/>
                </div>
            </div>
            <div className="educationInfo">
                <p className="title text-xl font-bold">Education</p>
                <div className="school">
                    <img src="" alt="" className="schoolLogo"/>
                    <ul className="schoolInfo">
                        <li>University of Technology Sydney</li>
                        <li>Bachelor of Information Technology</li>
                        <li>Feb 2024 - Present</li>
                    </ul>
                    <ul className="schoolActivities">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="school">
                    <img src="" alt="" className="schoolLogo"/>
                    <ul className="schoolInfo">
                        <li>UTS College</li>
                        <li>Diploma of Information Technology</li>
                        <li>Jun 2023 - Dec 2023</li>
                    </ul>
                    <ul className="schoolActivities">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="school">
                    <img src="" alt="" className="schoolLogo"/>
                    <ul className="schoolInfo">
                        <li>Yang-Young Digital Highschool</li>
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
        </div>
    )
}
export default AboutMe