import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/About.css";

export default function About() {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <div className="wrapper">
        <h1 className="header">Om os </h1>
        <p className="text">
          Hypers League er en dansk Rocket League liga, som giver danske
          spillere mulighed for at spille imod hinanden og kæmpe om
          [præmiepulje/titel]. Hypers League sigter efter at blive den nationale
          Rocket League liga i Danmark. Ligaen blev stiftet af Lasse “Fuzz”
          Geugjes og Caroline “Bascounter” Stokholm Caspersen, som er 2 ildsjæle
          inden for dansk Rocket League. De så manglen på en større dansk Rocket
          League liga, ligesom vi ser hos flere af vores nordiske nabolande, og
          tog springet for at skabe det der blev til Hypers League.
        </p>

        <Container className="info-text">

          <Row>
            <Col className="col-left">
              <div className="generic-about-Fuzz"></div>
              <p className="text">
                Lasse “Fuzz” Geugjes har +4 års erfaring inden for
                esportverdenen både fra hans arbejde hos Copenhagen Flames med
                manager, turnerings admin, og caster, samt caster og admin inden
                for flere danske Rocket League cups bl.a. Yousee Esportligaen,
                OACES og Nordic Championship i Rocket League.
              </p>
            </Col>
            <Col className="col-right">
              <div className="generic-about-Bas"></div>
              <p className="text">
                Caroline “Bascounter” Stokholm Caspersen har +2 års erfaring
                inden for esportverdenen bl.a. fra hendes tid som Streaming &
                Casting afdelingsleder i AaB esport og senere hen som Rocket
                League afdelingsleder, hvor hun byggede afdelingerne op fra
                bunden. Samtidigt er hun admin på flere af de danske turneringer
                heriblandt OACES, Yousee Esportligaen og har castet et par
                turneringer i både Rocket League, CS:GO og LoL.
              </p>
            </Col>
          </Row>

        </Container>
      </div>
    </Container>
  );
}
