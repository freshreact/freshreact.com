import React, { Component } from 'react';
import "./D3.css";

class D3 extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
            <div className="d3-container">
                <h1>Welcome to D3</h1>
            </div>
        );
    }
}
export default D3;