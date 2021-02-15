import React from 'react';
import MainMenuItem from './MainMenuItem';


export default function MeatMenu({ data }) {
    const meats = data.map(i => 
        <MainMenuItem
            number={i.no} 
            item={i.name} 
            description={i.description} 
        />
    );

    return (
        <div className="meat-menu">
             <div className="menu-header">Meat</div>
                {meats}
        </div>
    );
}