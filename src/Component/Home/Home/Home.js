import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';
import NavBar from '../../Shared/NavBar/NavBar';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <Service></Service>
            <ChooseUs></ChooseUs>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;