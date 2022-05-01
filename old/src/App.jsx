//core
import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages
<<<<<<< HEAD:old/src/App.jsx
import { Config } from './components/GetUser';
import Header from './components/Header';
import Nav from './components/Nav';
import Lorem from './components/Lorem';
import Footer from './components/Footer';

=======
import Inventory from './pages/Inventory';
>>>>>>> 908b533 (일단 커밋):src/App.jsx
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
<<<<<<< HEAD:old/src/App.jsx
      <div className="App" id="wrapper">
<<<<<<< HEAD:old/src/App.jsx
        <div className="container">
          <Header />
          <Nav />
          <Routes>
<<<<<<< HEAD
            <Route exact path="/" element={<Main />} />
=======
            <Route path="/" element={<Main/>} />
>>>>>>> 4ae2f64 (no message)
            <Route path="/login" element={<Login authURL={Config.authURL} />} />
            <Route path="/inventory" element={<TestButton />} />
          </Routes>
        </div>
        <div className="section">
          <Lorem />
          <Routes>
=======
        <Header />
=======
      <div className="App">
        {/* <Header /> */}
>>>>>>> ec43922 (코드정리):src/App.jsx
        <Section>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login authURL={Config.authURL} />} />
>>>>>>> 908b533 (일단 커밋):src/App.jsx
            <Route path="/inventory" element={<Inventory />} />
          </Routes >
        </Section>
        <Footer className="footer" id="wrapper"/>
      </div>
    );
  }
}

export default App;