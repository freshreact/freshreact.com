import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

var iWidth = window.innerWidth;

let barWidth = 700;
let barHeight = 300;

if ( iWidth < 600){
    barWidth = 300;
    barHeight = 200;
}

const Historical = (props) => {

        console.log(window.innerWidth);

        return(
            <div>
                <AreaChart
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
                        <defs>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis hide={true} dataKey="Date" />
                        <YAxis hide={true} />
                        <Tooltip />
                        <Area type="monotone" dataKey="Open" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
            </div>
        );
}

export default Historical;