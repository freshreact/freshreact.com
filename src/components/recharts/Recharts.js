import React, { Component } from 'react';
import "./Recharts.css";

import Historical from './rechart-components/Historical';
import Volume from './rechart-components/Volume';
import Equity from './rechart-components/Equity';

import SQ from './stock_historical_data/SQ/sq_year.json';

class Recharts extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
            <div className="recharts-container">
                <div class="row-sq">
                    <div class="column-sq">
                        <Historical data={SQ}/>
                        <Volume data={SQ}/>
                    </div>
                    <div class="column-sq">
                        <Equity/>
                        <Equity />
                    </div>
                </div>
            </div>
        );
    }
}
export default Recharts;