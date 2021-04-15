import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Link,
    useHistory
} from "react-router-dom";


const NavBar = () => {
    const history = useHistory();
    return (
        <Navbar sticky="top" bg="dark" expand="lg">
            <Navbar.Brand className='text-white'><Link to='/home'>Mobi Care</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className='text-white mr-5'><Link to="/home">Home</Link></Nav.Link>
                    <Nav.Link className='text-white mr-5'><Link to="/about_us">About us</Link></Nav.Link>
                    <Nav.Link className='text-white mr-5'><Link to="/projects">Projects</Link></Nav.Link>
                    <Nav.Link className='text-white mr-5'><Link to="/contact">Contact</Link></Nav.Link>
                    <Nav.Link className='text-white mr-5'><Link to="/admin">Admin</Link></Nav.Link>
                </Nav>
                <Button onClick={() => history.push('/login')} className='mr-5' variant="outline-success">LogIn</Button>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;