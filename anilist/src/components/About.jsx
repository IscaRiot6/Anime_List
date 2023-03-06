import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import FavoritesNavBar from './FavoritesNavBar';
import '../CSS/About.css';
import logoImg from '../assets/logo.jpg'
import image1 from '../assets/img1.jpg'
import image2 from '../assets/img2.jpg'
import image3 from '../assets/img3.jpg'
import image4 from '../assets/img4.jpg'
import image5 from '../assets/img5.jpg'
import image6 from '../assets/ryuk.jpg'
import image7 from '../assets/ryuk-2.jpg'
import image8 from '../assets/The-Rumbling.avif'
import image9 from '../assets/gon.jpg'


function About() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

    const changeImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
      };

  return (
    <section>  
        <div className='container'> 
            <nav>
                <FavoritesNavBar>
            
                 </FavoritesNavBar>
            </nav>
        </div> 
        <div className='about-wrapper container'>
        <div className='about-container' >
            <table className='about-table'>
                <tbody>
                    <tr>
                        <td className="about-section">
                                <h2>Welcome to your <span><img className='logoImage' src={logoImg} alt='logo'></img></span> app!</h2>
                                <p>
                                This app allows you to browse a list of hardcoded animes, organized by genre. You can add animes to your favorites list and easily access them later. Here's how it works:
                                </p>
                                    <ol>
                                        <li>Visit the <NavLink activeClassName='active-link' className='link' to="/home">Home</NavLink> page to see the full list of animes.</li>
                                        <li>Navigate to the <NavLink activeClassName='active-link' className='link' to="/genres">Genres</NavLink> page to browse by genre.</li>
                                        <li>Click the "Add to Favorites" button on an anime to add it to your favorites list.</li>
                                        <li>Visit the <NavLink activeClassName='active-link' className='link' to="/favorites">Favorites</NavLink> page to see your saved animes.</li>
                                    </ol>
                                <p>
                                That's it! Get started by exploring the app and adding some animes to your favorites list.
                                </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="image-wrapper">
            <img
                className="about-image"
                src={images[currentImageIndex]}
                alt="About us"
                onClick={changeImage}
            />
        </div>
        </div>
    </section>
  );
}

export default About;
