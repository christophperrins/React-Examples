import React, { Component } from 'react';
import Child from './Child';


export default class Parent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            heading: "",
            footer: ""
        }

        this.value = "Hi there I came from Parent"
    }

    setHeading = (e) => {
       let text = e.target.value;
        this.setState({
            heading : text
        })
    }

    setFooter = (e) => {
        let text = e.target.value;
        this.setState({
            footer: text
        })
    }

    render() {
        return (
            <div className="ParentDiv">
                {/* input will assign a value to this.state.footer This VALUE gets passed to child */}
                <input type="text" onChange={this.setFooter}/>

                {/* Displays heading */}
                <h1>This value came from child, but displayed in Parent:{this.state.heading}</h1>
                
                {/* Call Child component. footer VALUE is passed. setHeading FUNCTION is also passed */}
                <Child footerText={this.state.footer} setHeadingFunction={this.setHeading}/>
            </div>
        );
    }
}
