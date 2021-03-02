import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/matches">Kampe</Nav.Link>
                    <Nav.Link href="/standings">Stilling</Nav.Link>
                </Nav>
                <Nav>
                    {/* <Nav.Link href="profile">Profile</Nav.Link>
                    <Nav.Link href="login">Login</Nav.Link>
                    <Nav.Link href="signup">Sign Up</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
