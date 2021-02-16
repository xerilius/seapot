import React from 'react';
import MainMenuItem from './MainMenuItem';


export default function SoupBaseMenu({ data }) {
    const soupBases = data.map(i => 
        <MainMenuItem 
            key={i.name}
            number={i.no} 
            item={i.name} 
            description={i.description} 
        />
    );
    
    return (
        <div>
            <div className="menu-header">Soup Base</div>
            <div>{soupBases}</div>
        </div>
    );
}