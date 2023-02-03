import React from 'react';
import {Col, Row, Button, Container,Form,} from 'react-bootstrap';
import IndexImage from '../../assets/images/indeximage-bg.jpg';
import Logo from '../../assets/images/kevellcare-logo.png';
import {Link} from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
 
function ForgetPassword() {
  return (
    <div className='user-login'>
      <Container fluid>
        <Row>
        <Col lg={5}>
            <img src={IndexImage} className='userlogin-bg img-fluid' />
            {/* <div>
                <img src={Logo} className='kc-logo' />
            </div>
            <div className='intro'>
                <h3>
                    Connect Doctor World Wide
                </h3>
                <p>Kevell Care allows healthcare providers to evaluate,diagnose and treat without the need for an in-person visit.</p>
            </div> */}
            <div className="copyrights">
              <h3>
                Copyright &copy; 2023 <span>Care</span>. All Rights Reserved
              </h3>
              <div className="social-media_icons">
                <ul>
                  <li>
                    <FaFacebookF />
                  </li>
                  <li>
                    <FaTwitter />
                  </li>
                  <li>
                    <FaLinkedinIn />
                  </li>
                  <li>
                    <FaInstagram />
                  </li>
                </ul>
              </div>
            </div>
        </Col>
        <Col lg={7}>
          <Form className='userform'>
            <div className="userlogin-form">
              <h2 className='headingcolor'>User Forget Password</h2>

              <div class="form">
                <div class="form-item">
                  <input
                    type="text"
                    id="recoveryEmail"
                    autocomplete="off"
                    required
                    
                  />
                  <label for="recoveryEmail">Enter Email</label>
                </div>

             
              </div>

         <div className='forgetpassword-btn'>
                 <Link to="/"><Button >Back</Button> </Link>
                 <Link to="/newuser"><Button >Next</Button> </Link>
                 </div>
            </div>
          </Form>
        </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ForgetPassword
