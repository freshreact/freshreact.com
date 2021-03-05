import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

import equity_data from '../stock_historical_data/SQ/equity.json';

const getEquityHolder = (label) => {
    if (label[0].payload.equity_percentage === 77.724) {
      return "Institutional Investors";
    }
    if (label[0].payload.equity_percentage === 13) {
      return "Jack Dorsey";
    }
    if (label[0].payload.equity_percentage === 8.3) {
      return "Short % of Float";
    }
    if (label[0].payload.equity_percentage === 0.971) {
      return 'Insiders';
    }
    return '';
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="intro">{getEquityHolder(payload)}</p>
          <p className="label">{`${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
};

const colors = ["#FF0000","#FF4400","#FF8800","#FFCC00"];

const Equity = () => {

        return(
            <div style={{float: 'left' }}>
                <PieChart width={1000} height={400}>
                        <Pie
                            dataKey="equity_percentage"
                            data={equity_data}
                            cx={500}
                            cy={200}
                            innerRadius={40}
                            outerRadius={80}
                            fill="#82ca9d"
                        >
                            {
                                equity_data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fillOpacity={0.8} fill={colors[index]}/>
                                ))
                            }
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                </PieChart>
            </div>
        );
}

export default Equity;