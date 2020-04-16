import React, { Component } from "react";
import "../App.css";
import { Button } from "react-bootstrap";

class DoublePic extends Component {
  constructor(props) {
    super(props);

    this.picId = props.picId;
    this.doublePicClass = props.doublePicClass;
    this.symbol = props.children;
    this.picSelectedCb = props.picSelectedCb;
  }

  onClickHandler = (e) => {
    e.preventDefault();
    this.picSelectedCb(this.picId, this.symbol);
  };

  render() {
    return (
      <div className={this.doublePicClass}>
        <Button onClick={this.onClickHandler}>{this.symbol}</Button>
      </div>
    );
  }
}

export default DoublePic;