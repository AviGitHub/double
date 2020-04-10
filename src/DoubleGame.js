import React, { Component } from 'react';
import DoubleCard from './DoubleCard';

class DoubleGame extends Component{
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