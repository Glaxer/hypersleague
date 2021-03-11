import React from "react";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import "../css/Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <div class="bg-image">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12 text-right">
              <h1 className="headerText">This is <br /> <b>Hypers League</b></h1>
              <Button variant="dark" size="lg">
                Tilmeld jer nu
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <Row>
          <Col>
            <Container>
              <Table responsive table-layout="fixed">
                <thead>
                  <tr>
                    <th colSpan="5">Kommende Kampe</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tidspunkt</td>
                    <td>Team 1</td>
                    <td>vs.</td>
                    <td>Team 2</td>
                    <td>Format</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Tidspunkt</td>
                    <td>Team 1</td>
                    <td>vs.</td>
                    <td>Team 2</td>
                    <td>Format</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Tidspunkt</td>
                    <td>Team 1</td>
                    <td>vs.</td>
                    <td>Team 2</td>
                    <td>Format</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Tidspunkt</td>
                    <td>Team 1</td>
                    <td>vs.</td>
                    <td>Team 2</td>
                    <td>Format</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Tidspunkt</td>
                    <td>Team 1</td>
                    <td>vs.</td>
                    <td>Team 2</td>
                    <td>Format</td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </Col>
          <Col>
            <div className="dashboard-standings">
              <h4>Tjek den nuværende stilling for ligaen</h4>
              <Button href="/standings" variant="dark">
                Stilling
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
