import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firestore';
import "../css/Dashboard.css";

export default function Dashboard() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 900);
  const [matches, setMatches] = useState([]);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 900);
  };

  useEffect(() => {
    let unsubscribe =
      firebase.firestore().collection('Matches')
        .onSnapshot(snapshot => {
          let newMatches = snapshot.docChanges()
          newMatches.forEach(doc => {
            setMatches(prevMatches => [...prevMatches, doc.doc.data()])
          })
        })
    return () => unsubscribe();
  }, [])

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      <div className="bg-image">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-right">
              <h1 className="headerText">This is <br /> <b>Hypers League</b></h1>
              <Button variant="dark" size="lg">
                Tilmeld jer nu
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Container className="mainContent">
        <Row>
          <Col>
            <Container className="tableContent">
              {isDesktop ? (
                <Table responsive table-layout="fixed">
                  <thead>
                    <tr>
                      <th className="tableHeader" colSpan="5">Kommende Kampe</th>
                    </tr>
                  </thead>
                  <tbody>
                    {matches.map(v => {
                      return (
                        <tr key={v.Id}>
                          <td>{v.Date}</td>
                          <td>{v.AwayTeam}</td>
                          <td>vs.</td>
                          <td>{v.HomeTeam}</td>
                          <td>{v.Format}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
              ) : (
                <Table responsive table-layout="fixed" size="sm">
                  <thead>
                    <tr>
                      <th className="tableHeader" colSpan="5">Kommende Kampe</th>
                    </tr>
                  </thead>
                  <tbody>
                    {matches.map(v => {
                      return (
                        <tr key={v.Id}>
                          <td>{v.Date}</td>
                          <td>{v.AwayTeam}</td>
                          <td>vs.</td>
                          <td>{v.HomeTeam}</td>
                          <td>{v.Format}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
              )}
            </Container>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="dashboard-standings">
              <h5>Tjek den nuværende stilling for ligaen { }
                <a href="/standings">her</a>
              </h5>
            </div>
          </Col>
        </Row>
      </Container >
    </>
  );
}
