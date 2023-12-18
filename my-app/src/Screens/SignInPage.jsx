import { Button, Col, Form ,Row} from 'react-bootstrap';
import "../styles/signin.css";
import { useReducer, useState } from 'react';
import LoadingBox from '../components/LoadingBox';
import { FaArrowRight } from 'react-icons/fa';
import axios from 'axios';

function SignInPage() {
  const [email,setEmail]= useState("");
  const [password,setPassword] = useState("");

     switch(action.type){
      case "SIGNIN_REQUEST":
        return{...state,loading:true}
      case "SIGNIN_SUCCESS":
        return {...state,loading:false}
      case "SIGNIN_ERROR":
        return{...state,loading:false}
    }

    const [{loading},dispatch] = useReducer({
      laoding:false
    })
  }
  const signin = async (e)=>{
    e.preventDefault();
    try{
      tatst
      const {user} = await axios.post("/signin",{
        email,
        password
      })
    }catch(err){
      
    }

   
  return (
    <div id='signup-page'>
      <Row className='p-3' id='signup-row'>
        <h1 className='m-1'>Sign Up</h1>
        <Col xs ={{span:12,order:2} } md={{span:5,order:1}} classname="m-4">
          <Form onSubmit={signin}>
                  <Form.Control md ={6} type="email" className="m-2" placeholder="Email" onChange = {(e)=>{setEmail(e.target.value)}}/>

                  <Form.Control  type="password" className="m-2" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
            {loading?<LoadingBox/>:<Button type="submit" id = "button" className='px-4 mt-3 mb-5'><FaArrowRight fill= "#ffffff"/></Button>}
          </Form>
        </Col>
        <Col xs={{span:12,order:1}} md={{span:7,order:2}} id='test' className='d-flex align-items-center justify-content-center'>
          <img src={logo} alt="logo" id="animation" />
        </Col>
      </Row>
    </div>
  )
}

export default SignInPage;
