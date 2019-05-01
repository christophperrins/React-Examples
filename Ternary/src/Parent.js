import React, { Component } from 'react';

export default class Parent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hide: true
        }
     }

    click = () => {
        this.setState({
            hide: !this.state.hide
        })
    }

    render() {
        return (
            <div className="ParentDiv">
             <button onClick={this.click}>Click Me</button>
             
             {/* Below is a ternary */}
             {/* this.state.hide will resolve to 'true' */}
             {/* the question mark is how we tell javascript it is a ternary */}
             {/* the left hand side of the colon is what will be returned if true */}
             {/* the right hand side of the colon is what will be returned if false */}
             {this.state.hide ? null : <p>Boo!</p> }
            </div>
        );
    }
}
