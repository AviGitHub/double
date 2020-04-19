import React, { Component } from "react";
import "./App.css";
import { Row, Col, Image } from "react-bootstrap";
import DoubleImages from "./ImageLoader";
import "./DoubleCard.css";

class DoubleCard extends Component {
  constructor(props) {
    super(props);
    this.picSelectedCb = this.picSelectedCb.bind(this);
    this.raisePicSelected = props.raisePicSelected;
    this.state = {
      picSelected: false,
      selectedImages: {},
    };
  }

  picSelectedCb = (picId, picSymbol) => {
    console.log(`called from ${picId}`);
    this.raisePicSelected(picSymbol);
  };

  makeid = (length) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  onDoublePicClickHandler = (event) => {
    let pic = event.target;
    console.log(`clicked from ${pic.alt}`);
  };

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  getRandomPicStyle = () => {
    let styles = ["DoublePicSmall", "DoublePicMedium", "DoublePicLarge"];
    return styles[this.getRandomInt(styles.length)];
  };

  createDoubleCard = () => {
    let rows = [];
    let cols = [];
    let cellIndex = 0;

    for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
      cols = [];
      for (let colIndex = 0; colIndex < 2; colIndex++) {
        cols.push(
          <Col key={colIndex}>
            <Image
              src={DoubleImages[cellIndex].pic}
              alt={"image_" + DoubleImages[cellIndex].picId}
              onClick={this.onDoublePicClickHandler}
              className={this.getRandomPicStyle()}
            />
          </Col>
        );
        cellIndex++;
      }
      rows.push(<Row key={rowIndex}>{cols}</Row>);
    }

    return rows;
  };

  render() {
    console.log("calling render from DoubleCard");
    return <div>{this.createDoubleCard()}</div>;
  }
}

export default DoubleCard;
