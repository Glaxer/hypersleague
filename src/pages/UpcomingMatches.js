import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firestore';
import "../css/UpcomingMatches.css";

export default function UpcomingMatches() {
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
    <Container style={{ minHeight: "100vh" }}>
      <div className="wrapper">
        <h1 className="header">Kampe</h1>
        {isDesktop ? (
          <Table responsive table-layout="fixed" size="">
            <thead>
              <tr>
                <th colSpan="5">Uge</th>
              </tr>
            </thead>
            <tbody>
              {matches.map(e => {
                return (
                  <tr key={e.Id}>
                    <td>{e.Date}</td>
                    <td>{e.AwayTeam}</td>
                    <td>vs.</td>
                    <td>{e.HomeTeam}</td>
                    <td>{e.Format}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        ) : (
          <Table responsive table-layout="fixed" size="sm">
            <thead>
              <tr>
                <th colSpan="5">Uge</th>
              </tr>
            </thead>
            <tbody>
              {matches.map(e => {
                return (
                  <tr key={e.Id}>
                    <td>{e.Date}</td>
                    <td>{e.AwayTeam}</td>
                    <td>vs.</td>
                    <td>{e.HomeTeam}</td>
                    <td>{e.Format}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        )}
      </div>
    </Container>
  );
}
