import React, { Component } from 'react';
import "./Recharts.css";

import Historical from './rechart-components/Historical';
import Volume from './rechart-components/Volume';
import Equity from './rechart-components/Equity';
import Info from './rechart-components/Info';

import SQ from './stock_historical_data/SQ/sq_year.json';
import SQInfo from './stock_historical_data/SQ/sq_info.json';

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
                        <center>
                            <Info data={SQInfo}/>
                        </center>
                        <center>
                            <Equity />
                        </center>
                    </div>
                </div>
            </div>
        );
    }
}
export default Recharts;