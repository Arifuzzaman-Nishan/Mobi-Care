import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { faShoppingCart, faThList } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import './SideBar.css';
import { Container } from 'react-bootstrap';

const SideBar = ({id}) => {
    return (
        <div style={{height:'100vh'}} className='sidebar d-flex flex-row py-5 px-4'>
            {/* <Container> */}
                <ul className='list-unstyled'>
                    <li >
                        <Link className='text-white' to={`/userdashboard/book/${id}`}>
                            <FontAwesomeIcon icon={faShoppingCart}/>
                            Book
                        </Link>
                    </li>
                    <li>
                        <Link className='text-white' to="/userdashboard/booklist">
                            <FontAwesomeIcon icon={faThList}/>
                            Booking list
                        </Link>
                    </li>
                    <li>
                        <Link className='text-white' to="/userdashboard/review">
                            <FontAwesomeIcon icon={faCommentDots}/>
                            Review
                        </Link>
                    </li>
                </ul>
            {/* </Container> */}
        </div>
    );
};

export default SideBar;