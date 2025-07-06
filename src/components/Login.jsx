import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import "./Login.css";
import { isValidPassword } from '../utils/helpers';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    keepMeSignIn: false
  });

  const [passwordError, setPasswordError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isValidPassword(formData?.password) === 'Valid') navigate('/Home');
    else setPasswordError(isValidPassword(formData?.password))
  };

  return (
    <Container fluid className="w-100 d-flex justify-content-center align-items-center min-vh-100">
      <div className='row-div'>
        <div className='lodin-main-div'>
          <div className='w-100'>
              <h4 className="login-heading mb-2">Sign In</h4>
              <div className='new-user-text'>
                <p>New User?</p> 
                <a href='#'>Create an account</a>
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Username or email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='input_box mx-auto mx-md-0'
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className='input_box mx-auto mx-md-0'
                  />
                </Form.Group>

                <Form.Group controlId="keepSignIn" className="mb-4">
                  <Form.Check
                    type="checkbox"
                    label="Keep me signed in"
                    name="keepMeSignIn"
                    checked={formData.keepMeSignIn}
                    onChange={handleChange}
                    className='check-box mx-auto mx-md-0'
                  />
                </Form.Group>

                  {passwordError && 
                  <p className="password-error">{passwordError}</p>
                  }

                <Button type="submit" className="sign-btn">
                  Submit
                </Button>
              </Form>
          </div>

          <div className='s-signIn-div'>
            <hr className='s-sign-bar' />
            <p className='s-sign-text'>Or Sign In With</p>
            <hr className='s-sign-bar' />
          </div>

          <img src='./social-icons.png' className='social-icons'/>
        </div>
         <div className='login-img'>
                <img src="./login-img.png" />
          </div>
      </div>
      
    </Container>
  );
}

export default LoginPage;
