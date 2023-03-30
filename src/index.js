import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Component/Home.js';
import About from './Component/About.js';
import Login from './Component/Login.js';
import Registration from './Component/Registration.js';


import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
<Router>
    <Routes>
      <Route>
        <Route path="/" element={<App />}>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Registration" element={<Registration/>}></Route> 
        </Route>
      </Route>
    </Routes>
  </Router>
);
