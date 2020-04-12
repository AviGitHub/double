import React, { Component } from 'react'
import './App.css';
import DoublePic from "./DoublePic/DoublePic";
import {Container, Row, Col}  from 'react-bootstrap';

class DoubleCard extends Component{

    render(){
        return(
            <div>
                <Container fluid>
                    <Row>
                        <Col><DoublePic doublePicClass="double-pic-class-big">a</DoublePic></Col>
                        <Col><DoublePic doublePicClass="double-pic-class-small">b</DoublePic></Col>
                    </Row>
                    <Row>
                        <Col><DoublePic doublePicClass="double-pic-class-big">a</DoublePic></Col>
                        <Col><DoublePic doublePicClass="double-pic-class-small">b</DoublePic></Col>
                    </Row>
                    <Row>
                        <Col><DoublePic doublePicClass="double-pic-class-big">a</DoublePic></Col>
                        <Col><DoublePic doublePicClass="double-pic-class-small">b</DoublePic></Col>
                    </Row>
                </Container>                
            </div>
            );        
    }
}

export default DoubleCard;