import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import "../css/UpcomingMatches.css";

export default function UpcomingMatches() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 900);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 900);
  };

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
        ) : (
          <Table responsive table-layout="fixed" size="sm">
            <thead>
              <tr>
                <th colSpan="5">Uge</th>
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
        )}
      </div>
    </Container>
  );
}
