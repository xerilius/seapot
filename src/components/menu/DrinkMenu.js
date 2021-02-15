import React from 'react';
import ExtraMenuItem from './ExtraMenuItem';
import './css/DrinkMenu.css';


export default function DrinkMenu({ data }) {
   const teas = data.teas.map(i => 
        <ExtraMenuItem item={i.name} price={i.price} />
    );
    const juices = data.juices.map(i => 
        <ExtraMenuItem item={i.name} price={i.price} />
    );
    const fountainDrinks = data.fountain.map( i =>
        <ExtraMenuItem item={i.name} price={i.price} />
    );

    return (
        <div className="drink-menu">
           <div className="menu-header">Drinks</div>
           <div className="drinks-container">
            <div>
                <div className="header-2">Teas</div>
                {teas}
            </div>
            <div>
                <div className="header-2">Juices</div>
                {juices}
            </div>
            <div>
                <div className="header-2">Fountain Drinks</div>
                {fountainDrinks}
            </div>
           </div>
          
        </div>
    );
}