import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Manage from './pages/Manage';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login></Login>}></Route>
                <Route path="/manage" element={<Manage></Manage>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
            </Routes>
        </div>
    );
}

export default App;
