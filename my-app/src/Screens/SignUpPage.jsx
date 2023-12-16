import React, { useReducer, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import logo from './animation.png'
import "../styles/signup.css";
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [middleName,setMiddleName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] =  useState("");
  const [companyName,setCompanyName] =useState("");
  const [position,setPosition] = useState("");
  const [companyAddress,setCompanyAddress] =useState("");
  const [phoneNumber1,setPhoneNumber1] = useState("");
  const [phoneNumber2,setPhoneNumber2] = useState("");
  // const [reducer,dispatch] = useReducer("");
   const reducer = (state,action)=> {
    switch(action.type){
    case "SIGNUP_REQUEST":
      return{...state, loading:true};
    case "SIGNUP_SUCCESS":
    return {...state, loading:false};
    case "SIGNUP_ERRROR":
    return {...state, loading:false};

    default:
      return state;
    }

   }
   const [{loading},dispatch] = useReducer(reducer,{
    loading:false
   })
  const onSubmit = async (e)=>{
    e.preventDefault();
    try{
      dispatch({type:"SIGNUP_REQUEST"})
      const user = await axios.post("/api/v1/auth/signup",{
        firstName,
        lastName,
        middleName,
        email,
        password,
        companyName,
        position,
        companyAddress,
        phoneNumber1,
        phoneNumber2
      })
      dispatch({type:"SIGNUP_SUCCESS"});
      navigate("/dashboard")
    }catch(err){
      dispatch({type:"SIGNUP_ERROR"});
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
                  <Form.Control md={6}type="text" className="m-2" placeholder="Phone Number 1" onChange={(e)=>{setPhoneNumber1(e.target.value)}}/>
                </Col>
                <Col md={6} >
                  <Form.Control md ={6} type="text" className="m-2" placeholder="Phone Number 2" onChange={(e)=>{setPhoneNumber2(e.target.value)}}/>
                </Col>
              </Row>

            </Form.Group>

            {loading?<LoadingBox/>:<Button type="submit" id = "button" className='px-4 mt-3 mb-5'><FaArrowRight fill= "#ffffff" /></Button>}
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
