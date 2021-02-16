import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from "./components/navbar/Navbar";

import Landing from "./components/landing/Landing";

import Templates from "./components/templates/Templates";

import Playground from './components/playground/Playground';

import Footer from "./components/footer/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/templates" component={Templates}/>
          <Route path="/playground" component={Playground}/>
          <Route path="/recharts" component={Playground}/>
          <Route path="/d3" component={Playground}/>
          <Route path="/api" component={Playground}/>
          <Route path="/cards" component={Playground}/>
          <Route path="/colorbrewer" component={Playground}/>
          <Route path="/routing" component={Playground}/>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
