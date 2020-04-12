import React, { Component } from "react";
import Player from "./Player";
import { Container, Row, Col } from "react-bootstrap";
import randomWords from "random-words";

class DoubleGame extends Component {
  constructor(props) {
    super(props);

    console.log("DoubleGame constructor props:" + JSON.stringify(props));
    this.state = {
      numOfPlayers: props.numOfPlayers,
    };
  }

  getPlayersTable = () => {
    let playersList = [];
    for (let index = 0; index < this.state.numOfPlayers; index++) {
        console.log(this.state.numOfPlayers);
      playersList.push(
        <Col>
          <Player name={randomWords(1)[0]} />
        </Col>
      );
    }
    return playersList;
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>{this.getPlayersTable()}</Row>
        </Container>
      </div>
    );
  }
}

export default DoubleGame;
