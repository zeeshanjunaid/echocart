import React from "react";
import { Form, Button } from "react-bootstrap";
import { FaEnvelope, FaChevronDown } from "react-icons/fa";
import gsap from "gsap";

const tl = gsap.timeline();
const ContactWidget = () => {
  const setFormVisible = () => {
    tl.to(".contact_btn", {
      duration: 0.3,
      ease: "power1.out",
      y: 100,
    }).to(".contact_form", 0.5, {
      duration: 0.5,
      ease: "power1.in",
      y: 0,
    });
  };
  const setBtnVisible = () => {
    tl.to(".contact_form", {
      duration: 1,
      ease: "power1.out",
      y: 500,
    }).to(".contact_btn", {
      duration: 0.3,
      ease: "power3.in",
      y: 0,
    });
  };
  return (
    <>
      <button className="contact_btn" onClick={setFormVisible}>
        Contact us <FaEnvelope />
      </button>
      <div className={"contact_form hideform"}>
        <div className="contact_form__header" onClick={setBtnVisible}>
          <FaChevronDown onClick={setBtnVisible} />
          <h4>Contact us</h4>
        </div>
        <div className="contact_form__body">
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="textarea">
              <Form.Label>How can we help?</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button block variant="green" type="submit">
              send
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ContactWidget;
