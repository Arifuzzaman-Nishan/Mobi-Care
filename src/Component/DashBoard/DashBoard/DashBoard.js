import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import NavBar from '../../Shared/NavBar/NavBar';
import SideBar from '../SideBar/SideBar';

const DashBoard = () => {

    const isAdmin = (sessionStorage.getItem('isAdmin') === 'true');
    const name = sessionStorage.getItem('name');

    return (
        <div>
            <NavBar></NavBar>
            <Row>
                <Col md={2}>
                    <SideBar></SideBar>
                </Col>
                <Col md={10}>

                   {
                       isAdmin? 
                       <h1 className='mt-5 text-center text-danger'>Welcome to Admin</h1>
                        :
                       <h1 className='mt-5 text-center text-danger'>Welcome to {name}</h1>
                   }

                </Col>
            </Row>
        </div>
    );
};

export default DashBoard;