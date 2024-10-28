import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 
import myimg from "./images/immunity.png"
import myimg1 from "./images/Extract.png"
import myimg2 from "./images/Booster.png"
import myimg3 from "./images/lemon.png"
import myimg4 from "./images/kashaya.png"
import myimg5 from "./images/cocoreca.png"
import log from "./images/logo.png";

const Productcatalog = () => {
    const navigate = useNavigate(); 
    const images = [myimg, myimg1,myimg2,myimg3,myimg4,myimg5];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 3000); 
        return () => clearInterval(interval);
    }, [images.length]);

    const handleClick = () => {
        navigate('/User'); 
    };
    
    return (
        <div className="product-catalog1">
            <header className="header1">
                <img src={log} alt="Logo" style={{ width: '80px', height: 'auto' }} />
                <div className="logo">ROW MATERIALS MANGEMENT</div>
            </header>

            <section className="hero1">
                <p>Satvam! Herbal delight to your inner and outer body! Buy NOW and SAVE 20%.</p>
            </section>

            <section className="hero1">
                <div className="slideshow-container">
                    {images.map((image, index) => (
                        <div
                            className="mySlides fade"
                            key={index}
                            style={{ display: index === currentSlide ? 'block' : 'none' }}
                        >
                            <img src={image} alt={`Slide ${index + 1}`} onClick={handleClick}/>
                        </div>
                    ))}
                </div>
                <br />
                <div style={{ textAlign: "center" }}>
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        ></span>
                    ))}
                </div>
            </section>

            
              <footer className="footer1">
                <p>Hardik Herbals<br />
                    Address: Mudrale, Kedila Post & Village, Bantwal Taluk, D.K.<br />
                    Karnataka 574220
                </p>
                <div className="footer-logo1">
                    <img src={log} alt="Logo" />
                    <p>Herbal Products for Beauty and Immunity</p>
                </div>
            </footer>
        </div>
    );
}

export default Productcatalog;
