import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Users from "./components/users/index.js";
import Main from "./components/main/index.js";
import Admin from "./components/admin /index.js";
import RegisterUser from "./components/registerUser/index.js";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/registerUser">
            <RegisterUser />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
