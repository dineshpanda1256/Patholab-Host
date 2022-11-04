import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Header/Header";
import TestCard from "../../components/TestCard/TestCard";

export default function TestDashboard() {

  
  return (
    <>
      <Header />
      <Container style={{ marginTop: "2rem", marginBottom: "1rem" }}>
        <Row>
          <Col>
            <TestCard />
          </Col>
          <Col>
            <TestCard />
          </Col>
          <Col>
            <TestCard />
          </Col>
          <Col>
            <TestCard />
          </Col>
        </Row>
        <Row>
          <Col>
            <TestCard />
          </Col>
          <Col>
            <TestCard />
          </Col>
          <Col>
            <TestCard />
          </Col>
          <Col>
            <TestCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}
