import React from 'react';


export default function OrderStep( props ) {
    const {  number, img, description } = props;
    
    return (
        <div className="step">
            <div>Step {number}</div>
            <img alt={img} className="svg" src={img} />
            <div>{description}</div>
        </div>
    );
}