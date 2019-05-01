import React, { Component } from 'react';


export default class Child extends Component {
    render() {
        return (
            <div className="ChildDiv">
               <p>I like {this.props.text}</p>
            </div>
        );
    }
}
