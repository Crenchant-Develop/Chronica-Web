//import "./App.scss";
import Footer from "./components/footer/footerPresenter";
import Header from "./components/header/headerPresenter";
import Main from "./components/main/mainPresenter";
import SideBar from "./components/sidenav/sidebarPresenter";
import Box from '@mui/material/Box';



function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <Box id="content"
        sx={{ 
          display: 'flex',
          flex: 1,
          flexDirection: 'column' 
        }}
      >
        <Header></Header>
        <Main>
          <article></article>
        </Main>
        <Footer></Footer>
      </Box>
    </div>
  );
}

export default App;
