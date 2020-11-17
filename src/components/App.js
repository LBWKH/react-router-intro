import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bulma/css/bulma.css";

import Homepage from "./HomePage";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import CampusList from "./campus/CampusList";
import CampusDetail from "./campus/CampusDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage language="pt-br" />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/campus" component={CampusList} />
          <Route path="/campus/:city" component={CampusDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
