import React from 'react';
import { BarChart, Bar, Cell, Tooltip, XAxis, YAxis } from 'recharts';

var iWidth = window.innerWidth;

let barWidth = 700;
let barHeight = 300;

if ( iWidth < 600){
    barWidth = 300;
    barHeight = 200;
}

const Volume = (props) => {

        return(
            <div>
                <BarChart
                        width={barWidth}
                        height={barHeight}
                        data={props.data}
                        margin={{
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <XAxis hide={true} dataKey="Date" />
                        <YAxis hide={true}/>
                        <Tooltip />
                        <Bar dataKey="Volume">
                        {
                            props.data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={(entry.Close - entry.Open) > 0 ? 'green' : 'red'}/>
                            ))
                        }
                        </Bar>
                    </BarChart>
            </div>
        );
}

export default Volume;