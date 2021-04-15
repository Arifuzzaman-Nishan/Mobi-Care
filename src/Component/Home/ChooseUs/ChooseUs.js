import React from 'react';

import { faMoneyBillAlt, faWrench, faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { Container, Row } from 'react-bootstrap';
import ChooseUsDetails from '../ChooseUsDetails/ChooseUsDetails';

const chooseUsData = [
    {
        name: 'No fix No Fee',
        description: 'We are so confident with our service that if we can’t fix the problem, you don’t pay. All repairs come with a 30 day guarantee.',
        icon: faMoneyBillAlt
    },
    {
        name: 'Quick Repair Process',
        description: 'Our company is reliable, and our work is trusted. We provide worry-free service you can always count on.',
        icon: faWrench
    },
    {
        name: 'Privacy Policy',
        description: 'Our company provide the best Privacy for your phone',
        icon: faShieldAlt
    }
]

const ChooseUs = () => {
    return (
        <section className='mb-5 pb-5'>
            <div className='text-center mb-5'>
                <h1>Why Choose Us</h1>
                <p>fastest repair service with best price</p>
            </div>
            <Container>
                <Row>
                    {
                        chooseUsData.map((chooseUs,index) => <ChooseUsDetails key={index} chooseUs={chooseUs}></ChooseUsDetails>)
                    }
                </Row>
            </Container>


        </section>
    );
};

export default ChooseUs;