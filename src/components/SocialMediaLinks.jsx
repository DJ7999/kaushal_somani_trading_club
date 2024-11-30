// src/components/SocialMediaLinks.js
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
//import './SocialMediaLinks.css'; // Optional: You can add a custom CSS file for styling

const SocialMediaLinks = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <Container>
        <Row className="justify-content-center">
          <Col md={4} className="text-center">
            <h5 className="mb-3">Follow Us</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-3">
                <FaFacebook size={40} color="#3b5998" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-3">
                <FaTwitter size={40} color="#1da1f2" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-3">
                <FaInstagram size={40} color="#e4405f" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-3">
                <FaLinkedin size={40} color="#0077b5" />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default SocialMediaLinks;
