import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';


import { useForm } from "react-hook-form";
import NavBar from '../../../Shared/NavBar/NavBar';
import SideBar from '../../SideBar/SideBar';

const Review = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const img = sessionStorage.getItem('img');
    const name = sessionStorage.getItem('name');


    const onSubmit = data => {
        data.img = img;

        console.log(data);

        fetch('https://peaceful-mesa-18274.herokuapp.com/review', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(result => {
                if (result) {
                    alert('successfully send')
                    reset();
                }
            })
    }




    return (
        <div>
            <NavBar></NavBar>
            <Row>
                <Col md={2}>
                    <SideBar></SideBar>
                </Col>
                <Col className='mt-5' md={4}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-group">
                            <input placeholder='Your Name' className='form-control' defaultValue={name} {...register("name", { required: true })} />
                            {/* errors will return when field validation fails  */}
                            {errors.name && <span className='text-danger'>This field is required</span>}
                        </div>

                        <div className="form-group">
                            <input placeholder='Company Name/Designation' className='form-control' {...register("position", { required: true })} />
                            {/* errors will return when field validation fails  */}
                            {errors.position && <span className='text-danger'>This field is required</span>}
                        </div>

                        <div className="form-group">
                            <textarea cols='30' rows='5' placeholder='Description' className='form-control' {...register("description", { required: true })} />
                            {/* errors will return when field validation fails  */}
                            {errors.description && <span className='text-danger'>This field is required</span>}
                        </div>

                        <input className='btn btn-danger' type="submit" />
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default Review;