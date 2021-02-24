import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Import Components from components/

import Navbar from "./components/navbar/Navbar";

import Landing from "./components/landing/Landing";

import Recharts from "./components/recharts/Recharts";

import D3 from "./components/d3/D3";

import Cards from "./components/cards/Cards";

import Routing from "./components/routing/Routing";

import Footer from "./components/footer/Footer";

// Import CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        {/* Specify Routing Paths for Navigation */}
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/recharts" component={Recharts}/>
          <Route path="/d3" component={D3}/>
          <Route path="/cards" component={Cards}/>
          <Route path="/routing" component={Routing}/>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
