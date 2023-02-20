import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function FavoritesNavBar() {
  return (
    <Navbar className='navbar' bg="light" variant="light" expand="lg">
        
      <Navbar.Brand href="home">AniList</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="#genres">Genres</Nav.Link>
          <Nav.Link href="favorites">Favorites</Nav.Link>
          <Nav.Link href="#trending">Trending</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className='logout-link' href="login">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
  );
}

export default FavoritesNavBar;
