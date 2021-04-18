import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import NavBar from '../../../Shared/NavBar/NavBar';
import SideBar from '../../SideBar/SideBar';
import ManageOrderDetails from '../ManageOrderDetails/ManageOrderDetails';
import ManageServiceDetails from '../ManageServiceDetails/ManageServiceDetails';

const ManageService = () => {

    const [showOrders, setShowOrders] = useState([]);
    const [showService, setShowService] = useState([]);
    const [showReview, setShowReview] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-mesa-18274.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => {
                setShowOrders(data);
            })
    }, [])

    useEffect(() => {
        fetch('https://peaceful-mesa-18274.herokuapp.com/allService')
            .then(res => res.json())
            .then(data => {
                setShowService(data);
            })
    }, [])

    return (
        <div>
            <NavBar></NavBar>
            <Row>
                <Col md={2}>
                    <SideBar></SideBar>
                </Col>
                <Col className='container' md={10}>
                    <h3>Manage Order</h3>
                    <Row>
                        {
                            showOrders.map(order => <ManageOrderDetails key={order._id} order={order}></ManageOrderDetails>)
                        }
                    </Row>
                    <h3>Manage Service</h3>
                    <Row>
                       
                        {
                            showService.map(service => <ManageServiceDetails key={service._id} service={service}></ManageServiceDetails>)
                        }
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default ManageService;