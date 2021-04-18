import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NavBar from '../../../Shared/NavBar/NavBar';
import SideBar from '../../SideBar/SideBar';
import { useForm } from "react-hook-form";


const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data =>{
        console.log(data);

        fetch('https://peaceful-mesa-18274.herokuapp.com/addAdmin',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(data)
        })
        .then(result => {
            if(result){
                alert('successfully done');
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
                <Col md={4}>
                    <h1 className=''>Make Admin</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='mt-5 mb-3'>
                            <label className='text-dark' htmlFor="email">Email</label>
                            <input className='form-control' placeholder='nishan@gmail.com' {...register("email", { required: true })} />
                            {errors.email && <span>This field is required</span>}
                        </div>

                        <input className='btn btn-danger' type="submit" />
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default MakeAdmin;