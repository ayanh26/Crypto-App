import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Flip from "react-reveal/Flip";

const Navigation = () => {
  return (
    <>
      <Flip top>
        <Navbar bg="dark fixed-top" variant="dark">
          <Container style={{ marginLeft: "31rem" }}>
            <Nav className="me-auto">
              <Nav.Link href="/">Rank</Nav.Link>
              <Nav.Link href="#home">Prices</Nav.Link>
              <Nav.Link href="/supply">Supply</Nav.Link>
              <Nav.Link href="#pricing">Most Volitile</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Flip>
    </>
  );
};

export default Navigation;
