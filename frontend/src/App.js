import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./hocs/Layout";
import Home from "./containers/Home";
import About from "./containers/About";
import SignIn from "./containers/SignIn";
import NotFound from "./containers/NotFound";
import { Provider } from "react-redux";
//import store from "./store";

const App = () => (
  <Provider>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signin" component={SignIn} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

export default App;
