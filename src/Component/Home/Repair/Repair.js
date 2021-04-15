import React from 'react';
import mobile from '../../../image/smartphone.png';

const repairData = [
    {
        name: 'MOBILE PHONES',
        description: "",
        icon: mobile
    }
]

const Repair = () => {
    return (
        <section>
            <div className='text-center mt-5'>
                <h1>We REPAIR</h1>
            </div>
            <div>
                <img src={mobile} alt=""/>
            </div>
        </section>
    );
};

export default Repair;