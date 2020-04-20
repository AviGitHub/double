import React, { Component } from "react";
import Player from "./Player";
import { Container, Row, Col, Image } from "react-bootstrap";
import randomWords from "random-words";
import Images from "./ImageLoader";
import DoubleCard from "./DoubleCard";

class DoubleGame extends Component {
  constructor(props) {
    super(props);
    this.PicSelectedHandler = this.PicSelectedHandler.bind(this);
    this.picSelected = { card: null, picId: null };
    this.state = {
      numOfPlayers: props.numOfPlayers,
      win: false,
    };
  }

  getPlayersTable = () => {
    let playersList = [];
    for (let index = 0; index < this.state.numOfPlayers; index++) {
      console.log(this.state.numOfPlayers);
      playersList.push(
        <Col key={index}>
          <Player name={randomWords(1)[0]} id={index} />
        </Col>
      );
    }
    return playersList;
  };

  getImagesForCards = () => {
    let tmpPicsArr = [...Images];

    let card1 = [];
    let card2 = [];

    for (let index = 0; index < 9; index++) {
      let itemIdx = Math.floor(Math.random() * tmpPicsArr.length);
      let removed = tmpPicsArr.splice(itemIdx, 1)[0];

      card1.push(removed);
    }

    for (let index = 0; index < 8; index++) {
      let itemIdx = Math.floor(Math.random() * tmpPicsArr.length);
      let removed = tmpPicsArr.splice(itemIdx, 1)[0];
      card2.push(removed);
    }
    let randomPicFromCard1 = card1[Math.floor(Math.random() * card1.length)];
    card2.push(randomPicFromCard1);

    if (card1.length !== 9 || card2.length !== 9) {
      console.error("getImagesForCards");
    }

    return { card1Pics: card1, card2Pics: card2 };
  };

  resetCardsSelection = () => {
    console.log("Reset cards selection");
  };

  PicSelectedHandler = (cardId, picId) => {
    console.log(`raisePicSelected: cardId: ${cardId}, picId: ${picId}`);
    if (this.picSelected.card === null) {
      this.picSelected.card = cardId;
      this.picSelected.picId = picId;
      return;
    } else if (this.picSelected.card === cardId) {
      this.picSelected.picId = picId;
      return;
    } else {
      if (this.picSelected.picId === picId) {
        console.log("WIN!!!!!!!!!!!!!!!!");
        this.setState({
          win: true,
        });
      } else {
        this.picSelected.card = null;
        this.picSelected.picId = null;
        this.resetCardsSelection();
      }
    }
  };

  PicDeSelectedHandler = (cardId, picId) => {
    console.log(`PicDeSelectedHandler: cardId: ${cardId}, picId: ${picId}`);
  };

  renderGame = () => {
    let cardsImages = this.getImagesForCards();
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <DoubleCard
                images={cardsImages.card1Pics}
                raisePicSelected={this.PicSelectedHandler}
                raisePicDeSelected={this.PicDeSelectedHandler}
                cardId={1}
              />
            </Col>
            <Col>
              <DoubleCard
                images={cardsImages.card2Pics}
                raisePicSelected={this.PicSelectedHandler}
                raisePicDeSelected={this.PicDeSelectedHandler}
                cardId={2}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  };

  renderWin = (
    <div>
      <Container>Win!!!</Container>
    </div>
  );

  render() {
    if (this.state.win) {
      return this.renderWin;
    } else {
      return this.renderGame();
    }
  }
}

export default DoubleGame;
