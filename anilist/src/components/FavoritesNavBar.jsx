import React, { useState } from 'react';
import { Nav, Navbar, Dropdown } from 'react-bootstrap';
import logoImg from '../assets/logo.jpg'
import { Link } from 'react-router-dom';

function FavoritesNavBar() {
  const [open, setOpen] = useState(false);
  const handleDropdownClick = () => setOpen(!open);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  const handleLogoutConfirmation = () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      handleLogout();
    }
  };

  return (
    <Navbar className='navbar' bg="light" variant="light" expand="lg">
        <div className='navContainer'>
      <Navbar.Brand href="home">
        <img className='logoImage' src={logoImg} alt='logo'></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link as={Link} to="/genres">Genres</Nav.Link>
          {/* <Nav.Link onClick={handleDropdownClick}>Genres</Nav.Link> */}
          <Nav.Link href="favorites">Favorites</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          {/* <Nav.Link as={Link} to="/profile">Profile</Nav.Link> */}
          <Nav.Link className='logout-link' onClick={handleLogoutConfirmation}>Logout</Nav.Link>
        </Nav>
        <Nav>
          
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default FavoritesNavBar;
