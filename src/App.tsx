import { Box, SxProps, Theme } from "@mui/material";
//import "./App.css";
import Footer from "./components/footer/footerPresenter";
import Header from "./components/header/headerPresenter";
import Main from "./components/main/mainPresenter";
import SideBar from "./components/sidenav/sidebarPresenter";

const AppSx: Function = (isDesktop: boolean): SxProps<Theme> => ({
  display: "grid",
  width: "100%",
  height: "100%",
  ...{
    gridTemplateColumns: `repeat(${isDesktop ? 64 : 36}, 1fr)`,
    gridTemplateRows: `repeat(${isDesktop ? 36 : 64}, 1fr)`,
  },
});

function App() {
  return (
    <Box sx={AppSx(true)}>
      <SideBar></SideBar>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Box>
  );
}

export default App;
