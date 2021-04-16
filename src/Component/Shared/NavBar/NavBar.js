import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Link,
    useHistory
} from "react-router-dom";
import { userContext } from '../../../App';


const NavBar = () => {
    const history = useHistory();

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { email, photoURL } = loggedInUser;

    const token = sessionStorage.getItem('token');
    const img = sessionStorage.getItem('img');
    

    const handleSignOut = () => {
         setLoggedInUser({});
         sessionStorage.removeItem('token');
         sessionStorage.removeItem('img');
    }


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
                
                {
                        (email || token) ?
                            <div className="p-2">

                                <img className="mr-5"
                                    style={{ width: "3rem", borderRadius: "50%" }}
                                    src={img} alt=""
                                />

                                <Button className="mr-4" onClick={handleSignOut} variant="outline-success">SignOut</Button>
                            </div>
                            :
                            <div className="mr-4">
                                <Button onClick={() => history.push('/login')} variant="outline-success">LogIn</Button>
                            </div>
                    }
                {/* <Button onClick={() => history.push('/login')} className='mr-5' variant="outline-success">LogIn</Button> */}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;