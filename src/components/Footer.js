import { Container, Row, Col } from "react-bootstrap";
import { ConnectionIcons } from "./ConnectionIcons";

export const Footer = () => {
  return (
    <footer className="footer ">
      <Container>
        <Row className="align-items-center">          
          <Col 
          className="text-center">
          <ConnectionIcons />
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}