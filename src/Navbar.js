import React, { Component } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">Color Picker</a>
        </div>
        <div className="slider-container">
          <p>Level: {this.props.level}</p>
          <div className="slider">
            <Slider
              defaultValue={this.props.level}
              min={100}
              max={900}
              step={100}
              onAfterChange={this.props.changeLevel}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
