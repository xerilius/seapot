import React from 'react';

export default function Hours( props ) {
    const { M, F, S, H } = props;
    return (
        <div>
            <div>Mon - Thurs : {M.join(' & ')}</div>
            <div>Fri : {F.join(' & ')} </div>
            <div>Sat & Sun : {S}</div>
            <div>Holiday : {H}</div>
        </div>
    );
}