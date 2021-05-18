import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navbar, Nav, Alert } from "react-bootstrap";
import Logo from "../images/logo.png";
import { useHistory } from "react-router-dom";
import '../css/Header.css'

export default function Header() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          src={Logo}
          width="40"
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
        {currentUser ? (
          <Nav>
            <Nav.Link href="/admin">Admin</Nav.Link>
            {/* <Nav.Link href="/profile">Profile</Nav.Link> */}
            <Nav.Link onClick={handleLogout}>Log ud</Nav.Link>
            {error && <Alert variant="danger">{error}</Alert>}
          </Nav>
        ) : (
          <Nav>
            <Nav.Link href="login">Login</Nav.Link>
          </Nav>
        )}

      </Navbar.Collapse>
    </Navbar>
  );
}
