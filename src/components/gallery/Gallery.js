import React, { useEffect } from 'react';
import img1 from '../../assets/1.jpg';
import img10 from '../../assets/10.jpg';
import './Gallery.css';


export default function Gallery() {
    // function buildImageGallery() {
    //     const gallery = []
    //     const images = [img1, img7, img10];
    //     for (let i = 0; i < images.length; i++) {
    //         gallery.push(
    //             <div className={`item img${i+1}`}>
    //                 <img className={`img${i+1}`} src={images[i]} />
    //                 <div className="item__overlay">
    //                     <button>View</button>
    //                 </div>
    //             </div>
    //         );
    //     }
    //     return gallery
    // }
    // const gallery = buildImageGallery();

    return (
        <div className="container">
            <div className="gallery">
                <img className="img1" src={img1} />
                <div className="gallery-text">
                    <div className="ayce">All You Can Eat </div>
                    <div className="tapas">Tapas Style</div>
                    <div className="conveyer">Conveyer Belt</div>
                    <div className="hotpot">Hotpot</div>
                </div>

                 <img className="img10" src={img10} />

            </div>
        </div>
        
            
    )
}