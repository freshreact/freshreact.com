import React, { Component } from 'react';
import "./Cards.css";

class Cards extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
            <div className="cards-container">
                <h1>Welcome to Cards</h1>
            </div>
        );
    }
}
export default Cards;