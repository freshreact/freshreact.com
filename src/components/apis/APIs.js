import React, { Component } from 'react';
import "./APIs.css";

class APIs extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
            <div className="apis-container">
                <h1>Welcome to APIs</h1>
            </div>
        );
    }
}
export default APIs;