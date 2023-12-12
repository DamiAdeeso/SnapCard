import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import logo from './animation.png'
import "../styles/signup.css";
import { FaArrowRight } from "react-icons/fa";

function SignupPage() {
  return (
    <div id='signup-page'>
      <Row className='p-3' id='signup-row'>
        <h1 className='m-1'>Sign Up</h1>
        <Col xs ={{span:12,order:2} } md={{span:5,order:1}} classname="m-4">
          <Form>
            <Form.Group >
              <Row>
                <Col md ={6}>
                  <Form.Control className="m-2" placeholder="First name" />
                </Col>
                <Col md={6}>
                  <Form.Control className="m-2" placeholder="Last name" />
                </Col>
              </Row>

            </Form.Group>
            <Form.Group >
              <Row>
                <Col md={6} >
                  <Form.Control md={6}type="text" className="m-2" placeholder="Middle Name" />
                </Col>
                <Col md={6} >
                  <Form.Control md ={6} type="email" className="m-2" placeholder="Email" />
                </Col>
              </Row>

            </Form.Group>
            <Form.Group >
              <Row>
                <Col md={6}>
                  <Form.Control  type="password" className="m-2" placeholder="Password" />
                </Col>
                <Col md={6} >
                  <Form.Control type="password" className="m-2" placeholder="Re-type-Password" />
                </Col>
              </Row>

            </Form.Group>
            <Form.Group >
              <Row>
                <Col md={6} >
                  <Form.Control md={6}type="text" className="m-2" placeholder="Company Name" />
                </Col>
                <Col md={6} >
                  <Form.Control md ={6} type="text" className="m-2" placeholder="Position" />
                </Col>
              </Row>

            </Form.Group>
            <Form.Control md ={6}as="textarea" className="m-2" placeholder="Company Address" />
            <Form.Group >
              <Row>
                <Col md={6} >
                  <Form.Control md={6}type="text" className="m-2" placeholder="Phone Number 1" />
                </Col>
                <Col md={6} >
                  <Form.Control md ={6} type="text" className="m-2" placeholder="Phone Number 2" />
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
