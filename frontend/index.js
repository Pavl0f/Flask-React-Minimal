import React, { Component } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Main from "./js/main"
import './scss/index'


class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {};  
  };

  render() {

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
        </Switch>
      </Router>
    );
  }
}


ReactDOM.render(<Index />, document.getElementById("root"));
