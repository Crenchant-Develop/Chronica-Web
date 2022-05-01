import "./App.css";
import Footer from "./components/footer/footerPresenter";
import Header from "./components/header/headerPresenter";
import Main from "./components/main/mainPresenter";
import SideBar from "./components/sidenav/sidebarPresenter";

//
function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <div id="content">
        <Header></Header>
        <Main>
          <article></article>
        </Main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
