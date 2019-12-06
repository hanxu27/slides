import React, { Component } from "react";
import allImages from "./resources/images";
import "./App.css";

export default class App extends Component {
  //current image plus client specific images
  state = { image: null, appImages: allImages };
  componentDidMount() {
    this.randomImage();
  }

  //put the image selected into state.image, then remove that image from state.appImage
  randomImage = () => {
    let index = this.randomIndex();
    let tempImages = [].concat(this.state.appImages);
    let currentImage = tempImages.splice(index, 1);
    this.setState({ image: currentImage[0] });
    if (tempImages.length > 0) {
      this.setState({ appImages: tempImages });
    } else {
      this.setState({ appImages: allImages });
    }
  };

  // generate the random index based on appImages
  randomIndex = () => Math.floor(Math.random() * this.state.appImages.length);

  render() {
    return (
      <div className="App">
        {this.state.image !== null && (
          <header className="App-header">
            <h2 className="App-headline">{this.state.image.headline}</h2>
            <img
              src={this.state.image.source}
              className="App-picture"
              alt={this.state.image.headline}
            />
            <button onClick={e => this.randomImage()} className="Button-next">
              Next
            </button>
          </header>
        )}
      </div>
    );
  }
}
