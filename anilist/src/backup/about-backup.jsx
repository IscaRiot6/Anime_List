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
import image10 from '../assets/img6.jpg'
import image11 from '../assets/img7.jpg'
import image12 from '../assets/img8.jpg'
import image13 from '../assets/img10.webp'
import image14 from '../assets/img11.webp'
import image15 from '../assets/img12.webp'
import image16 from '../assets/img13.webp'
import image17 from '../assets/img14.webp'
import image18 from '../assets/img15.webp'
import image19 from '../assets/img16.webp'
import image20 from '../assets/img17.webp'
import image21 from '../assets/img18.webp'
import image22 from '../assets/img19.webp'
import image23 from '../assets/img20.webp'
import image24 from '../assets/img21.webp'
import image25 from '../assets/img22.webp'
import image26 from '../assets/img23.webp'
import image27 from '../assets/img24.webp'
import image28 from '../assets/img25.webp'
import image29 from '../assets/img26.webp'
import image30 from '../assets/img27.webp'
import image31 from '../assets/img28.webp'
import image32 from '../assets/img29.webp'
import image33 from '../assets/img30.webp'
import image34 from '../assets/img31.webp'
import image35 from '../assets/img32.webp'
import image36 from '../assets/img33.webp'
import image37 from '../assets/img34.webp'
import image38 from '../assets/img35.webp'
import image39 from '../assets/img36.webp'
import image40 from '../assets/img37.webp'
import image41 from '../assets/img38.webp'
import image42 from '../assets/img39.webp'




function About() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14,
        image15,
        image16,
        image17,
        image18,
        image19,
        image20,
        image21,
        image22,
        image23,
        image24,
        image25,
        image26,
        image27,
        image28,
        image29,
        image30,
        image31,
        image32,
        image33,
        image34,
        image35,
        image36,
        image37,
        image38,
        image39,
        image40,
        image41,
        image42];
    
    

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
