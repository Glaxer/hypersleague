import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firestore';
import "../css/Standings.css";

export default function Standings() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 900);
  const [teams, setTeams] = useState([]);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 900);
  };

  function sortTeams(map) {
    map.sort((a, b) => b.Points - a.Points);
    return map;
  }

  useEffect(() => {
    let unsubscribe =
      firebase.firestore().collection('Teams')
        .onSnapshot(snapshot => {
          let newTeams = snapshot.docChanges()
          newTeams.forEach(doc => {
            setTeams(prevTeams => [...prevTeams, doc.doc.data()])
          })
        });
    return () => unsubscribe();
  }, [])

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <Container style={{ minHeight: "100vh" }}>
      <div className="wrapper">
        <h1 className="header">Stilling</h1>
        {isDesktop ? (
          <Table responsive table-layout="fixed">
            <thead className="tableHeader">
              <tr>
                <th colSpan="1">Hold</th>
                <th>K</th>
                <th>V</th>
                <th>T</th>
                <th>U</th>
                <th>D</th>
                <th>P</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              {sortTeams(teams).map(e => {
                return (
                  <tr key={e.Id}>
                    <td>{e.Name}</td>
                    <td>{e.Games}</td>
                    <td>{e.Wins}</td>
                    <td>{e.Losses}</td>
                    <td>{e.Draws}</td>
                    <td>{e.Difference}</td>
                    <td>{e.Points}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <Table responsive table-layout="fixed" size="sm">
            <thead className="tableHeader">
              <tr>
                <th colSpan="1">Hold</th>
                <th>K</th>
                <th>V</th>
                <th>T</th>
                <th>U</th>
                <th>D</th>
                <th>P</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              {sortTeams(teams).map(e => {
                return (
                  <tr key={e.Id}>
                    <td>{e.Name}</td>
                    <td>{e.Games}</td>
                    <td>{e.Wins}</td>
                    <td>{e.Losses}</td>
                    <td>{e.Draws}</td>
                    <td>{e.Difference}</td>
                    <td>{e.Points}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </div>
    </Container>
  );
}
