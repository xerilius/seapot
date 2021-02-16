import React from 'react';
import './LocationInfo.css';

export default function LocationInfo( props ) {
    const { location, address1, address2, link } = props;
    return (
        <div className="location-info">
            <div className="header-2">{location}</div>
            <div className="address">
                <div>{address1}</div>
                <div>{address2}</div>
            </div>
            <iframe className="map" src={link} />
        </div>
    );
}