import React from "react";
import "./navbar.css";
import Logo from "../../Assets/logo.svg";
import { NavDropdown, Navbar, Form, Nav, FormControl, Button } from "react-bootstrap";

function NavBar(props) {


  return (
    <Navbar expand="lg" id="nav" >
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          width="45"
          height="45"
          id="logo"
          className="d-inline-block align-top"
          alt="InternCity logo" />


      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl id="search" type="text" placeholder="Search" className="mr-sm-2" />
          <Button id="searchbtn"><i className="fas fa-search"></i></Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}


export default NavBar