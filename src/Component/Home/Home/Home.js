import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import Header from '../Header/Header';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;