import React from 'react';
import './Navbar.css';


export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-links">
            <div className="nav-home"><a href="/">Home</a></div>
                <div className="nav-about"><a href="#about">About</a></div>
                <div className="nav-menu"><a href="#menu">Menu</a></div>
            </div>

            <div className="logo-container">
                <div className="logo-main">seapot</div>
                <div className="logo-sub">海中锅</div>
                <div className="nav-est"><i className="las la-minus"></i>
                    <span style={{padding:'0 5px'}}>
                        Est. <i className="las la-fish"></i> 2016 
                    </span>
                <i className="las la-minus"></i>
                </div>
            </div>

            <div className="navbar-links">
                <div className="nav-locations"><a href="#location">Locations</a></div>
                <div className="more">
                   More <i className="las la-angle-down"></i> 
                    <div className="more-dropdown">
                        <div className="reservation">Reservations</div>
                        <div>Franchise</div>
                        <div>Careers</div>
                        <div>Blog</div>  
                    </div>
                </div>
            </div>
        </div>       
    );
}