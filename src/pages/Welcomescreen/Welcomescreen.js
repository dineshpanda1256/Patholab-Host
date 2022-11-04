import React, { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import "./Welcomescreen.css";
import { FcGoogle } from "react-icons/fc";
import nova from "../../asset/novalogo.png";
import whitelogo from "../../asset/whitelogo.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Actions";
import { Link, Navigate } from "react-router-dom";

export default function Welcomescreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const userLogIn = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };
    console.log("User Is : ", user);
    dispatch(login(user));
  };

  if (auth.authenticate) {
    return <Navigate to={"/home"} />;
  }
  return (
    <>
      {/* <Container>
        <Row id="wel1">
          <Col></Col>
          <Col xs={12} md={12}>
            <div id="wel2">
              <div>
                <img src={nova} id="wel3" />
              </div>

              <div id="wel4">Patholab Panel</div>

              <Row id="wel7">
                <Col></Col>
                <Col md={4}>
                  <Form.Control type="text" placeholder="Email*" id="wel5" />
                </Col>
                <Col></Col>
              </Row>

              <Row id="wel7">
                <Col></Col>
                <Col md={4}>
                  <Form.Control type="text" placeholder="Password" id="wel5" />
                </Col>
                <Col></Col>
              </Row>

              <Row>
                <Col></Col>
                <Col md={4}>
                  <Button id="wel6" variant="dark">
                    login
                  </Button>
                </Col>
                <Col></Col>
              </Row>

              <div id="wel8">Register Your Lab Now</div>

              <div id="wel8">Forgot Password</div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container> */}
      <Container id="welcome8">
        <Row style={{ textAlign: "center" }}>
          <Col xs={1} md={1}></Col>
          <Col xs={10} md={10} id="welcome1">
            <Row>
              <Col>
                <Image src={whitelogo} alt="logo" id="welcome3" />
              </Col>
            </Row>
            <Row>
              <Col id="welcome2">Patholab Panel</Col>
            </Row>
            <Row>
              <Col>
                <Form id="welcome4">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="User id"
                      className="welcome5"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="welcome10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" id="welcome6" onClick={userLogIn}>
                    Login
                  </Button>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col id="welcome11">
                <Link to="/forgetpwd" id="welcome12">
                  Forgot Password
                </Link>
              </Col>
            </Row>
            <Row>
              <Col id="welcome7">
                <Link to="/labreg" id="welcome12">
                  Register your Lab Now{" "}
                </Link>
              </Col>
            </Row>
          </Col>
          <Col xs={1} md={1}></Col>
        </Row>
      </Container>
    </>
  );
}
