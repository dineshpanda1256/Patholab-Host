import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Labregistration.css";
import { IoIosAddCircle } from "react-icons/io";
import novalogo from "../../asset/novalogo.png";
import { apicaller } from "../../utils/api";

export default function Labregistration() {
  const [labName, setLabName] = useState("");
  const [fullName, setFullName] = useState("");
  const [exp, setExp] = useState("");
  const [specialization, setSpecialization] = useState();
  const [testTiming, setTestTiming] = useState("");
  const [labCapacity, setLabCapacity] = useState();
  const [labRegNumber, setLabRegNumber] = useState("");
  const [panCard, setPanCard] = useState("");
  const [facilities, setFacilities] = useState("");

  // for errors
  const [errLabName, setErrLabName] = useState(false);
  const [errFullName, setErrFullName] = useState(false);
  const [errExp, setErrExp] = useState(false);
  const [errLabRegNum, setErrLabRegNum] = useState(false);

  // const validation = () => {
  //   if (labName.length === 0 || labName.length < 5) {
  //     setErrLabName(true);
  //     return false;
  //   } else if (fullName.length === 0 || fullName.length < 5) {
  //     setErrFullName(true);
  //     return false;
  //   } else if (exp.length === 0) {
  //     setErrExp(true);
  //     return false;
  //   } else if (labRegNumber.length === 0) {
  //     setErrLabRegNum(true);
  //     return false;
  //   }
    // else {
    //   setErrLabName(false);


    //   setErrFullName(false);
    //   setErrExp(false);
    //   setLabRegNumber(false);
    //   return true;
    // }
  // };

  // register data
  const submitBtn = async (e) => {
  
    if (labName.length > 5) {
      setErrLabName(false);

      if (fullName.length > 5) {
        setErrFullName(false);
        if (exp.length >= 2) {
          setErrExp(false);
          if (labRegNumber.length >= 2) {
            setErrLabRegNum(false);

            e.preventDefault();
            var data = JSON.stringify({
              labNamelab_name: labName,
              full_name: fullName,
              exp: exp,
              specialization: specialization,
              time_start: testTiming,
              lab_capacity: labCapacity,
              gov_registration_no: labRegNumber,
              facilities: facilities,
            });
            console.log("Data is", data);
            const res = await apicaller("pathology", data, "POST", null);
            if (res.status === 201 || res.status === 200) {
              setLabName("");
              setFullName("");
              setSpecialization("");
              setTestTiming("");
              setLabCapacity("");
              setLabRegNumber("");
              setFacilities("");
            }
          } else {
            setErrLabRegNum(true);
          }
        } else {
          setErrExp(true);
        }
      } else {
        setErrFullName(true);
      }
    } else {
      setErrLabName(true);
    }

    // e.preventDefault();
    // var data = JSON.stringify({
    //   labNamelab_name: labName,
    //   full_name: fullName,
    //   exp: exp,
    //   specialization: specialization,
    //   time_start: testTiming,
    //   lab_capacity: labCapacity,
    //   gov_registration_no: labRegNumber,
    //   facilities: facilities,
    // });
    // console.log("Data is", data);
    // const res = await apicaller("pathology", data, "POST", null);
    // if (res.status === 201 || res.status === 200) {
    //   setLabName("");
    //   setFullName("");
    //   setSpecialization("");
    //   setTestTiming("");
    //   setLabCapacity("");
    //   setLabRegNumber("");
    //   setFacilities("");
    // }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div id="lab16">
              <img src={novalogo} style={{ height: "2rem" }} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container id="lab1">
        <Row>
          <Col md={12}>
            <div id="lab2">
              <Row>
                <Col>
                  <div id="lab4">LAB REGISTRATION PANEL</div>
                </Col>
              </Row>

              <Row id="lab17">
                <Col md={8} xs={12}>
                  <Form.Control
                    type="text"
                    placeholder="Enter Lab full name * "
                    id="lab3"
                    value={labName}
                    onChange={(e) => setLabName(e.target.value)}
                  />
                  {/* to show error */}
                  {errLabName && labName.length === 0 ? (
                    <div id="errortext">Enter Lab Name</div>
                  ) : (
                    " "
                  )}
                </Col>
                <Col md={2} xs={12}>
                  <div id="lab13">
                    <label htmlFor="myfile">
                      Add logo
                      <IoIosAddCircle id="lab12" />
                      <input
                        type="file"
                        className="file"
                        id="myfile"
                        name="myfile"
                      />
                    </label>
                  </div>
                </Col>
              </Row>

              <Row id="lab17">
                <Col md={10} xs={12}>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name * "
                    id="lab3"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  {/* to show error */}
                  {errFullName && fullName.length === 0 ? (
                    <div id="errortext">Enter Full Name</div>
                  ) : (
                    " "
                  )}
                </Col>
              </Row>

              <Row id="lab17">
                <Col md={8} xs={12}>
                  <Form.Control
                    type="text"
                    placeholder="Years of Experience in General and Clinical Pathology* "
                    id="lab3"
                    value={exp}
                    onChange={(e) => setExp(e.target.value)}
                  />
                  {/* to show error */}
                  {errExp && exp.length === 0 ? (
                    <div id="errortext">Enter Experience in Years</div>
                  ) : (
                    " "
                  )}
                </Col>
                <Col md={2} xs={12}>
                    <Form.Select className="mb-3"
                      id="lab7"
                      value={specialization}
                      onChange={(e) => setSpecialization(e.target.value)}
                    >
                      <option value="specialization">Specialization</option>
                      <option value="junior">Junior</option>
                      <option value="senior">Senior</option>
                      <option value="assistant">Assistant</option>
                    </Form.Select>
                </Col>
              </Row>

              <Row id="lab17">
                <Col md={5}>
                  <Form.Control
                    type="text"
                    placeholder="Lab test timing, eg: 10.00AM - 7.00PM "
                    id="lab3"
                    value={testTiming}
                    onChange={(e) => setTestTiming(e.target.value)}
                  />
                </Col>
                <Col md={5}>
                    <Form.Select className="mb-3"
                      id="lab7"
                      value={labCapacity}
                      onChange={(e) => setLabCapacity(e.target.value)}
                    >
                      <option value="labCapacity">Lab Capacity </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </Form.Select>
                </Col>
              </Row>

              <Row id="lab17">
                <Col md={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Lab registration number provided by govt * "
                    id="lab3"
                    value={labRegNumber}
                    onChange={(e) => setLabRegNumber(e.target.value)}
                  />
                  {errLabRegNum && labRegNumber.length === 0 ? (
                    <div id="errortext">Enter Lab Registration Number</div>
                  ) : (
                    " "
                  )}
                </Col>
              </Row>

              <Row id="lab17">
                <Col md={10}>
                  <div id="lab6">
                    Upload your PAN card in PDF, JPG, Jpeg, PNG format under
                    (file size should be under 1mb){" "}
                  </div>
                </Col>
              </Row>
              <Row id="lab17">
                <Col md={10}>
                  <div>
                    <label id="lab14" htmlFor="myfile">
                      <IoIosAddCircle id="lab15" />
                      <input
                        type="file"
                        className="file"
                        id="myfile"
                        value={panCard}
                        onChange={(e) => setPanCard(e.target.value)}
                      />
                    </label>
                  </div>
                </Col>
              </Row>

              <Row id="lab17">
                <Col md={10}>
                  <Form.Group
                    className="mb-3"
                    // controlId="exampleForm.ControlTextarea1"
                    placeholder="Enter Different Facilities"
                  >
                    <Form.Control
                      // id="lab10"
                      as="textarea"
                      rows={3}
                      placeholder="Enter different Facilities"
                      id="lab3"
                      value={facilities}
                      onChange={(e) => setFacilities(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row id="lab17">
                <Col md={10}>
                  {/* <Form.Group className="mb-3"> */}
                    <Form.Check
                      id="lab6"
                      type="checkbox"
                      label="By ticking this box, you agree to the terms of service and that your parent/legal guardian has agreed to you participating in our programs. If you do not agree, or do not have parental/legal consent, then you may explore our programs here."
                    />
                  {/* </Form.Group> */}
                </Col>
              </Row>

              <Row id="lab17">
                <Col md={10} xs={10}>
                  <Button
                    variant="dark"
                    id="lab9"
                    type="submit"
                    onClick={submitBtn}
                  >
                    Register
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
