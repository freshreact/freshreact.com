import React, { Component } from 'react';
import "./Templates.css";

class Templates extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
            <div className="template-container">
                <h1>Welcome to Templates</h1>
            </div>
        );
    }
}
export default Templates;