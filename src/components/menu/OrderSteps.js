import React from 'react';
import './css/OrderSteps.css';
import meat from '../../assets/meat.svg';
import soup from '../../assets/soup.svg';
import fish from '../../assets/fish.svg';


export default function OrderSteps() {
    return (
        <div className="order-steps">
            <div className="steps-header">How to Order</div>
            <div className="instructions">
                <div className="step">
                    <div>Step 1</div>
                    <img className="svg" src={soup} />
                    <div>Choose Your Soup Base</div>
                </div>
                <div className="next">
                    <i class="las la-angle-right"></i>
                </div>
                <div className="step">
                    <div>Step 2</div>
                    <img className="svg" src={meat} />
                    <div>Choose Your Meat</div>
                </div>
                <div className="next">
                    <i class="las la-angle-right"></i>
                </div>
                <div className="step">
                <div>Step 3</div>
                    <img className="svg" src={fish} />
                    <div>Choose Add-Ons</div>
                </div>
                {/* <div className="next">
                    <i class="las la-angle-right"></i>
                </div>
                <div className="step">
                    <div>Step 4</div>
                    <img className="svg" />
                    <div>Create your own special sauce</div>
                </div>
                <div className="next">
                    <i class="las la-angle-right"></i>
                </div>
                <div className="step">
                    <div>Step 5</div>
                    <img className="svg" />
                    <div>Enjoy our conveyer belt tapas style dishes</div> */}
                {/* </div> */}
            </div>
        </div>
    );
}