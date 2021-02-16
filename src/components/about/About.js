import React from 'react';
import DATA from '../../data/about.json';
import interior from '../../assets/interior2.jpg';
import './About.css';


export default function About() {
const chinese = DATA.about.chinese.map(
    (paragraph, i) => <div key={i}>{paragraph}</div>
);
    return (
        <div id="about" className="about">
            <div className="header-1">About Us</div>
            <div className="about-container">       
                <div className="about-content">
                    <div>   
                        <img alt="interior" className="img" src={interior} />
                        <div className="english">{DATA.about.english}</div>
                    </div>
                    <div className="chinese">{chinese}</div>
                </div>
            </div>   
        </div>
    );
}