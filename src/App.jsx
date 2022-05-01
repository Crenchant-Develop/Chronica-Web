//core
import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages
import Inventory from './pages/Inventory';
import Main from './pages/Main';
import Login from './pages/Login';

//components
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import { Config } from './components/GetUser';

//Assets
import './App.scss'; /* ◀ "CSS to SCSS" be has been converted. For SASS! */


class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Section>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login authURL={Config.authURL} />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes >
        </Section>
        <Footer className="footer" id="wrapper"/>
      </div>
    );
  }
}

export default App;