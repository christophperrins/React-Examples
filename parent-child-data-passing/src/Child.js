import React, { Component } from 'react';


export default class Child extends Component {
    render() {
        return (
            <div className="ChildDiv">
                {/* onchange will call the setHeading FUNCTION from the parent, changing the parents state */}
                <input type="text" onChange={this.props.setHeadingFunction}/> 

                {/* displays footer */}
                <p> This value came from Parent, but displayed in child!: {this.props.footerText} </p>
            </div>
        );
    }
}
