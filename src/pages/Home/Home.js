import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import GLineChart from "../../components/GLineChart/GLineChart";
import GPieChart from "../../components/GPieChart/GPieChart";
import { IoIosContact } from "react-icons/io";
import { FaSyringe } from "react-icons/fa";
import Managetest from "../../components/Managetest/Managetest";
import { apicaller } from "../../utils/api";

export default function Home() {
  //  const [chooseUsData, setChooseUsData] = useState([]);
  const [income, setIncome] = useState([]);

  useEffect(() => {
    getIncome();
  }, []);

  const getIncome = () => {
    apicaller("pathology-income/634e3c4bfc2b760247d48d5b", null, "get", null)
      .then((res) => {
        setIncome(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Header />
      <Container fluid id="home1">
        <Row id="home2">
          <Col xs={12} md={12} id="home3">
            Welcome to
          </Col>
        </Row>
        <Row id="home2">
          <Col xs={12} md={12} id="home4">
            Patholab Panel
          </Col>
        </Row>
        <Row>
          <Col></Col>
         
            <Col xs={12} md={3} id="home5">
              <div id="home6">Total revenue</div>
              <div id="home9">&#8377;</div>
              <div id="home7">{income.income}</div>
              <div id="home8"></div>
            </Col>

          <Col xs={12} md={3} id="home5">
            <div od="home6">Total Visited</div>
            <div id="home9">
              <IoIosContact />
            </div>
            <div id="home7">5000</div>
            <div id="home8"></div>
          </Col>
          <Col xs={12} md={3} id="home5">
            <div od="home6">Total Test Done</div>
            <div id="home9">
              <FaSyringe />
            </div>
            <div id="home7">3000</div>
            <div id="home8"></div>
          </Col>
          <Col></Col>
        </Row>
        <Row style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <Col style={{ marginBottom: "1rem" }}>
            <GPieChart />
          </Col>
          <Col>
            <GLineChart />
          </Col>
        </Row>
      </Container>
      <Managetest />
    </>
  );
}
