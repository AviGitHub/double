import React, { Component } from "react";
import "../App.css";
import { Button } from "react-bootstrap";

class DoublePic extends Component {
  constructor(props) {
    super(props);

    this.picId = props.id;
    this.picSelectedCb = props.picSelectedCb;
    this.doublePicClass = props.doublePicClass;
    this.symbol = props.children;
  }

  render() {
    return (
      <div className={this.doublePicClass}>
        <Button onClick={this.picSelectedCb(this.picId)}>{this.symbol}</Button>
      </div>
    );
  }
}

export default DoublePic;
