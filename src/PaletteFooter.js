import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles/PaletteFooterStyles";

function PaletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.PaletteFooter}>
      <span>{paletteName}</span>
      <span className={classes.emoji} role="img">
        {emoji}
      </span>
    </footer>
  );
}

export default withStyles(styles)(PaletteFooter);
