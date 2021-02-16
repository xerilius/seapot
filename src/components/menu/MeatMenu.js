import React from 'react';
import MainMenuItem from './MainMenuItem';


export default function MeatMenu({ data }) {
    const meats = data.map(i => 
        <MainMenuItem
            key={i.name}
            number={i.no} 
            item={i.name} 
            description={i.description} 
        />
    );

    return (
        <div>
            <div className="menu-header">Meat</div>
            <div>{meats}</div>
        </div>
    );
}