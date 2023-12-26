import React, { useReducer, useState } from 'react'
import { Button, Container, Col, Form, Row } from 'react-bootstrap'
import "../styles/homepage.css"
import axios from 'axios';
import LoadingBox from '../components/LoadingBox';
const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_REQUEST":
        return { ...state, loading: true }
      case "UPDATE_SUCCESS":
        return { ...state, loading: false }
      case "UPDATE_ERROR":
        return { ...state, loading: false }
    
    }
  }
function HomePage() {
    
    const { user, user: { userId }, token, refreshToken } = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [middleName, setMiddleName] = useState(user.middleName);
    const [email, setEmail] = useState(user.email);
    const [companyName, setCompanyName] = useState(user.companyName);
    const [position, setPosition] = useState(user.position);
    const [companyAddress, setCompanyAddress] = useState(user.companyAddress);
    const [phoneNo1, setphoneNo1] = useState(user.phoneNo1);
    const [phoneNo2, setphoneNo2] = useState(user.phoneNo2);

    const [{ loading }, dispatch] = useReducer(reducer, {
        loading: false
    });

    const onUpdate = (e) => {
        e.preventDefault();
        try {
            dispatch({ type: "UPDATE_REQUEST" });
            console.log(loading)
            const { data } = axios.put("api/v1/user/update", {
                userId,
                firstName,
                lastName,
                middleName,
                email,
                companyName,
                companyAddress,
                phoneNo1,
                phoneNo2,
                position
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch({ type: "UPDATE_SUCCESS" });
        } catch (err) {
            dispatch({ type: "UPDATE_ERROR" });
        }

    }

    return (
        <>
            <Container fluid className="container-fluid rounded p-0 whole-page" expand="lg">
                <Row >
                    <Col md={3} className="side-bar px-0 py-4">
                        <Form onSubmit={onUpdate}>
                            <Form.Group className="mb-5 mx-4 py-0 field-div" controlId="firstName">
                                <Form.Label className='h5 my-control'>First Name</Form.Label>
                                <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-5 py-0 mx-4 h5 field-div" controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" value={lastName} onChange={(e) => {
                                    setLastName(e.target.value)
                                }} />
                            </Form.Group>

                            <Form.Group className="mb-5 mx-4 py-0 h5 field-div" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-5 mx-4 py-0 h5 field-div" controlId="companyName">
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control type="text" value={companyName} onChange={(e) => {
                                    setCompanyName(e.target.value);
                                }} />
                            </Form.Group>
                            <Form.Group className="mb-5 py-0 mx-4 h5 field-div" controlId="companyAddress">
                                <Form.Label>Company Address</Form.Label>
                                <Form.Control as="textarea" value={companyAddress} onChange={(e) => {
                                    setCompanyAddress(e.target.value)
                                }} />
                            </Form.Group>
                            <Form.Group className="mb-5 mx-4 py-0 h5 field-div" controlId="phoneNo1">
                                <Form.Label>Phone No1</Form.Label>
                                <Form.Control type="text" value={phoneNo1} onChange={(e) => {
                                    setphoneNo1(e.target.value)
                                }} />
                            </Form.Group>
                            <Form.Group className="mb-5 mx-4 py-0 h5 field-div" controlId="phoneNo2">
                                <Form.Label>Phone No 2</Form.Label>
                                <Form.Control type="text" value={phoneNo2} onChange={(e) => {
                                    setphoneNo2(e.target.value)
                                }} />
                            </Form.Group>
                            <Form.Group className="mb-5 mx-4 py-0 h5 field-div" controlId="position">
                                <Form.Label>Position</Form.Label>
                                <Form.Control type="text" value={position} onChange={(e) => {
                                    setPosition(e.target.value)
                                }} />
                            </Form.Group>
                            {loading ? <LoadingBox /> : <Button className='p-2 px-4 d-flex mr-5 ml-auto' id="save-button" type='submit'>Update</Button>}
                        </Form>


                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default HomePage
