import React from 'react';
import Hours from './Hours';


export default function LocationHours({ hours }) {
    let time;
    time = hours ? 
        <Hours M={hours.MR} F={hours.F} S={hours.SS} H={hours.Holiday}/> :
        "Coming Soon";

    return (
        <>
            <div className="header-3">Hours</div>
            {time}
        </>
    );
}