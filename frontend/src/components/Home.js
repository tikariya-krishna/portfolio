import { Link } from "react-router";
const Home = () =>{
    return (
        <>
            <div className="relative w-2/3  m-auto py-20 px-10">
                <div className="lg:flex lg:items-end gap-3">
                    <p className="text-8xl text-[rgb(97,64,81)] mb-8 lg:mb-0">hello:</p>
                    <p className="text-xl">I'm a passionate MERN Stack developer with a creative edge, constantly fueled by the desire to learn and grow in the ever-evolving digital world.</p>
                </div>
                
                <p className="mt-10 text-xl">Read more <Link to="/about" className="text-[rgb(171,39,79)] hover:underline">aboute me</Link> or check out <Link to="/projects" className="text-[rgb(171,39,79)] hover:underline">my projects</Link>.</p>


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
export default Home;