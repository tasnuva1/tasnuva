import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route exact path="/projects" component={ProjectsPage} />
        {/* <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contect" component={ContectPage} />
          <Route exact component={Error} /> */}
      </Switch>
    </div>
  );
}

export default App;
