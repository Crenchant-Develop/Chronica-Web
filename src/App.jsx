//core
import React from "react";

//Pages
import GetUser, { Config } from './Components/GetUser';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Pages/Main';
import Login from './Pages/Login';


import {
  Routes, Route,
  // Switch, Link 
} from "react-router-dom";

//Assets
import LogoImage from "./logo.svg";
import './App.scss'; /* ◀ "CSS to SCSS" be has been converted. For SASS! */

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header logoImage={LogoImage} />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/login" element={<Login authURL={Config.authURL} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}


export default App;
