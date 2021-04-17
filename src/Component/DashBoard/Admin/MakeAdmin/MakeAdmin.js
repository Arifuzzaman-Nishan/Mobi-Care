import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NavBar from '../../../Shared/NavBar/NavBar';
import SideBar from '../../SideBar/SideBar';

const MakeAdmin = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Row>
                <Col md={2}>
                    <SideBar></SideBar>
                </Col>
                <Col md={10}>

                </Col>
            </Row>
        </div>
    );
};

export default MakeAdmin;