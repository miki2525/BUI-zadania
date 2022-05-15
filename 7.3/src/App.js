import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Main from "./components/main";
import Error from "./components/error";
import Add from "./components/add";
import Sub from "./components/sub";
import Mul from "./components/mul";
import Div from "./components/div";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Main/>}/>
                <Route path="/add/:a/:b" exact element={<Add/>}/>
                <Route path="/sub/:a/:b" exact element={<Sub/>}/>
                <Route path="/mul/:a/:b" exact element={<Mul/>}/>
                <Route path="/div/:a/:b" exact element={<Div/>}/>
                <Route path="*" exact element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
