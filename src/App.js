import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactWidget from "./components/contactWidget";
import Help from "./components/Help";
import Category from "./components/Category";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Help} />
          <Route path="/help" exact component={Help} />
          <Route path="/category/:cat_id" exact component={Category} />
        </Switch>
        <ContactWidget />
      </div>
    </Router>
  );
}

export default App;
