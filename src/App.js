import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Home,Portfolio,CoinPage} from 'pages';
import {Nav,BottomChart} from "components";
import {Container} from './App.styles';

export default function App() {
  return (
    <Router>
      <Container>
        <Nav/>

        <Switch>
          <Route exact path="/portfolio" component={Portfolio}>
          </Route>
          <Route exact path="/" component={Home}>
          </Route>
        </Switch>
        
      </Container>
    </Router>
  );
}
