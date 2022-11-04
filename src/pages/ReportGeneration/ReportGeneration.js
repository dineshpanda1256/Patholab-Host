import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Header from "../../components/Header/Header";
import "./ReportGeneration.css";

export default function ReportGeneration() {
  return (
    <>
      <Header />
      <Container>
        <Row id="rg2">
          <Col>
            <Button id="rg1">Upload report PDF</Button>
          </Col>
        </Row>
      </Container>
      <Container id="rg4">
        <Row>
          <Col id="rg3">Generate Report</Col>
        </Row>
        <Row id="rg5">
          <Col>
            <div id="rg7">
              <span id="rg6">Patient Name :</span> Amisha Sahu
            </div>
            <div id="rg7">
              <span id="rg6">Age/sex/DOB :</span>23 / <span>Female /</span>
              <span>01-01-2000</span>
            </div>
            <div id="rg7">
              <span id="rg6">MRN : </span> 123456{" "}
            </div>
            <div id="rg7">
              <span id="rg6">Client Name :</span> Codekart Solution Pvt. Ltd.
            </div>
          </Col>
          <Col>
            <div id="rg7">
              <span id="rg6">Case No:</span> #123456
            </div>
            <div id="rg7">
              <span id="rg6">Collected on :</span>24-05-2022
            </div>
            <div id="rg7">
              <span id="rg6">Received on :</span>24-05-2022
            </div>
          </Col>
        </Row>
        <Row>
          <Col id="rg8">Blood Test Report</Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="rg9">Diagnosis</Form.Label>
                <Form.Control as="textarea" rows={3} className="rg10" />

                <Form.Label className="rg9">Microscopic Examination</Form.Label>
                <Form.Control as="textarea" rows={3} className="rg10" />

                <Form.Label className="rg9">Gross Examination</Form.Label>
                <Form.Control as="textarea" rows={3} className="rg10" />

                <Form.Label ClassName="rg9">Specimen</Form.Label>
                <Form.Control as="textarea" rows={1} className="rg10" />

                <Form.Label className="rg9">pertinent history</Form.Label>
                <Form.Control as="textarea" rows={1} className="rg10" />

                <Form.Label className="rg9">
                  Add Address, Contact number and other details
                </Form.Label>
                <Form.Control as="textarea" rows={1} className="rg10" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col id="rg11">
            <Button id="rg12">Generate Report</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
