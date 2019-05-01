import React, { Component } from 'react';

export default class Parent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonText: "Stop",
            count: 0
        }
     }

    componentDidMount = () => {
        //COMMENT OUT THe FOLLOWING LINE AND UNCOMMENT THE LINE BELOW
        // ------------
        this.startCount();
        // ------------
    }

    startCount = () => {
        // this method will continuously call the function every x milliseconds
        this.count = setInterval( () => {
            this.setState({
                counting: true,
                count: this.state.count+1,
                buttonText: "Stop"
            })
        }, 100);
    }

    stopCount = () => {
        clearInterval(this.count)
        this.setState({
            buttonText: "Start"
        })
    }

    switchButton = () => {
        if(this.state.buttonText === "Stop") {
            this.stopCount();
        }
        else {
            this.startCount();
        }
    }

    render() {
        // UNCOMMENT THE FOLLOWING LINE AND COMMENT OUT THE LINE ABOVE TO SEE WHAT HAPPENS

        // ----------------
        // this.startCount();
        // ----------------

        // Explanation:
        // this.startCount() would be called everytime there is a state change, meaning that another method would be called every 100ms adding one.
        // this.startCount() would then be called again with every state change, so now you have three methods running every 100ms adding one.
        // this.stateCount() would then be called again......

        return (
            <div className="ParentDiv">
                <button onClick={this.switchButton}>{this.state.buttonText}</button>              
                <p>{this.state.count}</p>
            </div>
        );
    }
}
