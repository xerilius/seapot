import React from 'react';
import SoupBaseMenu from './SoupBaseMenu';
import MeatMenu from './MeatMenu';
import './css/HotpotMenu.css';


export default function HotpotMenu({ data }) {
    return (
        <>
            <div className="hotpot-menu">
                <SoupBaseMenu data={data.soupbases} />
                <MeatMenu data={data.meats} />
            </div> 
        </> 
    );
}