import React from 'react'
import { Button, Col, Container, Form, FormText, Navbar, Row } from 'react-bootstrap'
import "../styles/homepage.css"
import MyNavbar from '../components/MyNavbar'
function HomePage() {
    return (
        <div>
      
      <Container fluid className="container-fluid rounded p-0 whole-page" expand="lg">
        <Row >
          <Col md={3} className="side-bar px-0 py-4">
            <Form>
            <Form.Group className="mb-5 mx-4 py-0 field-div" controlId="formBasicEmail">
                            <Form.Label className='h5 my-control'>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" />
                        </Form.Group>

                        <Form.Group className="mb-5 py-0 mx-4 h5 field-div" controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-5 mx-4 py-0 h5 field-div" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-5 mx-4 py-0 h5 field-div" controlId="formBasicEmail">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-5 py-0 mx-4 h5 field-div" controlId="formBasicEmail">
                            <Form.Label>Company Address</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter Comapany Address" />
                        </Form.Group>
                        <Form.Group className="mb-5 mx-4 py-0 h5 field-div" controlId="formBasicEmail">
                            <Form.Label>Phone No1</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-5 mx-4 py-0 h5 field-div" controlId="formBasicEmail">
                            <Form.Label>Phone No 2</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-5 mx-4 py-0 h5 field-div" controlId="formBasicEmail">
                            <Form.Label>Position</Form.Label>
                            <Form.Control type="text" placeholder="Enter Position held at Company" />
                        </Form.Group>

                        <Button className='p-2 px-4 d-flex mr-5 ml-auto' id = "save-button">Save</Button>
            </Form>
            
                        
          </Col>
        </Row>
      </Container>
    </div>

    )
}

export default HomePage
