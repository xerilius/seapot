import React from 'react';
import ExtraMenuItem from './ExtraMenuItem';
import './css/AddOns.css';


export default function AddOnMenu({ data }) {
    const addons = data.map(i => 
        <ExtraMenuItem
            key={i.name} 
            item={i.name} 
            price={i.price} 
        />
    );

    return (
        <div className="add-ons">
            <div className="menu-header">Add-Ons</div>
            <div className="addon-text">
                <div>
                    All add-on items are seasonal & will be at an additional cost.
                </div>
                <div>
                    Ask your server for today's market price (MP).
                </div>
            </div>
            <div className="menu-addons">
                {addons}
            </div>
        </div>
    );
}