import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import "./Cards.css";

class Cards extends Component{

    state = {
        // Default background color
        one: {
            background: '#fff'
        },
        two: {
            background: '#fff'
        },
        three: {
            background: '#fff'
        },
        // Default card
        selectedOption: 'one'
    };

    // Handle change of color
    handleChange = (color) => {
        this.setState({ background: color.hex });
        if ( this.state.selectedOption === 'one'){
            var one = {...this.state.one}
            one.background = color.hex;
            this.setState({one});
        }
        if ( this.state.selectedOption === 'two'){
            var two = {...this.state.two}
            two.background = color.hex;
            this.setState({two});
        }
        if ( this.state.selectedOption === 'three'){
            var three = {...this.state.three}
            three.background = color.hex;
            this.setState({three});
        }
    }
    
    // Handle color change final state
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
        if ( this.state.selectedOption === 'one'){
            var one = {...this.state.one}
            one.background = color.hex;
            this.setState({one});
        }
        if ( this.state.selectedOption === 'two'){
            var two = {...this.state.two}
            two.background = color.hex;
            this.setState({two});
        }
        if ( this.state.selectedOption === 'three'){
            var three = {...this.state.three}
            three.background = color.hex;
            this.setState({three});
        }
    };

    // Change selected card
    onChangeValue = (e) => {
        this.setState({ selectedOption: e.target.value });
    }
    
    render(){
        return(
            <div className="cards-container">
                <div className="row">
                    <div className="column">
                        <div className="column-card">
                            <div className="main-card" style={{backgroundColor: this.state.one.background }}>
                                <p>Cards are cool!<br></br>by Fresh React</p>
                            </div>
                        </div>
                        <div className="column-card">
                            <div className="main-card" style={{backgroundColor: this.state.two.background }}>
                                <p>Cards are cool!<br></br>by Fresh React</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="column-card">
                            <div className="main-card" style={{backgroundColor: this.state.three.background }}>
                                <p>Cards are cool!<br></br>by Fresh React</p>
                            </div>
                        </div>
                        <div className="column-card">
                            <div className="main-card">
                                <form onChange={this.onChangeValue}>
                                    <input 
                                        className="card-radio-button" 
                                        type="radio" 
                                        value="one" 
                                        name="color"
                                        defaultChecked
                                    /> Card 1
                                    <input 
                                        className="card-radio-button" 
                                        type="radio" 
                                        value="two" 
                                        name="color"
                                    /> Card 2  
                                    <input 
                                        className="card-radio-button" 
                                        type="radio" 
                                        value="three" 
                                        name="color"
                                    /> Card 3 
                                </form>
                                <br></br>
                                <center>
                                    <ChromePicker 
                                        color={ this.state.background } 
                                        select={ this.state.selectedOption } 
                                        onChange={ this.handleChange } 
                                        onChangeComplete={ this.handleChangeComplete } 
                                    />
                                </center>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Cards;