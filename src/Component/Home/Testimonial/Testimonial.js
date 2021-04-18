import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import preson1 from '../../../image/person1.jpg';
import preson2 from '../../../image/person2.jpg';
import preson3 from '../../../image/person3.jpg';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';

// const testimonialData = [
//     {
//         name: 'Alex Jason',
//         position: 'CEO, InfoTech',
//         img: preson1
//     },
//     {
//         name: 'Michale jhon',
//         position: 'Manager',
//         img: preson2
//     },
//     {
//         name: 'Amelia Devis',
//         position: 'CFO, InfoTech',
//         img: preson3
//     },
// ]

const Testimonial = () => {

    const [testimonialData,setTestimonialData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/showReview')
        .then(res => res.json())
        .then(data => setTestimonialData(data));
    },[])

    return (
        <Container className='mb-5'>
            <h1 className='text-center'>Testimonial</h1>
            <div className='mb-5'>
                <h5>What Client Say?</h5>
                <p>Here are testimonials from clients that we have worked with and are happy to share their opinion about the process and the results.</p>
            </div>
            <Row>
                {
                    testimonialData.map((testimonial, index) => <TestimonialDetails key={index} testimonial={testimonial} />)
                }
            </Row>
        </Container>
    );
};

export default Testimonial;