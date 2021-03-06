import React from "react";
import { Table, Container } from "react-bootstrap";

export default function UpcomingMatches() {
  return (
    <Container style={{ minHeight: "100vh" }}>
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
    </Container>
  );
}
