import React from 'react';
import OrderSteps from './OrderSteps';
import HotpotMenu from './HotpotMenu';
import AddOnMenu from './AddOnMenu';
import DrinkMenu from './DrinkMenu';
import MENU from '../../data/menu.json';
import './css/Menu.css';


export default function Menu() {
    return (
        <div className="menu">
            <OrderSteps />
            <div className="menu-container">
                <div className="menu-logo">
                    <h3 className="menu-super"> 海中锅 </h3>
                    <h1 className="menu-title">Seapot</h1>
                    <h3 className="menu-subtitle">Menu</h3>
                </div>
                <HotpotMenu data={MENU} />
                <AddOnMenu data={MENU.addons} />
                <DrinkMenu data={MENU.drinks} />
            </div>
        </div>
    )
}