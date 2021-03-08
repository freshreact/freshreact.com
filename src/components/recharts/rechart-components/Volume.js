import React from 'react';
import { BarChart, Bar, Cell, Tooltip, XAxis, YAxis } from 'recharts';

const Volume = (props) => {

        return(
            <div>
                <BarChart
                        width={700}
                        height={300}
                        data={props.data}
                        margin={{
                            top: 0,
                            right: 0,
                            left: 20,
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