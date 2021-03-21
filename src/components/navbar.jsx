import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import './navbar.css';

function NavbarComponent() {
    return (
      <>
<Navbar collapseOnSelect expand="lg"  className="navbar">
      <Navbar.Brand className="logo" href="/">Crwn<span>Clothing</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto mr-sm-3">
          <NavDropdown title="Categories" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/">Action</NavDropdown.Item>
            <NavDropdown.Item href="/">Another action</NavDropdown.Item>
            <NavDropdown.Item href="/">more items</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">more items</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/movies">View movies</Nav.Link>
          <Nav.Link href="/" className="mr-sm-3">
           View Items
          </Nav.Link>
         
            <Button variant="outline-primary"
              >
                Sign out
            </Button>
            
            <Button href="/signin" variant="outline-danger" className="mr-sm-2">
              Sign in
            </Button>
          

        </Nav>
      </Navbar.Collapse>
    </Navbar>
      </>
    )
}

export default NavbarComponent;