import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageOrderDetails = ({ order }) => {
    // console.log(order);
    const { _id, serviceName, email, status } = order;

    // for delete
    const [orderHide, setOrderHide] = useState(true);
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/orderDelete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setOrderHide(false);
                }
            })
    }

    return (
        <Col md={4}>
           {orderHide && <Card className='my-4 mx-auto p-2' style={{ width: '18rem' }}>
                <Card.Body className='text-center'>
                    <h5>Order Name</h5>
                    <h6 className='text-success'>{serviceName}</h6>
                    <div className='pt-2'>
                        Email
                        <p className='text-secondary'>{email}</p>
                    </div>
                    <p>Order Status: {status}</p>
                    <div className='d-flex justify-content-center'>
                        <Button onClick={() => handleDelete(_id)} variant='danger'>
                            Delete
                        <FontAwesomeIcon className="text-white ml-2" icon={faTrashAlt} />
                        </Button>
                    </div>
                </Card.Body>
            </Card>}
        </Col>
    );
};

export default ManageOrderDetails;