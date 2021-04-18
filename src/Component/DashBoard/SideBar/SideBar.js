import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { faHome, faTasks, faUser, faPlusCircle, faClipboardList, faShoppingCart, faThList } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import './SideBar.css';
import { userContext } from '../../../App';

const SideBar = ({ id }) => {
    
    const isAdmin = (sessionStorage.getItem('isAdmin') === 'true');
    const [loggedInUser, setLoggedInUser] = useContext(userContext);


    return (
        <div className='sidebar pt-5 px-4'>
            <ul className='list-unstyled'>

                <div style={{ display: isAdmin ? "block" : "none" }}>
                    <li>
                        <Link className='text-dark' to="/DashBoard">
                            <FontAwesomeIcon icon={faHome} />
                                Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link className='text-dark' to="/DashBoard/orderlist">
                            <FontAwesomeIcon icon={faClipboardList} />
                            Order list
                        </Link>
                    </li>
                    <li>
                        <Link className='text-dark' to="/DashBoard/addservice">
                            <FontAwesomeIcon icon={faPlusCircle} />
                            Add service
                        </Link>
                    </li>
                    <li>
                        <Link className='text-dark' to="/DashBoard/makeadmin">
                            <FontAwesomeIcon icon={faUser} />
                            Make Admin
                        </Link>
                    </li>
                    <li>
                        <Link className='text-dark' to="/DashBoard/manageservice">
                            <FontAwesomeIcon icon={faTasks} />
                            Manage Service
                        </Link>
                    </li>
                </div>

                <div style={{ display: isAdmin ? "none" : "block" }}>
                    <li>
                        <Link className='text-dark' to="/DashBoard">
                            <FontAwesomeIcon icon={faHome} />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link className='text-dark' to={`/DashBoard/book/${id}`}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            Book
                        </Link>
                    </li>
                    <li>
                        <Link className='text-dark' to="/DashBoard/booklist">
                            <FontAwesomeIcon icon={faThList} />
                            Booking list
                        </Link>
                    </li>
                    <li>
                        <Link className='text-dark' to="/DashBoard/review">
                            <FontAwesomeIcon icon={faCommentDots} />
                            Review
                        </Link>
                    </li>
                </div>

            </ul>
        </div>
    );
};

export default SideBar;