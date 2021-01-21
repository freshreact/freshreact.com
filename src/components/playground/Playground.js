import React, { Component } from 'react';
import "./Playground.css";

class Playground extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
            <div className="playground-container">
                <h1>Welcome to React Playground</h1>
            </div>
        );
    }
}
export default Playground;