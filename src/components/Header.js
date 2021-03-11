import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../images/logo.png";
import '../css/Header.css'

export default function Header() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          src={Logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="Hypers League logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="navLink" href="/matches">Kampe</Nav.Link>
          <Nav.Link className="navLink" href="/standings">Stilling</Nav.Link>
          <Nav.Link className="navLink" href="/rules">Regler</Nav.Link>
          <Nav.Link className="navLink" href="/about">Om os</Nav.Link>
          <Nav.Link className="navLink" href="/sponsors">Sponsorer</Nav.Link>
        </Nav>
        <Nav>
          {/* <Nav.Link href="profile">Profile</Nav.Link>
          <Nav.Link href="login">Login</Nav.Link>
          <Nav.Link href="signup">Sign Up</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
