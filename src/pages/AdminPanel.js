import React, { useRef } from "react"
import { Container, Tabs, Tab, Button, Form, Row, Col } from "react-bootstrap"
// import { useAuth } from "../contexts/AuthContext"
import firebase from 'firebase/app'
// import { Link, useHistory } from "react-router-dom"
import 'firebase/firestore';
import "../css/AdminPanel.css";

export default function AdminPanel() {
    const awayScoreRef = useRef();
    const awayTeamRef = useRef();
    const homeScoreRef = useRef();
    const homeTeamRef = useRef();
    const dateRef = useRef();
    const matchSeasonRef = useRef();
    const teamNameRef = useRef();
    const teamTagRef = useRef();
    const teamSeasonRef = useRef();
    const formatRef = useRef();


    // const { currentUser } = useAuth()

    async function newMatch(e) {
        e.preventDefault()

        await firebase.firestore().collection('Matches').add({
            AwayScore: awayScoreRef.current.value,
            AwayTeam: awayTeamRef.current.value,
            Date: dateRef.current.value,
            HomeScore: homeScoreRef.current.value,
            HomeTeam: homeTeamRef.current.value,
            Season: matchSeasonRef.current.value,
            Foamt: formatRef.current.value
        })
            .then((docRef) => {
                console.log("Document writting with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            })
    }

    async function newTeam(e) {
        e.preventDefault()

        await firebase.firestore().collection('Teams').add({
            Name: teamNameRef.current.value,
            Tag: teamTagRef.current.value,
            Season: teamSeasonRef.current.value
        })
            .then((docRef) => {
                console.log("Document writting with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            })
    }

    return (
        <Container style={{ minHeight: "100vh" }}>
            <Container className="matchSection">
                <Tabs defaultActiveKey="add" id="matchTab">
                    <Tab eventKey="add" title="Tilføj ny kamp">
                        <Form onSubmit={newMatch}>
                            <Form.Group id="away">
                                <Row>
                                    <Col>
                                        <Form.Label>Ude hold</Form.Label>
                                        <Form.Control type="text" ref={awayTeamRef} required />
                                    </Col>
                                    <Col>
                                        <Form.Label>Score</Form.Label>
                                        <Form.Control ref={awayScoreRef} required />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group id="home">
                                <Row>
                                    <Col>
                                        <Form.Label>Hjemme hold</Form.Label>
                                        <Form.Control type="text" ref={homeTeamRef} required />
                                    </Col>
                                    <Col>
                                        <Form.Label>Score</Form.Label>
                                        <Form.Control ref={homeScoreRef} required />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group id="technicals">
                                <Row>
                                    <Col>
                                        <Form.Label>Dato</Form.Label>
                                        <Form.Control ref={dateRef} required></Form.Control>
                                    </Col>
                                    <Col>
                                        <Form.Label>Sæson</Form.Label>
                                        <Form.Control ref={matchSeasonRef} required></Form.Control>
                                    </Col>
                                    <Col>
                                        <Form.Label>Format</Form.Label>
                                        <Form.Control ref={formatRef} required></Form.Control>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Button type="submit" bg="dark" variant="dark">Tilføj</Button>
                        </Form>
                    </Tab>
                    <Tab eventKey="update" title="Opdater en kamp">
                        <h2>Opdater en kamp</h2>
                    </Tab>
                    <Tab eventKey="remove" title="Fjern en kamp">
                        <h2>Fjern en kamp</h2>
                    </Tab>
                </Tabs>
            </Container>
            <Container className="teamSection">
                <Tabs defaultActiveKey="add" id="teamTab">
                    <Tab eventKey="add" title="Tilføj nyt hold">
                        <Form onSubmit={newTeam}>
                            <Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Label>Hold navn</Form.Label>
                                        <Form.Control ref={teamNameRef} required></Form.Control>
                                    </Col>
                                    <Col>
                                        <Form.Label>Hold tag</Form.Label>
                                        <Form.Control ref={teamTagRef} required></Form.Control>
                                    </Col>
                                    <Col>
                                        <Form.Label>Sæson</Form.Label>
                                        <Form.Control ref={teamSeasonRef} required></Form.Control>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Button type="submit" bg="dark" variant="dark">Tilføj</Button>
                        </Form>
                    </Tab>
                    <Tab eventKey="update" title="Opdater et hold">
                        <h2>Opdater et hold</h2>
                    </Tab>
                    <Tab eventKey="remove" title="Fjern et hold">
                        <h2>Fjern et hold</h2>
                    </Tab>
                </Tabs>
            </Container>
            <Container className="seasonSection">
                <Tabs defaultActiveKey="add" id="seasonTab">
                    <Tab eventKey="add" title="Tilføj ny sæson">
                        <h2>Tilføj ny sæson</h2>
                    </Tab>
                    <Tab eventKey="update" title="Opdater en sæson">
                        <h2>Opdater en sæson</h2>
                    </Tab>
                    <Tab eventKey="remove" title="Fjern en sæson">
                        <h2>Fjern en sæson</h2>
                    </Tab>
                </Tabs>
            </Container>
        </Container >
    )
}