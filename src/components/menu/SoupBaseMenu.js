import React from 'react';
import MainMenuItem from './MainMenuItem';


export default function SoupBaseMenu({ data }) {
    const soupBases = data.map(i => 
        <MainMenuItem 
            number={i.no} 
            item={i.name} 
            description={i.description} 
        />
    );
    
    return (
        <div className="soupbase-menu">
            <div className="menu-header">Soup Base</div>
            {soupBases}
        </div>
    );
}