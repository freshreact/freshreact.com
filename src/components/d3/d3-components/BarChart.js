import React, { Component } from 'react';
import * as d3 from "d3";
import "../D3.css";

class BarChart extends Component{

    componentDidMount() {
        this.drawChart();
        window.scrollTo(0, 0)
    }

    drawChart() {

        const margin = ({top: 10, bottom: 40, left: 50, right: 10});
        const data = [
            {name: 'AMZN', score: 3372.20},
            {name: 'GOOGL', score: 2270.67},
            {name: 'TSLA', score: 677.02},
            {name: 'MSFT', score: 255.85},
            {name: 'DIS', score: 187.89},
            {name: 'AAPL', score: 133.00}
        ];

        const visWidth = 900 - margin.left - margin.right;
        const visHeight = 600 - margin.top - margin.bottom;

        const names = data.map(d => d.name);

        const maxScore = d3.max(data, d => d.score);

        const w = 900;
        const h = 600;

        const x = d3.scaleLinear()
            .domain([0, maxScore])
            .range([0, visWidth])

        const xAxis = d3.axisBottom(x)

        const y = d3.scaleBand()
            .domain(names)
            .range([0, visHeight])
            .padding(0.2)

        const yAxis = d3.axisLeft(y);
        
        const svg = d3.select("#d3-cont")
            .append("svg")
            .attr("width", w)
            .attr("height", h+100)

        const g = svg.append("g")
            .attr('transform', `translate(${margin.left}, ${margin.bottom})`);

        // bind our data to rectangles
        g.selectAll('rect')
            .data(data)
            .join('rect')
                // set attributes for each bar
                .attr('x', 0) // each bar starts at the same x position
                .attr('y', d => y(d.name)) // pass the name to the y-scale to get y position
                .attr('width', d => x(d.score)) // pass the score to the x-scale to get width of the bar
                .attr('height', y.bandwidth()) // get the width of each band in the scale
                .attr('fill', 'steelblue') // color
                .attr("class", "bar")
                .on('mouseenter', function(d) {
                    // this refers to the circle
                    // select it and change its attributes
                    d3.select(this)
                        .attr('fill', 'blue');
                            
                })
                // or separate the function out
                .on('mouseleave', mouseLeave);
                
        
        g.append('g')
            .call(yAxis)

        g.append('g')
            // we have to move this group down to the bottom of the vis
            .attr('transform', `translate(0, ${visHeight})`)
            .call(xAxis)
          // add a label for the x-axis
          .append('text')
            .attr('fill', 'black')
            .attr('font-family', 'sans-serif')
            .attr('x', visWidth / 2)
            .attr('y', 40)
            .text("Price (per share)");

        function mouseLeave() {
            d3.select(this)
                .attr('fill', 'steelblue');
        }
    }
    
    render(){
        return(
            <div className="d3-container">
                <h3>Stock Prices 4/9/2021 Close</h3>
                <div id="d3-cont"></div>
            </div>
        );
    }
}
export default BarChart;