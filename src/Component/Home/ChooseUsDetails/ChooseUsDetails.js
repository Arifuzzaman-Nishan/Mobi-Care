import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ChooseUsDetails.css';

const ChooseUsDetails = ({ chooseUs }) => {
    return (
        <Col className='text-center' md={4}>
            <div>
                <FontAwesomeIcon className='iconi mb-4' icon={chooseUs.icon} />
                <h5>{chooseUs.name}</h5>
                <p>{chooseUs.description}</p>
            </div>
        </Col>
    );
};

export default ChooseUsDetails;