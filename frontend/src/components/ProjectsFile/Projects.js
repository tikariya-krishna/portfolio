import projectList from "./projectList";
const  Projects = () =>{
    return(
        <>
        <div className="relative w-2/3  m-auto py-20 px-10">
                <p className="text-8xl text-[rgb(97,64,81)]">my projects</p>
                <div className="grid grid-cols-3 gap-3 mt-5">
                {projectList.map((project,id)=>{
                    return(
                        <div key={id} className="border-2 border-[rgb(97,64,81)] rounded-lg p-5">
                            <div className="text-justify">
                                <a href={project.projectLink} className="text-xl hover:text-[rgb(171,39,79)] hover:underline">{project.name}</a>
                                <p className="text-[rgb(34,34,34)]">{project.description}<span className="text-black font-semibold"> {project.languages}</span></p>
                            </div>
                        </div>
                    )
                })}
                </div>


            {/* Corder border top left */}
            <span className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[rgb(97,64,81)]" data-aos="fade-down"></span>
            {/* Corder border bottom left */}
            <span className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[rgb(97,64,81)]" data-aos="fade-up"></span>
            {/* Corder border top left */}
            <span className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[rgb(97,64,81)]" data-aos="fade-up"></span>
            {/* Corder border top left */}
            <span className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[rgb(97,64,81)]" data-aos="fade-down"></span>
            </div>
        </>
    )
}
export default Projects;