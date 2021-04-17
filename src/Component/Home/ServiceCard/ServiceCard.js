import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ServiceCard = ({ service }) => {
    const history = useHistory();
    

    return (
        <Col className='mb-5' md={4}>
            <Card onClick={() => history.push(`/DashBoard/book/${service._id}`)} className='' style={{ width: '18rem',cursor: 'pointer' }}>
                <Card.Img style={{height:'30vh'}} variant="top" src={service.img} />
                <Card.Body className='text-center'>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>
                       {service.description}
                    </Card.Text>
                    <Button variant="danger">Order Service</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServiceCard;