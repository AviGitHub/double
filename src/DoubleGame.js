import React, { Component } from 'react';
import Player  from "./Player";
import {Container, Row, Col}  from 'react-bootstrap';


class DoubleGame extends Component{
    
    constructor(props){
        super(props);
        // this.setState({
        //     numOfPlayers: props.numOfPlayers
        // });
        this.setState({
            numOfPlayers: 2
        });
    }

    getPlayersTable = () =>{
        let playersList = [];
        for (let index = 0; index < 2; index++) {
            playersList.push(
                <Col>
                    <Player />
                </Col>
            );
        }                                
        return playersList;
    }
    

    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        {this.getPlayersTable()}
                    </Row>
                </Container>        
            </div>
        )
    }
}

export default DoubleGame;