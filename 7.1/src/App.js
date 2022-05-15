import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Main from "./components/main";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import Error from "./components/error";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Main/>}/>
                <Route path="/about" exact element={<About/>}/>
                <Route path="/services" exact element={<Services/>}/>
                <Route path="/contact/" exact element={<Contact/>}/>
                <Route path="/contact/:lang" exact element={<Contact/>}/>
                <Route path="*" exact element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
