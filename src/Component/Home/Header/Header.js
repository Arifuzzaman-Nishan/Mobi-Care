import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import HeaderMain from '../HeaderMain/HeaderMain';
import Repair from '../Repair/Repair';

const Header = () => {
    return (
        <div>
            <NavBar></NavBar>
            <HeaderMain></HeaderMain>
            <Repair></Repair>
        </div>
    );
};

export default Header;