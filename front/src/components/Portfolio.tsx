function Portfolio() {
    return (
        <div className="portfolio">
            <h1 className="text-4xl font-regular">Portfolio</h1>
            <p className="text-xl font-thin mt-5">Here are some of the projects I've worked on:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-5">
                <div className="project-card">
                    <img src="" alt="" />
                    <h2 className="text-2xl font-regular">Project 1</h2>
                    <p className="text-lg font-thin">Description of Project 1. This project involved...</p>
                </div>
                <div className="project-card">
                    <img src="" alt="" />
                    <h2 className="text-2xl font-regular">Project 1</h2>
                    <p className="text-lg font-thin">Description of Project 1. This project involved...</p>
                </div>
                <div className="project-card">
                    <img src="" alt="" />
                    <h2 className="text-2xl font-regular">Project 1</h2>
                    <p className="text-lg font-thin">Description of Project 1. This project involved...</p>
                </div>
                <div className="project-card">
                    <img src="" alt="" />
                    <h2 className="text-2xl font-regular">Project 1</h2>
                    <p className="text-lg font-thin">Description of Project 1. This project involved...</p>
                </div>
            </div>
        </div>
    );
}
export default Portfolio