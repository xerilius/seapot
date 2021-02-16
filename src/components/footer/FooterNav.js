import React from 'react';
import './FooterNav.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="media">
                <a href="https://www.facebook.com/pg/seapot/posts/">
                    <i className="lab la-facebook-f la-2x"></i>
                </a>
                <a href="https://www.instagram.com/seapotsanmateo/">
                    <i className="lab la-instagram la-2x"></i>
                </a>
                <a href="https://foursquare.com/v/seapot/58a9f46354386d5bb58f5fa5">
                    <i className="lab la-foursquare la-2x"></i>
                </a>
                <a href="https://www.yelp.com/biz/seapot-%E6%B5%B7%E4%B8%AD%E9%94%85-san-mateo">
                    <i className="lab la-yelp la-2x"></i>
                </a>
                
            </div>
            <div className="reservations">
                <a href="https://www.yelp.com/reservations/seapot-%E6%B5%B7%E4%B8%AD%E9%94%85-san-mateo?source=widget">Reservations</a>
            </div>
           
        </div>
    )
}


