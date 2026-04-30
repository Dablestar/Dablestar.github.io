const images = {
    project1: "",
    project2: "",
    project3: "",
    project4: "",
    project5: "",
    project6: "",
    project7: "",
    project8: "",
}
const logos: { [key: string]: JSX.Element } = {
    react: <img src="" alt="" className="w-10 h-10" />,
    nodejs: <img src="" alt="" className="w-10 h-10" />,
    mongodb: <img src="" alt="" className="w-10 h-10" />,
    android: <img src="" alt="" className="w-10 h-10" />,
    figma: <img src="" alt="" className="w-10 h-10" />,
    java: <img src="" alt="" className="w-10 h-10" />,
    gcp: <img src="" alt="" className="w-10 h-10" />,
    typescript: <img src="" alt="" className="w-10 h-10" />,
    javascript: <img src="" alt="" className="w-10 h-10" />
}


function Portfolio() {
    return (
        <div className="portfolio">
            <h1 className="text-4xl text-center font-regular">Portfolio</h1>
            <p className="text-xl font-thin mt-5 text-center">Here are some of the projects I've worked on:</p>
            
            <span className="title text-2xl font-regular">Development Projects</span>
            <div className="dev grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-5 mb-10">
                <div className="project-card border p-4 rounded-lg shadow-md flex flex-row gap-4">
                    <img src={images.project1} alt="Project 1" className="w-60 h-40 border"/>
                    <div>
                        <h2 className="text-2xl font-regular">Project 1</h2>
                        <div className="flex flex-row mt-2">
                            <span className="font-regular">Tech Stack:</span>
                            {/* put stack logos here */}
                            <ul className="flex flex-row gap-4 ml-2">
                                <li>{logos.react}</li>
                                <li>{logos.nodejs}</li>
                                <li>{logos.mongodb}</li>
                            </ul>
                        </div>
                        <p className="text-lg font-thin">Description of Project 1. This project involved...</p>    
                    </div>
                    
                </div>
                <div className="project-card border p-4 rounded-lg shadow-md flex flex-row gap-4">
                    <img src={images.project1} alt="Project 1" className="w-60 h-40 border"/>
                    <div>
                        <h2 className="text-2xl font-regular">Project 1</h2>
                        <div className="flex flex-row mt-2">
                            <span className="font-regular">Tech Stack:</span>
                            {/* put stack logos here */}
                            <ul className="flex flex-row gap-4 ml-2">
                                <li>{logos.react}</li>
                                <li>{logos.nodejs}</li>
                                <li>{logos.mongodb}</li>
                            </ul>
                        </div>
                        <p className="text-lg font-thin">Description of Project 1. This project involved...</p>    
                    </div>
                    
                </div>
                <div className="project-card border p-4 rounded-lg shadow-md flex flex-row gap-4">
                    <img src={images.project1} alt="Project 1" className="w-60 h-40 border"/>
                    <div>
                        <h2 className="text-2xl font-regular">Project 1</h2>
                        <div className="flex flex-row mt-2">
                            <span className="font-regular">Tech Stack:</span>
                            {/* put stack logos here */}
                            <ul className="flex flex-row gap-4 ml-2">
                                <li>{logos.react}</li>
                                <li>{logos.nodejs}</li>
                                <li>{logos.mongodb}</li>
                            </ul>
                        </div>
                        <p className="text-lg font-thin">Description of Project 1. This project involved...</p>    
                    </div>
                    
                </div>
                <div className="project-card border p-4 rounded-lg shadow-md flex flex-row gap-4">
                    <img src={images.project1} alt="Project 1" className="w-60 h-40 border"/>
                    <div>
                        <h2 className="text-2xl font-regular">Project 1</h2>
                        <div className="flex flex-row mt-2">
                            <span className="font-regular">Tech Stack:</span>
                            {/* put stack logos here */}
                            <ul className="flex flex-row gap-4 ml-2">
                                <li>{logos.react}</li>
                                <li>{logos.nodejs}</li>
                                <li>{logos.mongodb}</li>
                            </ul>
                        </div>
                        <p className="text-lg font-thin">Description of Project 1. This project involved...</p>    
                    </div>
                    
                </div>
                
            </div>

            <span className="title text-2xl font-regular">Design Projects</span>
            <div className="design grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-5">    
                
            </div>
        </div>
    );
}
export default Portfolio