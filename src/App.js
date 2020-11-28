import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./views/login";
import Signup from "./views/signup";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
