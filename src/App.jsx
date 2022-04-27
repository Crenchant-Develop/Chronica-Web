//core
import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages
import { Config } from './components/GetUser';
import Header from './components/Header';
import Footer from './components/Footer';

import Main from './pages/Main';
import Login from './pages/Login';
import Inventory from './pages/Inventory';

//Assets
import LogoImage from "./logo.svg";
import './App.scss'; /* ◀ "CSS to SCSS" be has been converted. For SASS! */

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header logoImage={LogoImage} />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/login" element={<Login authURL={Config.authURL} />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
