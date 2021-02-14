import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/home";
import Login from "./views/login";
import Signup from "./views/signup";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
