import React from 'react';
import './Navbar.css';
export default function Navbar() {
    return (
        <div className="navbar">
           
            <div className="navbar-links">
                 <div>Home</div>
                <div className="">Menu</div>
                <div className="">Locations</div>
                <div className="">About</div>
            </div>

            <div className="logo-container">
                <div className="logo-main">seapot</div>
                <div className="logo-sub">海中锅</div>
            </div>

            <div className="navbar-links">
                <div className="">Franchise</div>
                <div className="reservation">Reservation</div>
                <div className="">More</div>
            </div>

            </div>
    )
}