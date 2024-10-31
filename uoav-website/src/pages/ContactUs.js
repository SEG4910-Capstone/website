import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/ContactUs.css';

const ContactUs = () => {
  return (
    <Container fluid className="contact-us-container mt-5">
      <Row className="justify-content-center text-center">
        <Col className="contact-us-header" md={8}>
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-description">
            Wish to enquire about joining our team, supporting us, or anything else?
            You can walk in during office hours, or send us an email!
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        <Col md={5} className="mb-4">
          <Form className="contact-form p-4 shadow-sm">
            <Row>
              <Col>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formSubject" className="mb-3">
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Control as="textarea" rows={5} placeholder="Your Message" />
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-button">
              Send Message
            </Button>
          </Form>
        </Col>

        <Col md={5} className="mb-4">
          <div className="map-container shadow-sm">
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.4652587863857!2d-75.68304112368673!3d45.42012177107326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05e914bb5f71%3A0xb5d79f4a8cc3861c!2sJohn%20McEntyre%20Team%20Space!5e0!3m2!1sen!2sca!4v1730396323403!5m2!1sen!2sca"
              height="450"
              width="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;