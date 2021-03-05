import React from 'react';
import './component_css.css';

const InfoHeader = (props) => {
    return (
        <div className="info-header-container">
            <div className="symbol-box">
                <p className="symbol-item">{props.symbol}</p>
            </div>
            <div className="name-box"><center>{props.name}</center></div>
            <div className="tech-box">
                <p className="tech-item">Sector: {props.sector}</p>
                <p className="tech-item">Industry: {props.industry}</p>
                <p className="tech-item">Type: {props.quoteType}</p>
            </div>
        </div>
    );
}

const Info = (props) => {

        const info_data = props.data[0];

        return(
            <div className="information-container">
                <InfoHeader 
                    symbol={info_data.symbol} 
                    name={info_data.shortName} 
                    sector={info_data.sector}
                    industry={info_data.industry}
                    quoteType={info_data.quoteType}
                />
                <hr></hr>
                <div className="info-box">
                    <p className="info-item">52-Week High: {info_data.fiftyTwoWeekHigh}</p>
                    <p className="info-item">Profit Margins: {info_data.profitMargins}</p>
                    <p className="info-item">52-Week Change: {info_data.fiftyTwoWeekChange}</p>
                    <p className="info-item">Average Volume: {info_data.averageVolume}</p>
                    <p className="info-item">50 Day Average: {info_data.fiftyDayAverage}</p>
                    <p className="info-item">200 Day Average: {info_data.twoHundredDayAverage}</p>
                </div>
            </div>
        );
}

export default Info;