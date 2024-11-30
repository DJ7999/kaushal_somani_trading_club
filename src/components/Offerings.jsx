import React from "react";
import { Container, Card, Button, Carousel, Row, Col } from "react-bootstrap";

const Offerings = () => {
  // Dummy offerings data
  const offerings = [
    {
      title: "Trading Basics",
      features: ["Step-by-step tutorials", "Live webinars", "E-books"],
      price: "$99",
    },
    {
      title: "Advanced Trading",
      features: ["In-depth strategies", "1-on-1 mentorship", "Lifetime access"],
      price: "$199",
    },
    {
      title: "Premium Signals",
      features: ["Daily trading signals", "Private Telegram group", "24/7 support"],
      price: "$299",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
      <Container>
        <h2 className="text-center mb-5">Our Offerings</h2>
        
        {/* For larger screens */}
        <div className="d-none d-lg-block">
          <Row className="g-4">
            {offerings.map((offering, index) => (
              <Col lg={4} key={index}>
                <Card className="shadow-sm h-100">
                  <Card.Body>
                    <Card.Title className="text-center fw-bold">
                      {offering.title}
                    </Card.Title>
                    <Card.Text>
                      <ul>
                        {offering.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                      <div className="text-center mt-3">
                        <h4 className="text-primary fw-bold">{offering.price}</h4>
                      </div>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <Button variant="primary" className="w-100">
                      Get It
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* For smaller screens (Swipe-enabled Carousel) */}
        <div className="d-lg-none">
          <Carousel
            touch={true}
            interval={null}
            controls={false}
            indicators={true}  // Enable indicators
            wrap={true}  // Infinite scroll
            slide={true}
            style={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "50px",  // Add padding to ensure indicators don’t overlap
            }}
          >
            
            {offerings.map((offering, index) => (
              <Carousel.Item key={index}>
                <Card
                  className="shadow-sm mx-auto"
                  style={{
                    width: "75%",  // Adjust card width
                    marginLeft: "10%",  // Space around the cards
                    marginRight: "10%",
                    transition: "transform 0.5s ease",  // Smooth transition
                  }}
                >
                  <Card.Body>
                    <Card.Title className="text-center fw-bold">
                      {offering.title}
                    </Card.Title>
                    <Card.Text>
                      <ul>
                        {offering.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                      <div className="text-center mt-3">
                        <h4 className="text-primary fw-bold">{offering.price}</h4>
                      </div>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <Button variant="primary" className="w-100">
                      Get It
                    </Button>
                  </Card.Footer>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default Offerings;
