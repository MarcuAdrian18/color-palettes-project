import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { Start } from "@mui/icons-material";
import { boxSizing } from "@mui/system";

const styles = {
  root: {
    backgroundColor: "blue",
    height: "100%",
    display: "flex",
    alignItems: "flex-Start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    color: "white",
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};

class PaletteList extends Component {
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette) => (
              <MiniPalette {...palette} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
