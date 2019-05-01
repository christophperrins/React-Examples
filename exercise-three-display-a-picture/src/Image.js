import React, { Component } from 'react';
import './Image.css';

export default class Image extends Component {
    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: this.props.color || "#aaa"
        }
    }


    eventHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="image" style={{background: this.state.backgroundColor }} >
            
                <img onClick={this.props.eventHandler} name="display" a="hm" value={this.props.source} className="animal" alt={"Animal"} src={this.props.source} />
                <input name="backgroundColor" type="color" onChange={this.eventHandler} />
            </div>
        );
    }
}


