import React, { useState, useEffect } from 'react';
import '../CSS/NewNavBar.css'
import { Nav, Navbar, Dropdown } from 'react-bootstrap';
import logoImg from '../assets/logo.jpg'
import { Link } from 'react-router-dom';




 const NewNavBar = () => {
    const [show, setShow] = useState(true);
    const controlNavBar = () => {
        if (window.scrollY>100) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      };
    
      const handleLogoutConfirmation = () => {
        const confirmLogout = window.confirm('Are you sure you want to log out?');
        if (confirmLogout) {
          handleLogout();
        }
      };

    useEffect(() => {
        window.addEventListener('scroll', controlNavBar)
        return () => {
            window.removeEventListener('scroll' , controlNavBar)
        }
    }, [])
    

    return (
    <div className={`nav ${show && 'nav__blue' }`}>
<Navbar >
        <div >
      <Navbar.Brand href="home">
        <img className='logoImage' src={logoImg} alt='logo'></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav >
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link as={Link} to="/genres">Genres</Nav.Link>
          {/* <Nav.Link onClick={handleDropdownClick}>Genres</Nav.Link> */}
          <Nav.Link href="favorites">Favorites</Nav.Link>
          
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          <Nav.Link className='logout-link' onClick={handleLogoutConfirmation}>Logout</Nav.Link>
        </Nav>
        <Nav>
          
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
    </div>
 )}

 export default NewNavBar