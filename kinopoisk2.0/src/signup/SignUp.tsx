import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SignUp.css'

const SignUp = () => {
    return (
        <div>
            <div className="sign-up-title">
                {/*<Link to='/posts'>Back to home</Link >*/}
                <h1>Sign In</h1>
            </div>
            <Form className="sign-up-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Enter name"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm password"/>
                </Form.Group>
                <Button variant="primary" className="sign-up-button">
                    SignUP
                </Button>
                <Form.Text className="text-muted no-accaunt-text">
                    <span>Already have an account?<a href="#">Sing In</a></span>
                </Form.Text>
            </Form>
        </div>
    )
}

export default SignUp