import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const AboutFounder = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
      <Container>
        <h2 className="text-center mb-5">About The Founder</h2>
        <Row className="align-items-center">
          {/* Founder Image */}
          <Col lg={4} md={6} className="text-center mb-4 mb-lg-0">
            <img
              src="https://via.placeholder.com/250"  // Replace with the actual founder's image URL
              alt="Founder"
              className="img-fluid rounded-circle"
              style={{ maxWidth: "250px", marginBottom: "20px" }}
            />
            <h3 className="fw-bold">John Doe</h3>
            <p className="text-muted">Founder & CEO</p>
          </Col>

          {/* Founder Bio and Achievements */}
          <Col lg={8} md={6}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <div
                  style={{
                    maxHeight: "400px",  // Set a max height for the scrollable container
                    overflowY: "auto",  // Make the text scrollable
                    paddingRight: "15px",  // Add padding to avoid text touching the scrollbar
                  }}
                >
                  <Card.Text>
                    <p>
                      <strong>John Doe</strong> is a seasoned entrepreneur with over 15 years of experience in the financial industry. His journey began with a deep interest in trading and investing, which led him to build a company aimed at helping people achieve financial freedom through education and actionable insights.
                    </p>
                    <p>
                      With an MBA from Harvard and a track record of successful ventures, John’s vision is to make financial education accessible to everyone, regardless of their background.
                    </p>
                    <p>
                      Under his leadership, the company has grown rapidly, gaining recognition for its innovative approach to education and user-friendly platform.
                    </p>
                    <p>
                      His passion for financial literacy is at the heart of everything we do, and his mission is to empower individuals to make informed decisions about their financial futures.
                    </p>
                  </Card.Text>
                </div>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutFounder;
