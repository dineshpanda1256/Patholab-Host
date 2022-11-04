import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import Header from "../../components/Header/Header";
import "./Managetest.css";
import {TbEdit} from "react-icons/tb";
import ManagetestEditModal from "../ManagetestEditModal/ManagetestEditModal";
import { apicaller } from "../../utils/api";
export default function Managetest() {
  const [editt, setEditt] = useState(false);
  const [mtest, setMtest] = useState([]);
  useEffect(() => {
    getMtest();
  }, []);

  const getMtest = () => {
    apicaller("all-reports/634e3c4bfc2b760247d48d5b", null, "get", null)
      .then((res) => {
        setMtest(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
    }

  return (
    <>
      {/* <Header /> */}
      <Container style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <Row>
          <Col id="mt1">
            <div id="mt2">Recent Tests Done</div>
          </Col>
        </Row>
        <Row>
          <Col md={6} xs={12}>
            <label htmlFor="datepicker" id="managetest_02">
              Select Date :{" "}
            </label>
            <input type="date" id="managetest_01" name="selecdate" />
          </Col>
          <Col md={0} xs={0}></Col>
          {/* <Col md={2} xs={4} id="managetest_03">
            History
          </Col> */}
        </Row>
        <Container id="managetest_tablemain">
          <Table
            striped
            bordered
            hover
            style={{ marginTop: "2rem", border: "0px" }}
          >
            <thead id="managetest_thead">
              <tr style={{ border: "none" }}>
                <th style={{ border: "none" }}>Sl.</th>
                <th>Name</th>
                <th>Company name</th>
                <th>User type</th>
                <th>Test type</th>
                <th>Date</th>
                <th>Timing</th>
                <th>Current Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {mtest.map((item, i) => (
              <tr key={i}>
                <td>{i+1}</td>
                <td>{item.first_name}</td>
                <td>Codekart</td>
                <td>{item.user_type}</td>
                <td>{item.test_name}</td>
                <td>{(new Date(item.createdAt)).toLocaleDateString()}</td>
                {/* <td>{(new Date(item.createdAt)).format("dd.mm.yyyy hh:MM:ss")}</td> */}
                <td>{item.createdAt}</td>
                <td id="managetest_send">{item.status}</td>
                <td id="managetest_sendd" onClick={() => setEditt(true)}> Edit <TbEdit /></td>
              </tr>
              ))}
              {/* <tr>
                <td>1</td>
                <td>Bhavani Khuntia</td>
                <td>Codekart</td>
                <td>Organizatioon</td>
                <td> Urine Test</td>
                <td>02/11/2022</td>
                <td> 9.00pm</td>
                <td id="managetest_send">order pending</td>
                <td id="managetest_sendd" onClick={() => setEditt(true)}> Edit <TbEdit /></td>

              </tr>
              <tr>
                <td>1</td>
                <td>Bhavani Khuntia</td>
                <td>Codekart</td>
                <td>user</td>
                <td> Urine Test</td>
                <td>02/11/2022</td>
                <td> 9.00pm</td>
                <td id="managetest_send"> Order Confirmed</td>
                <td id="managetest_sendd" onClick={() => setEditt(true)}> Edit <TbEdit /></td>

              </tr>
              <tr>
                <td>1</td>
                <td>Bhavani Khuntia</td>
                <td>Codekart</td>
                <td>organization</td>
                <td> Urine Test</td>
                <td>02/11/2022</td>
                <td> 9.00pm</td>
                <td id="managetest_send"> Order pending</td>
                <td id="managetest_sendd" onClick={() => setEditt(true)}> Edit <TbEdit /></td>

              </tr>
              <tr>
                <td>1</td>
                <td>Bhavani Khuntia</td>
                <td>Codekart</td>
                <td>user</td>
                <td> Urine Test</td>
                <td>02/11/2022</td>
                <td> 9.00pm</td>
                <td id="managetest_send"> Order Confirmed</td>
                <td id="managetest_sendd" onClick={() => setEditt(true)}> Edit <TbEdit /></td>

              </tr>
              <tr>
                <td>1</td>
                <td>Bhavani Khuntia</td>
                <td>Codekart</td>
                <td>organization</td>
                <td> Urine Test</td>
                <td>02/11/2022</td>
                <td> 9.00pm</td>
                <td id="managetest_send"> Order pending</td>
                <td id="managetest_sendd" onClick={() => setEditt(true)}> Edit <TbEdit /></td>

              </tr>
              <tr>
                <td>1</td>
                <td>Bhavani Khuntia</td>
                <td>Codekart</td>
                <td>user</td>
                <td> Urine Test</td>
                <td>02/11/2022</td>
                <td> 9.00pm</td>
                <td id="managetest_send"> Order Confirmed</td>
                <td id="managetest_sendd" onClick={() => setEditt(true)}> Edit <TbEdit /></td>
              </tr> */}
              <ManagetestEditModal show={editt} onHide={() => setEditt(false)}/>
            </tbody>
          </Table>
        </Container>
      </Container>
    </>
  );
}