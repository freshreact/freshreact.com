import React, { Component } from 'react';
import { PieChart, Pie, Cell, Sector } from 'recharts';

import equity_data from '../stock_historical_data/SQ/equity.json';

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={5} textAnchor="middle" fontSize={12} fill={fill}>
        {payload.holder}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fontSize={10} fill="#333">{`Equity: ${value}%`}</text>
    </g>
  );
};

const colors = ["#FF0000","#FF2200","#FF4400","#FF6600"];

class Equity extends Component {

  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

    render() {
        return(
            <div style={{float: 'left' }}>
                <PieChart width={600} height={400}>
                  <Pie
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape}
                    data={equity_data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="equity_percentage"
                    onMouseEnter={this.onPieEnter}
                  >
                    {
                      equity_data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fillOpacity={0.8} fill={colors[index]}/>
                      ))
                    }
                  </Pie>
                </PieChart>
            </div>
        );
    }
}

export default Equity;