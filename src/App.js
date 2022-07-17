// import logo from './logo.svg';
import { Route, Routes} from "react-router-dom";

import "./App.css";
import Home from "./Views/Home"

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand  mx-2" href="/">Hacker News</a>
</nav>
        <Routes>
          <Route path={"/"} exact element={<Home/>} />
        </Routes>
    </div>
  );
}

export default App;
