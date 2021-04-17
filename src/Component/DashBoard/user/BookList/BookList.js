import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { userContext } from '../../../../App';
import NavBar from '../../../Shared/NavBar/NavBar';
import BookListDetails from '../BookListDetails/BookListDetails';
import SideBar from '../../SideBar/SideBar';

const BookList = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const [bookLists, setBookLists] = useState([]);
    const email = sessionStorage.getItem('email');

    useEffect(() => {
        fetch(`http://localhost:5000/showOrder?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setBookLists(data);
            })
    }, [email])

    // console.log(bookLists);

    return (
        <div>
            <NavBar></NavBar>
            <Row>
                <Col md={2}>
                    <SideBar></SideBar>
                </Col>
                <Col md={10}>
                    <h2 className='mb-5 ml-3'>Booking List</h2>
                    <Row>
                        {
                            bookLists.map(bookList => <BookListDetails key={bookList._id} bookList={bookList}></BookListDetails>)
                        }
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default BookList;