import React, { useEffect } from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/7.jpg';
import img3 from '../assets/5.jpg';
import img4 from '../assets/2.jpg';
import img5 from '../assets/8.jpg';
import img6 from '../assets/3.jpg'
import img7 from '../assets/interior1.jpg';
import img8 from '../assets/4.jpg';
import './css/Gallery.css';


export default function Gallery() {
    function buildImageGallery() {
        const gallery = []
        const images = [img1, img2, img3, img4, img5, 
            img6, img7, img8];
        for (let i = 0; i < images.length; i++) {
            gallery.push(
                <div className={`item img${i+1}`}>
                    <img className={`img${i+1}`} src={images[i]} />
                    <div className="item__overlay">
                        <button>View</button>
                    </div>
                </div>
            );
        }
        return gallery
    }

    function randomNumber(limit) {
        let number = Math.floor(Math.random() * limit) + 1;
        return number
    }

    const gallery = buildImageGallery();
    
    return (
        <div className="container">
           
            <div className="gallery">
                <img className="img1" src={img1} />
                <div className="blank"></div>
                <div className="gallery-txt">
                All You Can Eat 
                <div className="tapas">Tapas Style</div>
                <div className="conveyer">Conveyer Belt</div>
                <div className="hotpot">Hotpot</div>
                </div>
                
            </div>
        </div>
        
            
    )
}