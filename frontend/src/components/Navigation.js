import { Link } from "react-router";

const Navigation = () =>{
    return(
            <>
            <nav className="md:flex md:justify-between mx-10 py-5">
                <div className="">
                    <p className="text-[rgb(97,64,81)] text-3xl">Krishna Tikariya</p>
                    <p>MERN Stack Developer</p>
                </div>

                <div className="my-10 md:my-auto ">
                    <ul className="flex gap-5 text-xl">
                        <li className="text-[rgb(171,39,79)]"><Link to="/">home</Link></li>
                        <li className="text-[rgb(97,64,81)]"><Link to="/about">about</Link></li>
                        <li className="text-[rgb(97,64,81)]"><Link to="/projects">projects</Link></li>
                    </ul>
                </div>
            </nav>


            
        </>
    )

}

export default Navigation;