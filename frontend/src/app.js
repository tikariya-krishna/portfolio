import React from "react";
import ReactDOM, { createRoot } from 'react-dom/client';
import { BrowserRouter , Routes , Route } from 'react-router';
import Home from "./components/Home";
const AppLayout = () =>{
    return(
        <>
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </div>
        </>
    )
}
const root = createRoot(document.getElementById("root"));
root.render(<AppLayout/>);