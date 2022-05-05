//core
import React from "react";
// import { Routes, Route } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

//Pages
// import Inventory from './pages/Inventory';
// import Main from './pages/Main';
// import Login from './pages/Login';

//Components
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Footer from './components/Footer';
// import { Config } from './components/GetUser';

//Designs
import './App.scss'; /* ◀ "CSS to SCSS" be has been converted. For SASS! */
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from "./design/Theme";
import wrapper from "./design/Wrapper";

function App() {
  const gridContainer = {
    display: 'grid',
    minHeight: '100vh'
  };

  const leftContainer = {
    backgroundColor: 'secondary.dark'
  };

  const rightContainer = {
    zIndex: '-1'
  };

  return (
    <ThemeProvider theme={Theme} >
      <Box sx={gridContainer}>
        <Grid className="App" container direction="row">
          <Grid className="left-container"
            direction="columns" sx={leftContainer} item xs={2}>
            <Nav condition={true} />
          </Grid>
          <Grid className="right-container"
            direction="columns" sx={rightContainer} item xs>
            <Header className="fixed-header" sx={wrapper} />
            <Article className="article">
              {'삑삑삑'.repeat(1000)}
            </Article>
            <Footer className="footer" sx={wrapper} />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

{/* <Grid container className="App container">
  <Header className="header" id="wrapper" itemStyle={12} />
  <Sections className="article sections" id="wrapper" itemStyle={12}>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login authURL={Config.authURL} />} />
      <Route path="/inventory" element={<Inventory />} />
    </Routes >
  </Sections>
  <Footer className="footer" id="wrapper" itemStyle={12} />
</Grid> */}

export default App;