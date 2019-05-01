import React, { Component } from 'react';

export default class Parent extends Component {
    submit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handle = (e) => {
        if (e.target.value === "") {
            let state = this.state;
            delete state[e.target.name];
            this.setState(state);
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }


    render() {

        return (
            <div className="ParentDiv">
            Start from name, press enter each time too go to the next box needed.
                <form onSubmit={this.submit}>
                    <input type="text" name="name" placeholder="name" onChange={this.handle} required /> <br />
                    <input type="email" name="email" placeholder="email" onChange={this.handle} required /> <br />
                    <input type="text" name="Occupation" placeholder="Occupation" onChange={this.handle} required /> <br />
                    <input type="text" name="address1" placeholder="address1" onChange={this.handle} required /> <br />
                    <input type="text" name="address2" placeholder="address2 (optional)" onChange={this.handle} /> <br />
                    <input type="text" name="postcode" placeholder="postcode" onChange={this.handle} required /> <br />
                    <input type="text" name="firstPet" placeholder="First pet" onChange={this.handle} /> <br />
                    <input type="text" name="mothersMaidenName" placeholder="Mothers Maiden Name" onChange={this.handle} /> <br />
                    <input type="text" name="birthPlace" placeholder="City you were born" onChange={this.handle} /> <br />
                    <input type="text" name="firstCar" placeholder="First car" onChange={this.handle} /> <br />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}
