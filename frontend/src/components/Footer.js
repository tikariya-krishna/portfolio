import { Link } from "react-router";

const Footer = () =>{
    return(
        <>
        <div className="mx-10">
            <div className="text-end flex justify-end items-end mb-10 gap-5">
                <p className="my-auto">get touch with me: </p>
                <div className="flex gap-5">
                    <a href="mailto:krishnatikariya16@gmail.com" className="text-[rgb(97,64,81)]"><i className="fa-solid fa-envelope text-2xl"></i></a>
                    <a href="https://github.com/tikariya-krishna"  className="text-[rgb(97,64,81)]"><i className="fa-brands fa-github text-2xl"></i></a>
                    <a href="https://www.linkedin.com/in/krishna-tikariya-19129a265/"  className="text-[rgb(97,64,81)]"><i className="fa-brands fa-linkedin text-2xl"></i></a>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;