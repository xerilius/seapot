import React from 'react';
import img1 from '../../assets/1.jpg';
import img10 from '../../assets/10.jpg';
import './Gallery.css';


export default function Gallery() {
    return (
        <div className="container">
            <div className="gallery">
                <img alt="seapot" className="img1" src={img1} />
                <div className="gallery-text">
                    <div className="ayce">All You Can Eat </div>
                    <div className="tapas">Tapas Style</div>
                    <div className="conveyer">Conveyer Belt</div>
                    <div className="hotpot">Hotpot</div>
                </div>
                <img alt="tapas" className="img10" src={img10} />
            </div>
        </div>    
    );
}