import React from 'react';
import './css/DessertMenu.css';


export default function DessertMenu({ data }) {
    const flavors = data.macaron.map(i => <div key={i}>{i}</div>);
    
    return (
        <div className="dessert-menu">
            <div className="menu-header">Dessert</div>
            <div className="header-2" style={{textAlign: 'center'}}>  
                Macarons <span className="price">{data.price}</span>
            </div>  
            <div className="macarons">
              {flavors}
            </div>
        </div>
    );
}