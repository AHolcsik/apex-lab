import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Monitor from "./Monitor";
import Alerts from "./Alerts";

function Navigation({ toggleSwitch }) {
  return (
    <Router>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Monitor
              </Nav.Link>
              <Nav.Link as={Link} to="/alerts">
                Alerts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Turn on stream"
            onClick={() => toggleSwitch()}
          />
        </Container>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<Monitor />} />
        <Route exact path="/alerts" element={<Alerts />} />
      </Routes>
    </Router>
  );
}

export default Navigation;
