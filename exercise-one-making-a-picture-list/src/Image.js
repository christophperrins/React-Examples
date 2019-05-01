import React, { Component } from 'react';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  
  render() {
    return (
        <div className="img" style={{position:"relative", width:"100%"}}>
      <img style={{position: "relative"}} alt={"Animal"} src={this.props.source} width="20%"/>
      </div>
    );
  }

}


