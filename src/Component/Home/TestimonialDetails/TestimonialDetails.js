import React from 'react';
import { Col } from 'react-bootstrap';

const TestimonialDetails = ({ testimonial }) => {
    const {name,img,position,description} = testimonial;
    return (
        <Col md={4}>
            <div className='text-center'>
                <img style={{ width: '15rem', borderRadius: '50%', padding: '5px' }} src={img} alt="" />
                <h6>{name}</h6>
                <p><small>{position}</small></p>
            </div>
            <p className='text-secondary'>{description}</p>
        </Col>
    );
};

export default TestimonialDetails;