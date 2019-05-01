import React, { Component } from 'react';
import Child from './Child';


export default class Parent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            likes: ["Cows", "Milk", "Cheese"]
        }
    }

    addItem = () => {
        let likes = this.state.likes;
        likes.push("Cheese");
        this.setState({
            likes
        })
    }

    render() {
        return (
            <div className="ParentDiv">
            <button onClick={this.addItem}>Add more Cheese</button>
                {this.state.likes.map((like, i) => <Child key={"child"+i} text={like}/>)}
            </div>
        );
    }
}
