import React, { Component } from 'react';
import "./Routing.css";

class Routing extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
            <div className="routing-container">
                <h1>Welcome to Routing</h1>
            </div>
        );
    }
}
export default Routing;