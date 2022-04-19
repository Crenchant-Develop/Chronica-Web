//core
import React from "react";

//Pages
import { Config } from './components/GetUser';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './_pages/Main';
import Login from './_pages/Login';


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
