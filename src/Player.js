import React, { Component } from "react";
import DoubleCard from "./DoubleCard";
import { Container, Row, Col } from "react-bootstrap";

class PlayerInfo extends Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.cardCount = 10;
  }

  render() {
    return (
      <div>
        <Col>{this.name}</Col>
        <Col>{this.cardsCount}</Col>
      </div>
    );
  }
}

class Player extends Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.name = props.name;
    this.cardCount = 10;
  }

  get CardCount() {
    return this.cardCount;
  }
  set CardCount(value) {
    this.cardCount = value;
  }

  render() {
    return (
      <div>
        <Container fluid>
          <div className="center">
            <Row>
              <PlayerInfo name={this.name} cardsCount={this.cardCount} />
            </Row>
            <Row>
              <DoubleCard></DoubleCard>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Player;
