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
        console.log(info_data);

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
                    <p className="info-item"><b>52-Week High:</b>52-Week High: {info_data.fiftyTwoWeekHigh} <b>Earnings Quarterly Growth:</b> {info_data.earningsQuarterlyGrowth}</p>
                    <p className="info-item"><b>Profit Margins:</b> {info_data.profitMargins} <b>52 Week High:</b> {info_data.fiftyTwoWeekHigh}</p>
                    <p className="info-item"><b>52-Week Change:</b> {info_data.fiftyTwoWeekChange} <b>52 Week Low:</b> {info_data.fiftyTwoWeekLow}</p>
                    <p className="info-item"><b>Average Volume:</b> {info_data.averageVolume} <b>Forward EPS:</b> {info_data.forwardEps}</p>
                    <p className="info-item"><b>50 Day Average:</b> {info_data.fiftyDayAverage} <b>Market Cap:</b> {info_data.marketCap}</p>
                    <p className="info-item"><b>200 Day Average:</b> {info_data.twoHundredDayAverage} <b>Price to Book:</b> {info_data.priceToBook}</p>
                </div>
            </div>
        );
}

export default Info;