import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import logo from './animation.png'
import "../styles/signup.css";
import { FaArrowRight } from "react-icons/fa";

function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [middleName,setMiddleName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] =  useState("");
  const [companyName,setCompanyName] =useState("");
  const [position,setPosition] = useState("");
  const [companyAddress,setCompanyAddress] =useState("");
  const [phoneNumber1,setPhoneNumber] = useState("");
  const [phoneNumber2,setPhoneNumber2] = useState("");

  const onSubmit = (e)=>{
    e.preventDefault();
    try{
      const firstName = 
    }catch(err){

    }

  }
  return (
    <div id='signup-page'>
      <Row className='p-3' id='signup-row'>
        <h1 className='m-1'>Sign Up</h1>
        <Col xs ={{span:12,order:2} } md={{span:5,order:1}} classname="m-4">
          <Form onSubmit={onSubmit}>
            <Form.Group >
              <Row>
                <Col md ={6}>
                  <Form.Control className="m-2" placeholder="First name" onChange ={(e) =>{setFirstName(e.target.value)}} />
                </Col>
                <Col md={6}>
                  <Form.Control className="m-2" placeholder="Last name" onChange = {(e)=>{setLastName(e.target.value)}} />
                </Col>
              </Row>

            </Form.Group>
            <Form.Group >
              <Row>
                <Col md={6} >
                  <Form.Control md={6}type="text" className="m-2" placeholder="Middle Name" onChange = {(e)=>{setMiddleName(e.target.value)}} />
                </Col>
                <Col md={6} >
                  <Form.Control md ={6} type="email" className="m-2" placeholder="Email" onChange = {(e)=>{setEmail(e.target.value)}}/>
                </Col>
              </Row>

            </Form.Group>
            <Form.Group >
              <Row>
                <Col md={6}>
                  <Form.Control  type="password" className="m-2" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
                </Col>
                <Col md={6} >
                  <Form.Control type="password" className="m-2" placeholder="Re-type-Password" />
                </Col>
              </Row>

            </Form.Group>
            <Form.Group >
              <Row>
                <Col md={6} >
                  <Form.Control md={6}type="text" className="m-2" placeholder="Company Name" onChange={(e)=>{setCompanyName(e.target.value)}}/>
                </Col>
                <Col md={6} >
                  <Form.Control md ={6} type="text" className="m-2" placeholder="Position" onChange={(e)=>{setPosition(e.target.value)}}/>
                </Col>
              </Row>

            </Form.Group>
            <Form.Control md ={6}as="textarea" className="m-2" placeholder="Company Address" onChange={(e)=>{setCompanyAddress(e.target.value)}} />
            <Form.Group >
              <Row>
                <Col md={6} >
                  <Form.Control md={6}type="text" className="m-2" placeholder="Phone Number 1" onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
                </Col>
                <Col md={6} >
                  <Form.Control md ={6} type="text" className="m-2" placeholder="Phone Number 2" onChange={(e)=>{setPhoneNumber2(e.target.value)}}/>
                </Col>
              </Row>

            </Form.Group>

            <Button type="submit" id = "button" className='px-4'><FaArrowRight fill= "#ffffff" /></Button>
          </Form>


        </Col>
        <Col xs={{span:12,order:1}} md={{span:7,order:2}} id='test' className='d-flex align-items-center justify-content-center'>
          <img src={logo} alt="logo" id="animation" />
        </Col>

      </Row>
    </div>
  )
}

export default SignupPage
