import React, { Component } from "react";
import "./App.css";
import DoublePic from "./DoublePic/DoublePic";
import { Container, Row, Col } from "react-bootstrap";

class DoubleCard extends Component {
  picSelectedCb = (id) => {
    console.log(`called from ${id}`);
  };
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <DoublePic
                doublePicClass="double-pic-class-big"
                picSelectedCb={this.picSelectedCb}
                id={1}
              >
                a
              </DoublePic>
            </Col>
            <Col>
              <DoublePic
                doublePicClass="double-pic-class-big"
                picSelectedCb={this.picSelectedCb}
                id={1}
              >
                a
              </DoublePic>
            </Col>
          </Row>
          <Row>
            <Col>
              <DoublePic
                doublePicClass="double-pic-class-big"
                picSelectedCb={this.picSelectedCb}
                id={1}
              >
                a
              </DoublePic>
            </Col>
            <Col>
              <DoublePic
                doublePicClass="double-pic-class-big"
                picSelectedCb={this.picSelectedCb}
                id={1}
              >
                a
              </DoublePic>
            </Col>{" "}
          </Row>
          <Row>
            <Col>
              <DoublePic
                doublePicClass="double-pic-class-big"
                picSelectedCb={this.picSelectedCb}
                id={1}
              >
                a
              </DoublePic>
            </Col>
            <Col>
              <DoublePic
                doublePicClass="double-pic-class-big"
                picSelectedCb={this.picSelectedCb}
                id={1}
              >
                a
              </DoublePic>
              fg
            </Col>{" "}
          </Row>
        </Container>
      </div>
    );
  }
}

export default DoubleCard;
