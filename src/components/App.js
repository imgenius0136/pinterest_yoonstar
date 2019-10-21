import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="box">
          <Header />
        </div>
      </header>
      <section>
        <div className="box">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="home" />} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </section>
    </div>
  );
}

export default App;
