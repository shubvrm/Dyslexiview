import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');


  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Provide your textual input<br></br>Or upload a file!</h3>
            </Col>
            <Col md={6} xl={7}>
              <form>
                <div className="new-email-bx">
                  <input 
                    value={email} 
                    type="text"  // Changed from "email" to "text"
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Text Input"  // Updated placeholder text
                  />

                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
