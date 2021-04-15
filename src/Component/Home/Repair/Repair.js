import React from 'react';
import mobile from '../../../image/smartphone.png';
import { faMobile,faLaptop,faCamera } from '@fortawesome/free-solid-svg-icons'
import { Container, Row } from 'react-bootstrap';
import RepairDetails from '../RepairDetails/RepairDetails';

const repairData = [
    {
        name: 'MOBILE PHONE',
        description: "",
        icon: faMobile
    },
    {
        name: 'LAPTOP',
        description: "",
        icon: faLaptop
    },
    {
        name: 'CAMERA',
        description: "",
        icon: faCamera
    }

]

const Repair = () => {
    return (
        <section>
            <div className='text-center mt-5'>
                <h1>WE REPAIR</h1>
            </div>
            <Container>
            <Row>
                {
                    repairData.map((repair,index) => <RepairDetails key={index} repair={repair}></RepairDetails>)
                }
            </Row>
            </Container>
        </section>
    );
};

export default Repair;