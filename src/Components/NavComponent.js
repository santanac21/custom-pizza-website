import React, { Component } from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import brandLogo from "../Images/pizza-brand-logo.png";
import "../Custom.css";

class NavComponent extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar className="bg-dark navbar-dark fixed-top" expand="lg">
                    <Navbar.Brand as={Link} to="/" className="font-weight-bold">
                    <img src={brandLogo} alt="Carlos' Pizza Shack" width="32" height="32" /> Carlos' Pizza Shack</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="font-weight-bold text-center">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/order">Order</Nav.Link>
                            <Nav.Link as={Link} to="/rewards">Join Our Rewards</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default NavComponent
