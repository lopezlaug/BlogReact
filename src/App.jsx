import NavBar from "./Components/NavBar";
import Search from "./Components/Search";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import PostDetails from "./Components/PostDetails";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <NavBar />
          <Search />
          <div className="content">
            <Switch>
              <Route path="/posts">
                <Home />
              </Route>
              <Route path="/posts/:id">
                <PostDetails />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
