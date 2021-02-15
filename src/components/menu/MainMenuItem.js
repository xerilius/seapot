import React from 'react';


export default function MainMenuItem(props) {
    const { number, item, description } = props;
    return (
        <div>
            <div>{number} {item}</div>
            <div>{description}</div>
        </div>
    );
}