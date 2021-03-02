import React from 'react';
import './RoutingComponent.css';
  
function RoutingComponent(props){
        
        return (
            <div className="routing-component" style={{backgroundColor: props.color }}>
                <h1>Hello</h1>
            </div>
        );

}
export default RoutingComponent;