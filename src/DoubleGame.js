import React, { Component } from 'react';
import DoubleCard from './DoubleCard';
import { Player } from "./Player";


class DoubleGame extends Component{
    
    constructor(props){
        super(props);
        this.setState({
            numOfPlayers: props.numOfPlayers
        });
    }
    

    render() {
        return (
            <div>
                <DoubleCard />
                <DoubleCard />                
            </div>
        )
    }
}

export default DoubleGame;