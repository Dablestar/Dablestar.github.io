import jsLogo from "../assets/js.jpg"
import tsLogo from "../assets/ts.png"
import reactLogo from "../assets/react.png"
import nodeLogo from "../assets/node.png"
import mongoLogo from "../assets/mongo.png"
import androidLogo from "../assets/android.png"
import figmaLogo from "../assets/figma.png"
import javaLogo from "../assets/java.png"
import gcpLogo from "../assets/gcp.png"
import blazorLogo from "../assets/blazor.png"
import azureLogo from "../assets/azure.png"
import type { JSX } from "react/jsx-dev-runtime"

import project1Img from "../assets/projects/project1.png"
import project2Img from "../assets/projects/project2.png"
import project3Img from "../assets/projects/project3.png"
import project4Img from "../assets/projects/project4.png"


const images: { [key: string]: JSX.Element } = {
    project1: <img src={project1Img} alt="Project 1" className="w-45 h-40 border object-fit"/>,
    project2: <img src={project2Img} alt="Project 2" className="w-45 h-40 border object-fit"/>,
    project3: <img src={project3Img} alt="Project 3" className="w-45 h-40 border object-fit"/>,
    project4: <img src={project4Img} alt="Project 4" className="w-45 h-40 border object-fit "/>,
}
const logos: { [key: string]: JSX.Element } = {
    react: <img src={reactLogo} alt="React" className="w-11 h-10" />,
    nodejs: <img src={nodeLogo} alt="Node.js" className="w-10 h-10" />,
    mongodb: <img src={mongoLogo} alt="MongoDB" className="w-10 h-10" />,
    android: <img src={androidLogo} alt="Android" className="w-10 h-10" />,
    figma: <img src={figmaLogo} alt="Figma" className="w-10 h-10" />,
    java: <img src={javaLogo} alt="Java" className="w-10 h-10" />,
    gcp: <img src={gcpLogo} alt="GCP" className="w-10 h-10" />,
    typescript: <img src={tsLogo} alt="TypeScript" className="w-10 h-10" />,
    javascript: <img src={jsLogo} alt="JavaScript" className="w-10 h-10" />,
    blazor: <img src={blazorLogo} alt="Blazor" className="w-10 h-10" />,
    azure: <img src={azureLogo} alt="Azure" className="w-10 h-10" />
}


function Portfolio() {
    return (
        <div className="portfolio">
            <h1 className="text-4xl text-center font-regular">Portfolio</h1>
            <p className="text-xl font-thin mt-5 text-center">Here are some of the projects I've worked on:</p>
            
            <span className="title text-2xl font-regular">Development Projects</span>
            <div className="dev grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-5 mb-10">
                <div className="project-card border p-4 rounded-lg shadow-md flex flex-row gap-4">
                    {images.project1}
                    <div>
                        <div>
                            <h2 className="text-2xl font-semibold">Washare</h2>
                            <h4 className="text-sm font-regular">desc1</h4>
                        </div>
                        
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
                    {images.project2}
                    <div>
                        <div>
                            <h2 className="text-2xl font-semibold">Project 2</h2>
                            <h4 className="text-sm font-regular">desc2</h4>
                        </div>
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
                    {images.project3}
                    <div>
                        <div>
                            <h2 className="text-2xl font-semibold">Songblocker</h2>
                            <h4 className="text-sm font-regular">desc3</h4>
                        </div>
                        <div className="flex flex-row mt-2">
                            <span className="font-regular">Tech Stack:</span>
                            {/* put stack logos here */}
                            <ul className="flex flex-row gap-4 ml-2">
                                <li>{logos.react}</li>
                                <li>{logos.nodejs}</li>
                                <li>{logos.mongodb}</li>
                            </ul>
                        </div>
                        <p className="text-lg font-thin">Description of Songblocker. This project involved...</p>    
                    </div>
                    
                </div>
                <div className="project-card border p-4 rounded-lg shadow-md flex flex-row gap-4">
                    {images.project4}
                    <div>
                        <h2 className="text-2xl font-regular">Project 4</h2>
                        <div className="flex flex-row mt-2">
                            <span className="font-regular">Tech Stack:</span>
                            {/* put stack logos here */}
                            <ul className="flex flex-row gap-4 ml-2">
                                <li>{logos.react}</li>
                                <li>{logos.nodejs}</li>
                                <li>{logos.mongodb}</li>
                            </ul>
                        </div>
                        <p className="text-lg font-thin">Description of Project 4. This project involved...</p>    
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