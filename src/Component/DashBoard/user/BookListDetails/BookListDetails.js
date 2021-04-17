import React from 'react';
import { Card, Col } from 'react-bootstrap';

const BookListDetails = ({ bookList }) => {
    const { img, serviceName, description } = bookList;
    return (
        <Col md={5} className='mx-auto mb-5'>
            <Card style={{height:'30vh'}} className='p-4'>
                <div className='d-flex justify-content-between'>
                    <img style={{ width: '6rem', borderRadius: "" }} src={img} alt="" />
                    <h6 style={{height:'5vh',backgroundColor:'#FF5733'}} className='btn border text-white'>pending</h6>
                </div>
                <Card.Title>{serviceName}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card>
        </Col>
    );
};

export default BookListDetails;