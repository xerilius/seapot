import React from 'react';
import LocationInfo from './LocationInfo';
import LocationHours from './LocationHours';
import SEAPOT from '../../data/locations.json';
import './Locations.css';

export default function Locations() {
   const location1 = SEAPOT.locations.sanmateo;
   const location2 = SEAPOT.locations.sunnyvale;

    return (
        <div id="location" className="location">
            <div className="header-1">Locations</div>
            <div className="location-container">
                <div>
                    <LocationInfo 
                        location={location1.name} 
                        address1={location1.address1}
                        address2={location1.address2}
                        link={location1.link}
                    />
                    <LocationHours hours={location1.hours} />
                </div>
                <div>
                    <LocationInfo 
                        location={location2.name} 
                        address1={location2.address1}
                        address2={location2.address2}
                        link={location2.link}
                    />
                    <LocationHours hours={location2.hours} />
                </div>
            </div>
        </div>
    );
}