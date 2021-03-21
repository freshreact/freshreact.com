import React, { Component } from 'react';
import * as d3 from "d3";
import stateToAbrv from './data/stateToAbrv.json';
import statesData from './data/statesData.json';
import stateGrid from './data/stateGrid.json';

class CartographChart extends Component{

    componentDidMount() {
        this.drawChart();
        window.scrollTo(0, 0)
    }

    drawChart() {

        const stateToPosition = Object.fromEntries(stateGrid.map(([col, row, state]) => [state, {row, col}]));

        const unemploymentWithPosition = statesData.map(d => {
            const abbr = stateToAbrv[d.state];
            const {row, col} = stateToPosition[abbr];
            
            return {
              state: abbr,
              rate: d.rate,
              row: row,
              col: col,
            }
        })

        const numberOfRows = d3.max(unemploymentWithPosition, d => d.row) + 1;

        const numberOfCols = d3.max(unemploymentWithPosition, d => d.col) + 1;

        const cellSize = 50;
        const mapWidth = numberOfCols * cellSize;
        const mapHeight = numberOfRows * cellSize;

        const row = d3.scaleBand()
            .domain(d3.range(numberOfRows)) // complete this
            .range([0, mapHeight]) // complete this
            .padding(0.05)

        const col = d3.scaleBand()
            .domain(d3.range(numberOfCols))
            .range([0, mapWidth])
            .padding(0.05)

        const color = d3.scaleSequential()
            .domain(d3.extent(statesData, d => d.rate))
            .interpolator(d3.interpolateBlues)

        
        const svg = d3.select("#cartograph")
            .attr('width', mapWidth)
            .attr('height', mapHeight);
            
         // add a group for each cell and position it according to its row and column
            
        const cells = svg.selectAll('g')
            .data(unemploymentWithPosition)
            .join('g')
            .attr('transform', d => `translate(${col(d.col)}, ${row(d.row)})`);
            
        // add a rectangle to each group and make it take up the entire cell
            
        cells.append('rect')
            .attr('width', col.bandwidth())
            .attr('height', row.bandwidth())
            .attr('fill', d => color(d.rate));
            
        // add state label to each group
            
        cells.append('text')
            .attr('font-size', 12)
            .attr('font-family', 'sans-serif')
            .attr('dominant-baseline', 'middle')
            .attr('text-anchor', 'middle')
            .attr('x', col.bandwidth() / 2)
            .attr('y', row.bandwidth() / 2)
            .text(d => d.state);
      }
    
    render(){
        return(
            <div className="cartograph-container">
                <div id="cartograph"></div>
            </div>
        );
    }
}
export default CartographChart;