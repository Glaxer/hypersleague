import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";

export default function Standings() {
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
      {isDesktop ? (
        <Table responsive table-layout="fixed">
          <thead>
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
          <tbody>
            <tr>
              <td>Hold 1</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Hold 2</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Hold 3</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Hold 4</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Hold 5</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Hold 6</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Hold 7</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Hold 8</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <Table responsive table-layout="fixed" size="sm">
          <thead>
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
          <tbody>
            <tr>
              <td>Hold 1</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Hold 2</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Hold 3</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Hold 4</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Hold 5</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Hold 6</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Hold 7</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Hold 8</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </Table>
      )}
    </Container>
  );
}
