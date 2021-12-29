import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Teachers from "./components/Teachers";
import Materials from "./components/Materials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
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
        <Footer />         
      </div>
    </Router>
  );
}

export default App;
