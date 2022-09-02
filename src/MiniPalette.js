import React, { Component } from "react";
import { withStyles } from "@mui/styles";

const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid teal",
    "& h1": {
      color: "white",
    },
  },
};

function MiniPalette(props) {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <h1>MiniPalette</h1>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
