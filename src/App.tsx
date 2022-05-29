import { Box, SxProps, Theme } from "@mui/material";
//import "./App.css";
import Footer from "./components/footer/footerPresenter";
import Header from "./components/header/headerPresenter";
import Main from "./components/main/mainPresenter";
import SideBar from "./components/sidenav/sidebarPresenter";

const AppSx: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "1fr 9fr",
  gridTemplateRows: "minmax(100vh, auto)",
};

const rightItemSx: SxProps<Theme> = {
  display: "grid",
  gridTemplateRows: "2fr 17fr 1fr",
};

function App() {
  return (
    <Box sx={AppSx}>
      <SideBar></SideBar>
      <Box sx={rightItemSx} className={"rightItems"}>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </Box>
    </Box>
  );
}

export default App;
