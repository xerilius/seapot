import React from 'react';
import OrderSteps from './OrderSteps';
import './css/Menu.css';


export default function Menu() {
    return (
        <div className="menu">
            <OrderSteps />
            {/* <HotpotMenu />
            <AddOnMenu />
            <DrinkMenu /> */}
        </div>
    )
}