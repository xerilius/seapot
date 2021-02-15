import React from 'react';
import MainMenuItem from './MainMenuItem';


export default function HotpotMenu() {
    return (
        <div>
            <SoupBaseMenu />
            <MeatMenu />
        </div>
    );
}

function SoupBaseMenu() {
    return (
        <div>
            SoupBase
            <MainMenuItem number={1} item={"spicy house soup"} />

        </div>
    )
}

function MeatMenu() {
    return (
        <div>
            SoupBase
        </div>
    )
}