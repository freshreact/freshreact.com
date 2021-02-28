import React, { Component } from 'react';
import { NavLink, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import "./Routing.css";

import RoutingComponent from './routing-components/RoutingComponent';

function RoutingHome() {
    return (
        <div className="portfolio-container">
            Routing Home
        </div>
    );
}

class Routing extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
            <BrowserRouter>
                <center>
                <div className="option-container">
                    <ul className="portfolio-options">
                        <li><NavLink activeClassName='is-active' className="port-option" to="/routing">Routing Home</NavLink></li>
                        <li><NavLink activeClassName='is-active' className="port-option" to="/routing/option1">Option1</NavLink></li>
                        <li><NavLink activeClassName='is-active' className="port-option" to="/routing/option2">Option2</NavLink></li>
                        <li><NavLink activeClassName='is-active' className="port-option" to="/routing/option3">Option3</NavLink></li>
                    </ul>
                    <br></br>
                    <Switch>
                        <Route exact path="/routing" component={RoutingHome} />
                        <Route path="/routing/option1" component={RoutingComponent} />
                        <Route path="/routing/option2" component={RoutingComponent}/>
                        <Route path="/routing/option3" component={RoutingComponent}/>
                        <Redirect to="/portfolio" />
                    </Switch>
                </div>
                </center>
            </BrowserRouter>
        );
    }
}
export default Routing;