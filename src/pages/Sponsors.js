import React from "react";
import { Container } from "react-bootstrap";

export default function Sponsors() {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <div className="wrapper">
        <h1 className="header">Sponsorer </h1>
        <p className="text">
          Hvis du/I er interesseret i at sponsorere ligaen, så kontakt enten{" "}
          <a href="https://twitter.com/FuzzRL">Fuzz</a> eller{" "}
          <a href="https://twitter.com/Bascounter">Bascounter</a>
        </p>
      </div>
    </Container>
  );
}
