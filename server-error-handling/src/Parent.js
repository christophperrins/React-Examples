import React, { Component } from 'react';

export default class Parent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            superHeroText: undefined,
            showErrorMessage: false
        }
     }

    componentDidMount = () => {
        let request = new XMLHttpRequest();
        // set POST to GET for success
        request.open("POST", "https://gist.githubusercontent.com/mariodev12/a923f2b651a005ca3ca7f851141efcbc/raw/39b06a32e4a58fc1fe63c7478a97edccd21138f1/superheroes.json");
        request.responseType = "json";
        request.onload = () => {
            if (request.status === 200) {
                this.setState({
                    superHeroText: request.response
                });
            }
            else {
                this.setState({
                    showErrorMessage: true
                })
            }
        }
        request.send();
    }

    display = () => {
        if (this.state.showErrorMessage) {
            return "Error: Could not retrieve information"
        }
        else {
            return JSON.stringify(this.state.superHeroText)
        }
    }
  

    render() {
        return (
            <div className="ParentDiv">
             <p>{this.display()}</p>
            </div>
        );
    }
}
