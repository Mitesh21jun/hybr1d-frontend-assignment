// import logo from './logo.svg';
import { Route, Routes} from "react-router-dom";

import "./App.css";
import ArticlePage from "./Views/ArticlePage"
import Home from "./Views/Home"

function App() {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-light bg-primary">
  <a className="navbar-brand text-light  mx-2" href="/">Hacker News</a>
</nav>
        <Routes>
          <Route path={"/"} exact element={<Home/> } />
          <Route path={"/article/:id"} exact element={<ArticlePage/>} />
        </Routes>
    </div>
  );
}

export default App;
