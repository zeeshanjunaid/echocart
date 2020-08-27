import React from "react";
import {
  Tab,
  Nav,
  Col,
  Row,
  Container,
  Accordion,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import faqs from "../../faqs";

const Category = ({ match }) => {
  const activeCat = match.params.cat_id;
  return (
    <div className="category_page">
      <Container>
        <Tab.Container defaultActiveKey={activeCat ? activeCat : 1}>
          <Row>
            <Col sm={12} md={3}>
              <Form.Group controlId="search">
                <Form.Control
                  type="text"
                  placeholder="Search for your question"
                />
                <FaSearch />
              </Form.Group>
              <Nav variant="link" className="flex-column">
                {faqs.map((faq) => (
                  <Nav.Item key={faq.id}>
                    <Nav.Link eventKey={faq.id}>{faq.category}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col sm={12} md={9}>
              <Tab.Content className="tab_container">
                <Tab.Pane eventKey="1">
                  <h2 className="title">Getting Started</h2>
                  <Accordion className="faq">
                    <Accordion.Toggle
                      className="faq_title"
                      as={Button}
                      variant="link"
                      eventKey="1"
                    >
                      question 1 getting started
                      <FaChevronDown />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body className="faq_body">
                        answer 1 getting started
                      </Card.Body>
                    </Accordion.Collapse>
                  </Accordion>
                  <Accordion className="faq">
                    <Accordion.Toggle
                      className="faq_title"
                      as={Button}
                      variant="link"
                      eventKey="1"
                    >
                      question 1 getting started
                      <FaChevronDown />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body className="faq_body">
                        answer 1 getting started
                      </Card.Body>
                    </Accordion.Collapse>
                  </Accordion>
                  <Accordion className="faq">
                    <Accordion.Toggle
                      className="faq_title"
                      as={Button}
                      variant="link"
                      eventKey="1"
                    >
                      question 1 getting started
                      <FaChevronDown />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body className="faq_body">
                        answer 1 getting started
                      </Card.Body>
                    </Accordion.Collapse>
                  </Accordion>
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <h2 className="title">Account Questions</h2>
                  <Accordion className="faq">
                    <Accordion.Toggle
                      className="faq_title"
                      as={Button}
                      variant="link"
                      eventKey="1"
                    >
                      question 1 account question
                      <FaChevronDown />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body className="faq_body">
                        answer 1 account question
                      </Card.Body>
                    </Accordion.Collapse>
                  </Accordion>
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <h2 className="title">Why Carbon Offset</h2>
                </Tab.Pane>
                <Tab.Pane eventKey="4">
                  <h2 className="title">Eco Points</h2>
                </Tab.Pane>
                <Tab.Pane eventKey="5">
                  <h2 className="title">About Ecocart</h2>
                </Tab.Pane>
                <Tab.Pane eventKey="6">
                  <h2 className="title">Privacy</h2>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default Category;
