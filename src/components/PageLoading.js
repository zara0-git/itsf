import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

var styles = {
  background: {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  root: {
    position: "relative",
  },
  top: {
    color: "#1a90ff",
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
};

const useStyles = makeStyles(styles);

export default function (props) {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.root}>
        <CircularProgress
          variant="determinate"
          value={100}
          size={78}
          style={{ color: "#e3e3e3" }}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          size={78}
          thickness={3.8}
          className={classes.top}
          classes={{
            circle: classes.circle,
          }}
        />
      </div>
    </div>
  );
}
