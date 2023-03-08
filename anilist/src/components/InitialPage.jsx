// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// // import Header from './Header';
// // import Footer from './Footer';
// import '../CSS/InitialPage.css';
// import RandomImageGeneratorInitialPage from './RandomImageGeneratorInitialPage';
// import logoImg from '../assets/logo.jpg'

// const InitialPage = () => {

//     const navigate = useNavigate();

//   const handleSignUpClick = () => {
//     navigate('/signup');
//   };

//   const handleLoginClick = () => {
//     navigate('/login');
//   };

//     return (
//         <section>
//             <div className="left-section">
//                 <div className='container'>
//                     <RandomImageGeneratorInitialPage />
//                 </div>
                
//             </div>
//             <div className="right-section">
//                 <div className="container ">
//                     <div className="banner ">
//                         <img src="banner.jpg" alt="Anime Banner" />
//                     </div>
//                     <div className="intro">
//                         <h2>Welcome to <span><img className='logoImage' src={logoImg} alt='logo'></img></span></h2>
//                         <p>Keep track of all your favorite anime in one place.</p>
//                         <p>Our app lets you navigate through several hardcoded animes in the home page, browse by genre, and save your favorites in the favorites page.</p>
//                         <p>Sign up or log in now to start using our app!</p>
//                     </div>
//                     <div className="InitialPageButtons">
//                         <button className="signup-button" onClick={handleSignUpClick}>Sign Up</button>
//                         <div>
//                             <p>or</p>
//                         </div>
//                         <button className="login-button" onClick={handleLoginClick}>Log In</button>
//                     </div>
//                     <div className="links">
//                         <a href="/about">About Us</a>
//                         <tr></tr>
//                         <a href="/contact">Contact Us</a>
//                     </div>
//                 </div>
//             </div>
//        </section>
//     );
//   };
  
//   export default InitialPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/img15.webp'
import image2 from '../assets/img16.webp'
import image3 from '../assets/img17.webp'
import image4 from '../assets/img18.webp'
import image5 from '../assets/footer1.png'
import Banner from './Banner';

import '../CSS/InitialPage.css';
import logoImg from '../assets/logo.jpg'

const InitialPage = () => {

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <section>
      <div className="left-section">
        <table className="image-table" style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td><img src={image1} alt="Image 1" /></td>
              <td><img src={image2} alt="Image 2" /></td>
            </tr>
            <tr>
              <td><img src={image3} alt="Image 3" /></td>
              <td><img src={image4} alt="Image 4" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="right-section">
        <div className="border">
            <Banner/>
          {/* <div className='banner'>
            <img src={image5} alt="Anime Banner" />
          </div> */}
          <div className="intro">
            <h2>Welcome to <span><img className='logoImage' src={logoImg} alt='logo'></img></span></h2>
            <p>Keep track of all your favorite anime in one place.</p>
            <p>Our app lets you navigate through several hardcoded animes in the home page, browse by genre, and save your favorites in the favorites page.</p>
            <p>Sign up or log in now to start using our app!</p>
          </div>
          <div className="InitialPageButtons">
            <button className="signup-button" onClick={handleSignUpClick}>Sign Up</button>
            <div>
              <p>or</p>
            </div>
            <button className="login-button" onClick={handleLoginClick}>Log In</button>
          </div>
          <div className="links">
            <a href="/about">About Us</a>
            <tr></tr>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
        </div>
    </section>
  )
}

export default InitialPage