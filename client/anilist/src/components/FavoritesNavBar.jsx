import React, { useState } from 'react';
import { Nav, Navbar, Dropdown } from 'react-bootstrap';

function FavoritesNavBar() {
  const [open, setOpen] = useState(false);
  const handleDropdownClick = () => setOpen(!open);

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

  return (
    <Navbar className='navbar' bg="light" variant="light" expand="lg">
        <div className='navContainer'>
      <Navbar.Brand href="home">AniList</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link onClick={handleDropdownClick}>Genres</Nav.Link>
          <Nav.Link href="favorites">Favorites</Nav.Link>
          <Nav.Link href="#trending">Trending</Nav.Link>
          <Nav.Link className='logout-link' onClick={handleLogoutConfirmation}>Logout</Nav.Link>
        </Nav>
        <Nav>
          
        </Nav>
      </Navbar.Collapse>

      <Dropdown show={open} onToggle={handleDropdownClick}>
        <Dropdown.Toggle href="#" data-bs-toggle="dropdown" data-bs-target="#genres-dropdown" id="dropdown-genres" className="d-block d-lg-none">
          Genres
        </Dropdown.Toggle>
        <Dropdown.Menu id="genres-dropdown">
          <Dropdown.Item href="#genre1">Action / Adventure</Dropdown.Item>
          
          <Dropdown.Item href="#genre2">Drama / Psychological</Dropdown.Item>
          <Dropdown.Item href="#genre3">Horror / Other</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>
    </Navbar>
  );
}

export default FavoritesNavBar;
