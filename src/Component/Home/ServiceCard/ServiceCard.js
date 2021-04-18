import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
// import { useSpring, animated } from 'react-spring'
import './ServiceCard.css';

// const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
// const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ServiceCard = ({ service }) => {

    // const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    const history = useHistory();

    return (

        <Col className='mb-5' md={4}>
            <Card onClick={() => history.push(`/DashBoard/book/${service._id}`)} className='' style={{ width: '18rem', cursor: 'pointer' }}>
                {/* <Card.Img style={{ height: '30vh' }} variant="top" src={service.img} /> */}
                <div  class="img-hover-zoom card">
                    <img style={{ height: '30vh'}} className='card-img-top' src={service.img} alt=""/>
                </div>               
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