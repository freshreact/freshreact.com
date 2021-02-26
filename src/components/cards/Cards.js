import React, { Component } from 'react';
import { ChromePicker, HuePicker, TwitterPicker } from 'react-color';
import "./Cards.css";

class Cards extends Component{

    state = {
        background: '#fff',
    };

    handleChange = (color) => {
        this.setState({ background: color.hex });
    }
    
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };
    
    render(){
        return(
            <div className="cards-container">
                <div class="row">
                    <div class="column">
                        <div className="main-card" style={{backgroundColor: this.state.background }}>
                            <p>Cards are cool!</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="color-controller">
                            <ChromePicker color={ this.state.background } onChange={ this.handleChange } onChangeComplete={ this.handleChangeComplete } />
                            <br></br>
                            <HuePicker color={ this.state.background } onChange={ this.handleChange } onChangeComplete={ this.handleChangeComplete } />
                            <br></br>
                            <TwitterPicker color={ this.state.background } onChange={ this.handleChange } onChangeComplete={ this.handleChangeComplete } />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cards;