import React, { useState } from 'react';
import image1 from '../assets/img21.webp';
import image2 from '../assets/HERO-img.jpg';
import image3 from '../assets/The-Rumbling.avif';
import image4 from '../assets/titans-img.jpg';
import image5 from '../assets/footer1.png';
// import '../CSS/InitialPage.css';

const Banner = () => {
  const [bannerImage, setBannerImage] = useState(image5);

  const getRandomImage = () => {
    const images = [image1, image2, image3, image4, image5];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const handleBannerClick = () => {
    const newImage = getRandomImage();
    setBannerImage(newImage);
  };

  return (
    <div className="banner">
      <img src={bannerImage} alt="Anime Banner" onClick={handleBannerClick} />
    </div>
  );
};

export default Banner;
