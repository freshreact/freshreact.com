import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
            <div>
                <div className="landing-container">
                    <p className="landing-banner">Welcome to FreshReact!</p>
                </div>
            </div>
        );
    }
}
export default Landing;

