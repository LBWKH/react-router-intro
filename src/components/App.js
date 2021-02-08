import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bulma/css/bulma.css";

import DogsList from "./DogsList";
import HowToAdopt from "./HowToAdopt";
import Navbar from "./Navbar";
import DogDetail from "./DogDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Route exact path="/" component={DogsList} />
          <Route path="/como-adotar">
            <HowToAdopt language="en-us" />
          </Route>
          <Route path="/cachorro/:dogName" component={DogDetail} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
