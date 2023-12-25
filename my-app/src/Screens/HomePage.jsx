import React, { useReducer } from 'react'
import { Button, Container, Col, Form, Row } from 'react-bootstrap'
import "../styles/homepage.css"
function HomePage() {
    const reducer = (state, action) => {
        switch (action.type) {
            case "UPDATE_REQUEST":
                return { ...state, loading: true };
            case "UPDATE_SUCCESS":
                return { ...state, loading: false };
            case "UPDATE_ERRROR":
                return { ...state, loading: false };

            default:
                return state;
        }
    }
    const [{loading},dispatch] = useReducer(reducer,{
        loading:false
    });

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [position, setPosition] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    const [phoneNumber1, setPhoneNumber1] = useState("");
    const [phoneNumber2, setPhoneNumber2] = useState("");

    return (
        <>
            <Container fluid className="container-fluid rounded p-0 whole-page" expand="lg">
                <Row >
                    <Col md={3} className="side-bar px-0 py-4">
                        <Form>
                            <Form.Group className="mb-5 mx-4 py-0 field-div" controlId="formBasicEmail">
                                <Form.Label className='h5 my-control'>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name"  onChange={(e)=>setFirstName(e.target.value)}/>
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

                            <Button className='p-2 px-4 d-flex mr-5 ml-auto' id="save-button">Save</Button>
                        </Form>


                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default HomePage
