//import "./App.scss";
import Footer from "./components/footer/footerPresenter";
import Header from "./components/header/headerPresenter";
import Main from "./components/main/mainPresenter";
import SideBar from "./components/sidenav/sidebarPresenter";
import Box from '@mui/material/Box';



<<<<<<< HEAD
=======
//App
>>>>>>> ba8a9c3f9cb87b69a79c14b0d9513e449e08cf15
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
