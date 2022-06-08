import { SxProps, Theme } from "@mui/material";
import Container from "@mui/material/Container";

import Footer from "./components/footer/footerPresenter";
import Header from "./components/header/headerPresenter";
import Main from "./components/main/mainPresenter";
import SideBar from "./components/sidenav/sidebarPresenter";

const AppSx: Function = (isDesktop: boolean): SxProps<Theme> => ({
  display: "grid",
  ...{
    gridTemplateColumns: `repeat(${isDesktop ? 64 : 36}, 1fr)`,
    gridTemplateRows: `repeat(${isDesktop ? 36 : 64}, 1fr)`,
  },
});

function App() {
  return (
    <Container className="App" sx={AppSx(true)} disableGutters maxWidth={false}>
      <SideBar></SideBar>
      <Header></Header>
      <Main pageType={"inventory"}>
        <h2>ㅇㅋ 여기는 main 아무튼 main</h2>
      </Main>
      <Footer></Footer>
    </Container>
  );
}

export default App;
