import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Banner = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #007bff, #0056b3)",
        color: "white",
        padding: "80px 0",
        margin :"10px",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Text Section */}
          <Col md={6} className="text-center text-md-start">
            <h1 className="display-4 fw-bold">
              Learn and Grow with <span style={{ color: "#ffc107" }}>Our Courses</span>
            </h1>
            <p className="mt-3 lead">
              Join thousands of learners mastering trading and investing skills. 
              Start your journey today!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
