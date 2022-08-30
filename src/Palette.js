import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { paletteName, emoji } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = this.props.palette.colors[this.state.level].map(
      (color) => (
        <ColorBox background={color[format]} name={color.name} key={color.id} />
      )
    );
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingAllColors
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="palette-footer">
          <span>{paletteName}</span>
          {/* <span className="emoji" role="img">
            {emoji}
          </span> */}
        </footer>
      </div>
    );
  }
}

export default Palette;
