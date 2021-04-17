import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import NavBar from '../../../Shared/NavBar/NavBar';
import SideBar from '../../SideBar/SideBar';
import { useForm } from "react-hook-form";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [spinner, setSpinner] = useState(false);

    // const onSubmit = data => console.log(data);

    const onSubmit = data => {

        console.log(data);

        const newMobileData = {
            name: data.name,
            price: data.price,
            description:data.description,
            img: imageURL
        }

        // // send data to the database 

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMobileData)
        })
            .then(res => {
                if (res) {
                    alert("Data successfully inserted");
                }
            })
    }

    // for image upload
    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);

        setSpinner(true);
        const imageData = new FormData();
        imageData.set('key', '248523d6a356c71b98f6bd81b3f573b7');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then((response) => {
                setSpinner(false);
                console.log(response.data.data.display_url);
                setImageURL(response.data.data.display_url);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <div>
            <NavBar></NavBar>
            <Row>
                <Col md={2}>
                    <SideBar></SideBar>
                </Col>
                <Col md={4}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='form-group mt-3'>
                            <label className="text-dark" htmlFor="name">Service Title</label>
                            <input placeholder='Enter Service Title' className='form-control' {...register("name", { required: true })} />
                            {errors.name && <span className='text-danger'>This field is required</span>}
                        </div>

                        <div className='form-group mt-3'>
                            <label className="text-dark" htmlFor="price">price</label>
                            <input type='number' placeholder='Enter Price' className='form-control' {...register("price", { required: true })} />
                            {errors.serviceTitle && <span className='text-danger'>This field is required</span>}
                        </div>

                        <div className="mt-3">
                            <label className="text-dark" htmlFor="description">Description</label>
                            <textarea cols='20' rows='5' className="form-control" type="text" placeholder="Enter description" {...register("description", { required: true })} />
                            {errors.serviceTitle && <span className='text-danger'>This field is required</span>}
                        </div>
                        {/* for image upload  */}
                        <div className="mt-3">
                            <label className='text-dark' htmlFor="uploadPhoto">Upload Photo</label>
                            <input className="form-control text-white" type="file" name="uploadPhoto" onChange={handleImageUpload} />
                        </div>
                        <div className="mt-5">
                            <input className="btn btn-danger form-control" type="submit" value="submit" />
                        </div>
                        {/* <input type="submit" /> */}
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default AddService;