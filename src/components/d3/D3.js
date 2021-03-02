import React, { Component } from 'react';
import * as d3 from "d3";
import "./D3.css";

class D3 extends Component{

    componentDidMount() {
        this.drawChart();
        window.scrollTo(0, 0)
    }

    drawChart() {
        const data = [12, 5, 6, 6, 9, 10];

        const w = 600;
        const h = 400;
        
        const svg = d3.select("#d3-cont")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .style("margin-left", 100);
                      
        svg.selectAll("rect")
          .data(data)
          .enter()
          .append("rect")
          .attr("x", (d, i) => i * 70)
          .attr("y", (d, i) => h - 10 * d)
          .attr("width", 65)
          .attr("height", (d, i) => d * 10)
          .attr("fill", "green")
      }
    
    render(){
        return(
            <div className="d3-container">
                <h1>Welcome to D3</h1>
                <div id="d3-cont"></div>
            </div>
        );
    }
}
export default D3;