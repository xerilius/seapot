import React from 'react';
import ExtraMenuItem from './ExtraMenuItem';
import './css/DrinkMenu.css';


export default function DrinkMenu({ data }) {
   const teas = data.teas.map(i => 
        <ExtraMenuItem key={i.name} item={i.name} price={i.price} />
    );
    const juices = data.juices.map(i => 
        <ExtraMenuItem key={i.name} item={i.name} price={i.price} />
    );
    const fountainDrinks = data.fountain.map( i =>
        <ExtraMenuItem key={i.name} item={i.name} price={i.price} />
    );

    return (
        <div className="drink-menu">
           <div className="menu-header">Drinks</div>
           <div className="drinks-container">
            <div>
                <div className="header-2">Teas</div>
                <div style={{width:'400px'}}>{teas}</div>
            </div>
            <div>
                <div className="header-2">Juices</div>
                <div style={{width:'350px'}}>{juices}</div>
            </div>
            <div>
                <div className="header-2">Fountain Drinks</div>
                <div style={{width:'270px'}}>{fountainDrinks}</div>
            </div>
           </div>
          
        </div>
    );
}