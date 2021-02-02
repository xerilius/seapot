import React from 'react';
import './css/Navbar.css';
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-links">
                 <div>Home</div>
                <div>Menu</div>
                <div className="">Locations</div>
                <div>About</div>
            </div>

            <div className="logo-container">
                <div className="logo-main">seapot</div>
                <div className="logo-sub">海中锅</div>
                <div className="est"><i class="las la-minus"></i>
                    <span style={{padding:'0 5px'}}>
                        Est. <i class="las la-fish"></i> 2016 
                    </span>
                <i class="las la-minus"></i>
                </div>
            </div>

            <div className="navbar-links">
                <div>Franchise</div>
                <div className="reservation">Reservation</div>
                <div className="more">
                    More <i class="las la-angle-down"></i> 
                    <div className="more-dropdown">
                        <div>Careers</div>
                        <div>Gallery</div>
                        <div>Blog</div>
                    </div>
                </div>
            </div>
        </div>
            
    )
}