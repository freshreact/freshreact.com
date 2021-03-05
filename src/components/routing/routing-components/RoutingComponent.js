import React from 'react';
import './RoutingComponent.css';
  
function RoutingComponent(props){
        
        return (
            <div className="routing-component" style={{backgroundColor: props.color }}>
                <div className="routing-individual-component">
                    <p className="route-header">Welcome to {props.route} component!</p>
                    <p className="route-color">The background color is:<br></br>{props.color}</p>
                </div>
            </div>
        );

}
export default RoutingComponent;