import React from "react";
import ReactDOM, { createRoot } from 'react-dom/client';
import { BrowserRouter , Routes , Route } from 'react-router';
import Home from "./components/Home.js";
import Navigation from "./components/navigation.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Projects from './components/ProjectsFile/Projects.js';
const AppLayout = () =>{
    return(
        <>
        <div className="bg-[rgb(241,221,207)] font-tenor">
            <div className=" container mx-auto min-h-screen flex flex-col">
                 
                <BrowserRouter>
                <Navigation/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                    </Routes>
                <Footer/>
                </BrowserRouter>
                
            </div>
        </div>
        </>
    )
}
const root = createRoot(document.getElementById("root"));
root.render(<AppLayout/>);