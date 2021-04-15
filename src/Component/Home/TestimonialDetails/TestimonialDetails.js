import React from 'react';
import { Col } from 'react-bootstrap';

const TestimonialDetails = ({ testimonial }) => {
    return (
        <Col md={4}>
            <div className='text-center'>
                <img style={{ width: '15rem', borderRadius: '50%', padding: '5px' }} src={testimonial.img} alt="" />
                <h6>{testimonial.name}</h6>
                <p><small>{testimonial.position}</small></p>
            </div>
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, praesentium omnis. Vel vitae atque, iusto cum quidem corrupti itaque. Quasi.</p>
        </Col>
    );
};

export default TestimonialDetails;