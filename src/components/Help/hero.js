import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero_section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={6} sm={8} xs={12}>
            <h2>How can we help?</h2>
            <Form.Group controlId="search">
              <Form.Control
                type="text"
                placeholder="Search for your question"
              />
              <FaSearch />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
