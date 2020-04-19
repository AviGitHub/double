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
    this.state = {
      numOfPlayers: props.numOfPlayers,
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

  // render() {
  //   return (
  //     <div>
  //       {/* {this.renderImages()} */}
  //       <Container fluid>
  //         <Row>{this.getPlayersTable()}</Row>
  //       </Container>
  //     </div>
  //   );
  // }

  PicSelectedHandler = (cardId, picId) => {
    console.log(`raisePicSelected: cardId: ${cardId}, picId: ${picId}`);
  };

  PicDeSelectedHandler = (cardId, picId) => {
    console.log(`PicDeSelectedHandler: cardId: ${cardId}, picId: ${picId}`);
  };

  render() {
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
              />
            </Col>
            <Col>
              <DoubleCard
                images={cardsImages.card2Pics}
                raisePicSelected={this.PicSelectedHandler}
                raisePicDeSelected={this.PicDeSelectedHandler}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DoubleGame;
