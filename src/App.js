import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './components/Main';
import ShowUser from './components/GetUser';
import Stat from './components/Stat';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Main />} exact={true} />
          <Route path="/getuser" element={<ShowUser />} />
          <Route path="/stat" element={<Stat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
