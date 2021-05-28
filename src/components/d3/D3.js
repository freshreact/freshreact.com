import React, { Component } from 'react';
import "./D3.css";
import BarChart from './d3-components/BarChart';

class D3 extends Component{
    
    render(){
        return(
            <div className="d3-container">
                <BarChart />
            </div>
        );
    }
}
export default D3;