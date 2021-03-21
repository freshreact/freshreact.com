import React, { Component } from 'react';
import "./Random.css";

class Random extends Component{
    
    render(){
        return(
            <div className="random-container">
                <center>
                <div className="ui-component">
                    <p>This component is simply for my own testing and development randomly (The Undocumented Series).</p>
                    <center>
                        <p className="ui-item">Restaurant Name<br></br>Compliant: Yes/No</p>
                        <hr></hr>
                        <p className="ui-item">Restaurant Name<br></br>Compliant: Yes/No</p>
                        <hr></hr>
                        <p className="ui-item">Restaurant Name<br></br>Compliant: Yes/No</p>
                    </center>
                </div>
                </center>
            </div>
        );
    }
}
export default Random;