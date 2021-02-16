import React from 'react';
import  './css/ExtraMenuItem.css';


export default function ExtraMenuItem( props ) {
    const { item, price } = props;
    
    return (
        <div className="extra-menu-item">
            <span className="name" style={{paddingRight: '25px'}}>
                {item}
            </span> 
            <span className="price" style={{paddingRight: '25px'}}>
                {price}
            </span>
        </div>
    );
}