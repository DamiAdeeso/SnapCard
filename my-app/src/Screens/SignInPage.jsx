import { Button, Col, Form ,Row} from 'react-bootstrap';
import "../styles/signin.css";

const signin = (e)=>{
 e.preventDefault();


}
function SignInPage() {
  return (
    <Row id = "signin-body" className = "pt-5 px-4">
      <Col md = {5} id='signin-div' className=' px-3 pt-4'>
      <Form onSubmit={signin} className='d-flex justify-content-center'>
        <Form.Group className = "my-3 ">
            <Form.Control placeholder= "Enter email"/>
        </Form.Group>
        <Form.Group className = "my-3">
            <Form.Control placeholder='Enter password'/>
        </Form.Group >
        <Button type='submit' className='mt-5 d-flex text-center save-button'>Submit</Button>
      </Form>
      </Col>
    </Row>
  )
}

export default SignInPage;
