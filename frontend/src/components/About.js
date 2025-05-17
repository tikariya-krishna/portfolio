const About = () =>{
    return(
        <>
            <div className="relative w-2/3  m-auto py-20 px-10">
                {/* Corder border top left */}
                <span className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[rgb(97,64,81)]" data-aos="fade-down"></span>
                {/* Corder border bottom left */}
                <span className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[rgb(97,64,81)]" data-aos="fade-up"></span>
                {/* Corder border top left */}
                <span className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[rgb(97,64,81)]" data-aos="fade-up"></span>
                {/* Corder border top left */}
                <span className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[rgb(97,64,81)]" data-aos="fade-down"></span>



                <div>
                    <p className="text-7xl text-[rgb(97,64,81)]">about me</p>
                    <div className="mt-10">
                        <span className="text-xl">I am...</span>
                        <p className="text-[rgb(34,34,34)]">a complete BCA from VNSGU University, Surat, Gujarat. I majorly focus on frontend development and crafting aesthetic user interfaces, but I have experience in MERN Development.</p>
                    </div>

                    <div className="mt-10">
                        <p className="text-xl mb-5 text-xl">Experience</p>

                        <div className="flex gap-4">
                            <p className="text-[rgb(171,39,79)]">2025</p><div><p className="text-xl text-[rgb(97,64,81)]">Frontend Developer -Mantrash dev</p><p className="text-[rgb(34,34,34)]">Worked with the Frontend team to build, optimize and maintain UI Projects.</p></div>
                        </div>
                    </div>

                </div>
            </div> 
        </>
    )
}
export default About;