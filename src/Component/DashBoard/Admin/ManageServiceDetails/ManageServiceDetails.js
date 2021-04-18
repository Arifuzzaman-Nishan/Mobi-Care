import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageServiceDetails = ({service}) => {

    const{_id,name,price} = service;

    const [serviceHide, setServiceHide] = useState(true);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/serviceDelete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setServiceHide(false);
                }
            })
    }

    return (
        <div>
                 <Col md={4}>
           {serviceHide && <Card className='my-4 mx-auto p-2' style={{ width: '18rem' }}>
                <Card.Body className='text-center'>
                    <h5>Service Name</h5>
                    <h6 className='text-success'>{name}</h6>
                    <div className='pt-2'>
                        price
                        <p className='text-secondary'>{price}</p>
                    </div>
                    
                    <div className='d-flex justify-content-center'>
                        <Button onClick={() => handleDelete(_id)} variant='danger'>
                            Delete
                        <FontAwesomeIcon className="text-white ml-2" icon={faTrashAlt} />
                        </Button>
                    </div>
                </Card.Body>
            </Card>}
        </Col>
        </div>
    );
};

export default ManageServiceDetails;