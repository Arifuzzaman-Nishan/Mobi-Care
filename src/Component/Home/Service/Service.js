import React, { useEffect, useState } from 'react';
import displayPb from '../../../image/service/touchpb.png';
import wifiPb from '../../../image/service/wifiProblem.png';
import batteryPb from '../../../image/service/batteryReplacement.jpg';
import { Container, Row } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';

// const serviceData = [
//     {
//         name:'Display Repair',
//         img: 'https://i.ibb.co/nLQbnr2/touchpb.png',
//         price: '$500'
//     },
//     {
//         name: 'Wifi Problems',
//         img: 'https://i.ibb.co/xDMpBfW/wifi-Problem.png',
//         price: '$200'
//     },
//     {
//         name: 'Battery Replacement',
//         img: 'https://i.ibb.co/GMWskrL/battery-Replacement.jpg',
//         price: '$700'
//     },
    
// ]
const Service = () => {

    // useEffect(()=>{
    //     fetch('http://localhost:5000/addService',{
    //         method:'POST',
    //         headers:{'content-type' : 'application/json'},
    //         body: JSON.stringify(serviceData)
    //     })
    //     .then(data => {
    //         if(data){
    //             console.log('successfully added');
    //         }
    //     })

    // },[])

    const [serviceData,setServiceData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/getService')
        .then(res => res.json())
        .then(data => {
            setServiceData(data);
            console.log(data);
        })
    },[])
    
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