import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import {faTasks, faUser, faPlusCircle, faClipboardList, faShoppingCart, faThList } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import './SideBar.css';

const SideBar = ({id}) => {
    return (
        <div  className='sidebar pt-5 px-4'>
                <ul className='list-unstyled'>
                    <li >
                        <Link className='text-dark'  to={`/DashBoard/book/${id}`}>
                            <FontAwesomeIcon icon={faShoppingCart}/>
                            Book
                        </Link>
                    </li>
                    <li>
                        <Link className='text-dark'  to="/DashBoard/booklist">
                            <FontAwesomeIcon icon={faThList}/>
                            Booking list
                        </Link>
                    </li>
                    <li>
                        <Link className='text-dark'  to="/DashBoard/review">
                            <FontAwesomeIcon icon={faCommentDots}/>
                            Review
                        </Link>
                    </li>
                    <li>
                        <Link className='text-dark'  to="/DashBoard/orderlist">
                            <FontAwesomeIcon icon={faClipboardList}/>
                            Order list
                        </Link>
                    </li>
                    <li>
                        <Link className='text-dark'  to="/DashBoard/addservice">
                            <FontAwesomeIcon icon={faPlusCircle}/>
                            Add service
                        </Link>
                    </li>
                    <li>
                        <Link className='text-dark'  to="/DashBoard/makeadmin">
                            <FontAwesomeIcon icon={faUser}/>
                            Make Admin
                        </Link>
                    </li>
                    <li>
                        <Link className='text-dark'  to="/DashBoard/manageservice">
                            <FontAwesomeIcon icon={faTasks}/>
                            Manage Service
                        </Link>
                    </li>
                </ul>
        </div>
    );
};

export default SideBar;