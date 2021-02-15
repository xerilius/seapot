import React from 'react';
import './Navbar.css';


export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className="nav-home">Home</div>
                <div className="nav-about">About</div>
                <div className="nav-menu">Menu</div>
            </div>

            <div className="logo-container">
                <div className="logo-main">seapot</div>
                <div className="logo-sub">海中锅</div>
                <div className="nav-est"><i class="las la-minus"></i>
                    <span style={{padding:'0 5px'}}>
                        Est. <i class="las la-fish"></i> 2016 
                    </span>
                <i class="las la-minus"></i>
                </div>
            </div>

            <div className="navbar-links">
                <div className="nav-locations">Locations</div>
                <div className="more">
                   More <i class="las la-angle-down"></i> 
                    <div className="more-dropdown">
                        <div className="reservation">Reservations</div>
                        <div>Franchise</div>
                        <div>Careers</div>
                        <div>Blog</div>  
                    </div>
                </div>
            </div>
        </div>       
    )
}