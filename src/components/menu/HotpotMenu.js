import React from 'react';
import MainMenuItem from './MainMenuItem';
import MENU from '../../data/menu.json';

import './css/HotpotMenu.css';


export default function HotpotMenu() {
    console.log(MENU.soupbases)
    return (
        <div className="hotpot-menu">
            <SoupBaseMenu />
            <MeatMenu />
        </div>
    );
}

function SoupBaseMenu() {
    return (
        <div className="soupbase-menu">
            <div className="menu-header">Soup Base</div>
            <MainMenuItem number={1} item={"spicy house soup"} />
        </div>
    )
}

function MeatMenu() {
    return (
        <div className="meat-menu">
             <div className="menu-header">Meat</div>
        </div>
    )
}