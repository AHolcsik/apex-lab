import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Monitor</Nav.Link>
            <Nav.Link href="#link">Alerts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form.Switch></Form.Switch>
      </Container>
    </Navbar>
  );
}

export default Navigation;
