import React, { Component } from "react";
import ColorBox from "./ColorBox";
import { withStyles, WithStyles } from "@mui/styles";
import Navbar from "./Navbar";
import styles from "./styles/PaletteStyles";

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
    const { paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;
    const colorBoxes = this.props.palette.colors[this.state.level].map(
      (color) => (
        <ColorBox
          background={color[format]}
          name={color.name}
          key={color.id}
          id={color.id}
          paletteId={id}
          moreUrl={`palette/${id}/${color.id}`}
          showingFullPalette={true}
        />
      )
    );
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingAllColors
        />
        <div className={classes.colors}>{colorBoxes}</div>
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

export default withStyles(styles)(Palette);
