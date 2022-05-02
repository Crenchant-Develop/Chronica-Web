//core
import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages
import Inventory from './pages/Inventory';
import Main from './pages/Main';
import Login from './pages/Login';

//components
import Header from './components/Header';
import Sections from './components/Sections';
import Footer from './components/Footer';
import { Config } from './components/GetUser';

//Assets
import './App.scss'; /* ◀ "CSS to SCSS" be has been converted. For SASS! */


class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <!-- fixed-header 다음 아래에서 시작하도록 본문을 표시하는 법을 검색해야합니다  --> */}
        <Header className="header" id="wrapper"/> 
        <Sections className="article sections">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login authURL={Config.authURL} />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes >
        </Sections>
        <Footer className="footer" id="wrapper"/>
      </div>
    );
  }
}

export default App;