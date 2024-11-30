import React from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";

const UserFeedback = () => {
  // Dummy feedback data
  const feedbacks = [
    {
      name: "John Doe",
      feedback: "This platform has transformed my trading journey. The courses are easy to follow, and the community support is fantastic!",
    },
    {
      name: "Jane Smith",
      feedback: "I’ve learned so much from the advanced trading strategies. The personal mentorship was invaluable.",
    },
    {
      name: "Robert Brown",
      feedback: "The signals are always accurate, and I’ve been able to improve my portfolio significantly.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
      <Container>
        <h2 className="text-center mb-5">What Our Users Say</h2>
        
        {/* For smaller screens (Swipe-enabled Carousel) */}
        <div className="d-lg-none">
          <Carousel
            touch={true}
            interval={null}
            controls={false}
            indicators={true}  // Enable indicators
            wrap={true}  // Infinite scroll
            style={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "50px",  // Add padding to ensure indicators don’t overlap
            }}
          >
            {feedbacks.map((feedback, index) => (
              <Carousel.Item key={index}>
                <Card className="shadow-sm mx-auto" style={{ width: "80%" }}>
                  <Card.Body>
                    <Card.Title className="text-center fw-bold">{feedback.name}</Card.Title>
                    <Card.Text className="text-muted">
                      <i>"{feedback.feedback}"</i>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <Button variant="primary" className="w-100">
                      Learn More
                    </Button>
                  </Card.Footer>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* For larger screens */}
        <div className="d-none d-lg-block">
          <Row className="g-4">
            {feedbacks.map((feedback, index) => (
              <Col lg={4} md={6} key={index}>
                <Card className="shadow-sm h-100">
                  <Card.Body>
                    <Card.Title className="text-center fw-bold">{feedback.name}</Card.Title>
                    <Card.Text className="text-muted">
                      <i>"{feedback.feedback}"</i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default UserFeedback;
