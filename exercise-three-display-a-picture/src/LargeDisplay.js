import React, { Component } from 'react';
import './LargeImage.css';

export default class LargeDisplay extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }


    render() {
        return (
            <div className="largeImage">
                <img src={this.props.display} alt="big animal"/>
            </div>
        );
    }
}


