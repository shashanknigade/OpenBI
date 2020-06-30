import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/static/home/openbi_logo.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />OpneBI
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/ws">Workspace</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default Navigation;
