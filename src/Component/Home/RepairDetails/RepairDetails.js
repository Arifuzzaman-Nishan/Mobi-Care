import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col } from 'react-bootstrap';
import './RepairDetails.css';

const RepairDetails = ({ repair }) => {
    return (
        <Col md={4}>
            <div className='d-flex align-items-center p-4'>
                <FontAwesomeIcon className='icon mr-4' icon={repair.icon} />
                <div className='text-justify'>
                    <h5>{repair.name}</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, cupiditate!</p>
                </div>
            </div>
        </Col>
    );
};

export default RepairDetails;