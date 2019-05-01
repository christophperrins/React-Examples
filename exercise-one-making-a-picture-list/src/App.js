import React, { Component } from 'react';
import Image from './Image';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      text: ""
    }
  }

  eventHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addPic = (e) => {
    let imageList = this.state.images;
    imageList.push(this.state.text);
    this.setState({
      images: imageList,
      text: ""
    })
  }

  render() {
    return (
      <div className="App">
        <strong>Add a picture to the list below by entering an image URL.</strong>
        <p>Example images to copy and paste:</p>
        <ul>
          <li>https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OC85MTEvb3JpZ2luYWwvZ29sZGVuLXJldHJpZXZlci1wdXBweS5qcGVn</li>
          <li>https://www.pets4homes.co.uk/images/articles/4295/large/early-neutering-of-kittens-pros-and-cons-598ddb68021a9.jpg</li>
          <li>https://static01.nyt.com/images/2016/06/28/dining/28COOKING-FRIEDCHICKENGUIDE13/28COOKING-FRIEDCHICKENGUIDE13-superJumbo.jpg</li>
        </ul>
        <input type="text" name="text" onChange={this.eventHandler} value={this.state.text} />
        <button onClick={this.addPic}>+</button>
        {this.state.images.map((img, i) => <Image key={"image" + i} source={img} />)}
      </div>
    );
  }

}


