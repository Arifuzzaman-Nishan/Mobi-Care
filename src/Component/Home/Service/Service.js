import React from 'react';
import displayPb from '../../../image/service/touchpb.png';
import wifiPb from '../../../image/service/wifiProblem.png';
import batteryPb from '../../../image/service/batteryReplacement.jpg';
import { Container, Row } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';

const serviceData = [
    {
        name:'Display Repair',
        img: displayPb
    },
    {
        name: 'Wifi Problems',
        img: wifiPb
    },
    {
        name: 'Battery Replacement',
        img: batteryPb
    },
    
]
const Service = () => {
    
    return (
        <section className='mb-5 pb-5'>
            <h1 className='text-center mb-5'>Our Service</h1>  
            <Container>
                <Row>
                    {
                        serviceData.map((service,index) => <ServiceCard key={index} service={service}></ServiceCard>)
                    }
                </Row>
            </Container>          
        </section>
    );
};

export default Service;