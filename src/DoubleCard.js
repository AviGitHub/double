import React, { Component } from 'react'
import './App.css';
import DoublePic from "./DoublePic/DoublePic";

class DoubleCard extends Component{

    render(){
        return(
            <div>
                <h1>This is a card</h1>
                <DoublePic doublePicClass="double-pic-class-big">a</DoublePic>
                <DoublePic doublePicClass="double-pic-class-small">b</DoublePic>
            </div>
            );        
    }
}

export default DoubleCard;