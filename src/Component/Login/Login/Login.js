import { Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import firebaseConfig from './firebase.confiq';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { userContext } from '../../../App';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                setLoggedInUser(user);
                sessionStorage.setItem('img', user.photoURL);
                console.log(user);
                storeAuthToken();
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);

            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then((idToken) => {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch((error) => {
                // Handle error
            });
    }

    return (
        <div>
            <Container>
                <Row style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center'>
                    <Col md={4}>
                        <h3 className='text-center mb-5'>Login With</h3>
                        <button onClick={handleGoogleSignIn} class="corner d-flex align-items-center justify-content-around btn btn-danger w-100" type="reset">
                            <FontAwesomeIcon size='2x' className="google" icon={faGoogle} />
                            <span>continue with google</span>
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;