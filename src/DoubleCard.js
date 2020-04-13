import React, { Component } from "react";
import "./App.css";
import DoublePic from "./DoublePic/DoublePic";
import { Container, Row, Col } from "react-bootstrap";

class DoubleCard extends Component {
  picSelectedCb = (event) => {
    console.log(`called from ${event.target}`);
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

  createDoubleCard = () => {
    let rows = [];
    let cols = [];
    let cellIndex = 0;

    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
      cols = [];
      for (let colIndex = 0; colIndex < 2; colIndex++) {
        cols.push(
          <Col>
            <DoublePic
              doublePicClass="double-pic-class-big"
              picSelectedCb={this.picSelectedCb}
              id={cellIndex++}
            >
              {this.makeid(5)}
            </DoublePic>
          </Col>
        );
      }
      rows.push(<Row>{cols}</Row>);
    }

    return rows;
  };

  render() {
    console.log("calling render from DoubleCard");
    return <div>{this.createDoubleCard()}</div>;
  }
}

export default DoubleCard;
