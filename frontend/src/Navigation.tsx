import React, {useState} from 'react';
import './Navbar.css';
import Navbar from "react-bootstrap/Navbar";
import {Container, Nav, NavDropdown} from "react-bootstrap";

function Navigation() {
    // const [data, setData] = useState("");
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Navbar.Brand href="/">ImageProcessing</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="morphing">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );

}


export default Navigation;
