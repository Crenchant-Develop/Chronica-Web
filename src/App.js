import { Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import Main from './components/Main';
import ShowUser from './components/GetUser';
import Stat from './components/Stat';
import Bottom from './components/Bottom';
import './App.css';

function App() {
  return (
    <div>
      <Logo />
      <Routes>
        <Route path="/" element={<Main />} exact={true} />
        <Route path="/getuser" element={<ShowUser />} />
        <Route path="/stat" element={<Stat />} />
      </Routes>
      <Bottom />
    </div>
  );
}

export default App;
