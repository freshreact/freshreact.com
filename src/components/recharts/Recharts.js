import React, { Component } from 'react';
import "./Recharts.css";

class Recharts extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
            <div className="recharts-container">
                <h1>Welcome to Recharts</h1>
            </div>
        );
    }
}
export default Recharts;