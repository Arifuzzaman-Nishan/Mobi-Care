import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <section className='my-5 py-5 bg'>
            <Container>
                <Row>
                    <Col className='text-white' md={6}>
                        <h3>Multi Brand</h3>
                        <h1>Repair & Services</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut commodi consequatur sunt exercitationem delectus tempore hic, architecto animi perspiciatis aspernatur.</p>
                    </Col>
                    <Col md={6}>
                        <Card className='px-4 pt-5'>
                            <form action="">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name *" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Email Address *" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject *" />
                                </div>
                                <div className="form-group">
                                    <textarea name="" className="form-control" id="" cols="30" rows="5" placeholder="Give some Details *"></textarea>
                                </div>
                                <div className="form-group text-center">
                                    <button type="button" className="btn btn-danger"> Submit </button>
                                </div>
                            </form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;