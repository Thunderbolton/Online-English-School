import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Teachers from "./components/Teachers";
import Pricing from "./components/Pricing";
import Materials from "./components/Materials";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/teachers">
              <Teachers />
            </Route>
            <Route path="/materials">
              <Materials />
            </Route>
            <Route path="/pricing">
              <Pricing />
            </Route>
          </Switch>        
      </div>
    </Router>
  );
}

export default App;
