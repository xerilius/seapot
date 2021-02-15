import React from 'react';
import OrderSteps from './OrderSteps';
import HotpotMenu from './HotpotMenu';
import './css/Menu.css';


export default function Menu() {
    return (
        <div className="menu">
            <OrderSteps />
            <HotpotMenu />
        </div>
    )
}