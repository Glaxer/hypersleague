import React from "react";
import { Container } from "react-bootstrap";
import "../css/Rules.css";

export default function Rules() {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <div className="wrapper">
        <h1 className="header">Regler </h1>
        <p className="text">Vi forbeholder os retten til at tilføje, ændre og/eller fjerne regler</p>
        <h3 className="heading">Tilmelding: </h3>
        <p className="text">
          - Tilmeldingerne starter [dato] <br />
          - Sidste tilmeldingsfrist er [dato]
        </p>
        <h3 className="heading">Turnerings information: </h3>
        <p className="text">
          - Turneringen vil blive spillet online <br />
          - Turneringen starter kl. <br />
          - Husk check-in <br />
          - Alle kampe bliver spillet i en single
          elimination bracket Bo5 (bedst ud af 5)
        </p>
        <h3 className="heading">Support/spørgsmål: </h3>
        <p className="text">
          - Henvend dig inde på vores {" "}
          <a href="https://discord.gg/hnefTTJ">Discord</a>
        </p>
        <h3 className="heading">Krav for at spille: </h3>
        <p className="text">
          - Hold skal have mindst 3 aktive spillere <br />
          - Alle spillere skal være fra Danmark <br />
          - Alle platforme er tilladt i turneringen <br />
          - Alle skal have Cross-Platform slået til inden turneringen starter <br />
          - Det er tilladt at have en sub/standin
        </p>
        <h3 className="heading">Game Settings: </h3>
        <p className="text">
          - Game mode: Soccar <br />
          - Default Arena: DFH Stadium <br />
          - Team size: 3v3 <br />
          - Bot Difficulty: No Bots <br />
          - Mutators: None <br />
          - Match Time: 5 Minutes <br />
          - Joinable By: Name/Password <br />
        </p>
        <h3 className="heading">Settings: </h3>
        <p className="text">
          - Kampe bliver streamet på vores {" "}
          <a href="https://Twitch.tv/HypersLeague">Twitch kanal</a> <br />
          - Det er tilladt at streame sine egne kampe, såfremt kampene ikke
          bliver streamet af os. <br />
        </p>
      </div>
    </Container>
  );
}
