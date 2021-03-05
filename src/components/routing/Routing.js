import React, { Component } from 'react';
import { NavLink, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import "./Routing.css";

import RoutingComponent from './routing-components/RoutingComponent';

function RoutingHome(props) {
    return (
        <div className="routing-home-container" style={{backgroundColor: props.color }}>
            <div className="routing-individual-component">
                <p className="route-header">Welcome to {props.route} component!</p>
                <p className="route-color">The background color is:<br></br>{props.color}</p>
            </div>
        </div>
    );
}

class Routing extends Component{

    state = {
        // Default background color
        home: {
            background: '#FF7197'
        },
        routeOne: {
            background: '#7EFFD0'
        },
        routeTwo: {
            background: '#7FD2FF'
        },
        routeThree: {
            background: '#A592FF'
        }
    };

    // Bring window view to top on change
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
            <BrowserRouter>
                <center>
                <div className="routing-container">
                    <ul className="routing-options">
                        <li>
                            <NavLink activeClassName='is-active' className="route-option" to="/routing">
                                <div className="route-op" style={{backgroundColor: this.state.home.background }}>Home</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='is-active' className="route-option" to="/routing/route1">
                                <div className="route-op" style={{backgroundColor: this.state.routeOne.background }}>Route 1</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='is-active' className="route-option" to="/routing/route2">
                                <div className="route-op" style={{backgroundColor: this.state.routeTwo.background }}>Route 2</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='is-active' className="route-option" to="/routing/route3">
                                <div className="route-op" style={{backgroundColor: this.state.routeThree.background }}>Route 3</div>
                            </NavLink>
                        </li>
                    </ul>
                    <br></br>
                    <Switch>
                        <Route exact path="/routing" component={() => <RoutingHome route="Home" color={this.state.home.background}/>} />
                        <Route path="/routing/route1" component={() => <RoutingComponent route="Route 1" color={this.state.routeOne.background}/>} />
                        <Route path="/routing/route2" component={() => <RoutingComponent route="Route 2" color={this.state.routeTwo.background}/>}/>
                        <Route path="/routing/route3" component={() => <RoutingComponent route="Route 3" color={this.state.routeThree.background}/>}/>
                        <Redirect to="/portfolio" />
                    </Switch>
                </div>
                </center>
            </BrowserRouter>
        );
    }
}
export default Routing;