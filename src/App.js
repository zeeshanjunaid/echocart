import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactWidget from "./components/contactWidget";
import Help from "./components/Help";
import Category from "./components/Category";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Help} />
          <Route path="/help" exact component={Help} />
          <Route path="/category/:cat_name" component={Category} />
        </Switch>
        <ContactWidget />
      </div>
    </Router>
  );
}

export default App;
