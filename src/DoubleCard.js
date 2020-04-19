import React, { Component } from "react";
import "./App.css";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./DoubleCard.css";

class DoubleCard extends Component {
  constructor(props) {
    super(props);
    this.picSelectedCb = this.picSelectedCb.bind(this);
    this.raisePicSelected = props.raisePicSelected;
    this.lastImageClicked = null;      
    
    this.state = {
      picSelected: false,
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

    if (this.lastImageClicked == null) {
      this.lastImageClickedOriginalStyle = pic.className;
      this.lastImageClicked = pic;
      pic.className += " ImageClicked";
      return;
    }

    if (this.lastImageClicked === pic) {
      pic.className = this.lastImageClickedOriginalStyle;
      this.lastImageClicked = null;
      this.lastImageClickedOriginalStyle = null;
      return;
    } else {
      this.lastImageClicked.className = this.lastImageClickedOriginalStyle;
      this.lastImageClicked = pic;
      this.lastImageClickedOriginalStyle = pic.className;
      pic.className += " ImageClicked";
    }
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
        let picStyle = this.getRandomPicStyle();
        cols.push(
          <Col key={colIndex}>
            <Image
              src={this.props.images[cellIndex].pic}
              alt={"image_" + this.props.images[cellIndex].picId}
              onClick={this.onDoublePicClickHandler}
              className={picStyle}
            />
          </Col>
        );
        cellIndex++;
      }
      rows.push(<Row key={rowIndex}>{cols}</Row>);
    }
    rows.push(
      <Row key={5}>
        <Image
          src={this.props.images[cellIndex].pic}
          alt={"image_" + this.props.images[cellIndex].picId}
          onClick={this.onDoublePicClickHandler}
          className={this.getRandomPicStyle() + " LastImage"}
        />
      </Row>
    );

    return rows;
  };

  render() {
    
    return (
      <div>
        <Container className="CardContainer">
          {this.createDoubleCard()}
        </Container>
      </div>
    );
  }
}

export default DoubleCard;
