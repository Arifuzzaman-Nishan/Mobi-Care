import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
    const noNamed = [
        {name: "Being the best in our field means that we are committed to every project, we have ingenious ideas that become reality and we make every client happy.",link:''}
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const latestNews = [
        {name: "How To Fix Water Damaged Mobile Phone" , link: "/water_damage_repair"},
        {name: "Iphone 7 vs Iphone 7 plus Depth comparison" , link: "/comparison"}
    ]
    const services = [
        {name: "Iphone Repair" , link: "/iphone_repair"},
        {name: "IPad Repair" , link: "/ipad_repair"},
        {name: "SmartPhone Repair" , link: "/SmartPhone_repair"},
        {name: "Tablet Repair" , link: "/tablet_repair"},
        {name: "Screen Replacement" , link: "/screen_replacement"},
        {name: "Water Damage Repair" , link: "/water_damage_repair"},
    ]
    return (
        <footer className="footer-area">
            <div className="container pt-5 pb-2 text-white">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle="MobiCare" menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Latest News" menuItems={latestNews}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-danger">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;