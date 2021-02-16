import React from 'react';
import OrderStep from './OrderStep';
import NextIcon from './NextIcon';
import meat from '../../assets/meat.svg';
import soup from '../../assets/soup.svg';
import fish from '../../assets/fish.svg';
import './css/OrderSteps.css';


export default function OrderSteps() {
    const steps = ["Choose Your Soup Base", "Choose Your Meat", 
        "Choose Add-Ons"];
        
    return (
        <div className="order-steps">
            <div className="header-1">How to Order</div>
            <div className="instructions">
                <OrderStep number={1} img={soup} description={steps[0]} />
                <NextIcon />
                <OrderStep number={2} img={meat} description={steps[1]} />
                <NextIcon />
                <OrderStep number={2} img={fish} description={steps[2]} />
            </div>
        </div>
    );
}