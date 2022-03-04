import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import "./Header.css"


const Header = () => {
    return (
    
<Navbar   expand="sm">
        <Navbar.Brand id = "navBarColor" href="#home">Seeder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <Nav.Link id = "navBarColor" href="#home">Home</Nav.Link>
        <Nav.Link id = "navBarColor" href="#link">Myprofile</Nav.Link>
        <Nav.Link id = "navBarColor" href="/login">Login</Nav.Link>
      <NavDropdown  title="Locations" id="basic-nav-dropdown navBarColor">
        <NavDropdown.Item href="#action/3.1">Austin</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Pflugerville</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Round Rock</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
        </Navbar.Collapse>
</Navbar>
        
    )
}

export default Header
