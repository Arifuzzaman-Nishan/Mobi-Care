import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import NavBar from '../../../Shared/NavBar/NavBar';
import SideBar from '../../SideBar/SideBar';
import OrderListDetails from '../OrderListDetails/OrderListDetails';

const OrderList = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    return (
        <div>
            <NavBar></NavBar>
            <Row>
                <Col md={2}>
                    <SideBar></SideBar>
                </Col>
                <Col md={10}>
                    <Table striped hover className="bg-white">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Service</th>
                                <th>Pay With</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        {
                            allOrders.map(allOrder => <OrderListDetails allOrder={allOrder} key={allOrder._id}></OrderListDetails>)
                        }
                    </Table>
                </Col>
            </Row>
        </div>
    );
};

export default OrderList;