import React from 'react';
import { Button } from 'react-bootstrap';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <section className='header-container'>
            <div style={{ height: '500px' }} className='text-white d-flex justify-content-center align-items-center'>
                <div className='text text-center'>
                    <h1>Bring your gadget <br /> back to life</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, magni?</p>
                    <Button variant='danger'>See All Service</Button>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;