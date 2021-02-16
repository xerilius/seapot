import React from 'react';
import './css/MainMenuItem.css';


export default function MainMenuItem( props ) {
    const { number, item, description } = props;
    
    return (
        <div className="main-menu-item">
            <h3>
                <span className="number">{number}</span> 
                <span className="name">{item}</span>
            </h3>
            <div className="description">{description}</div>
        </div>
    );
}