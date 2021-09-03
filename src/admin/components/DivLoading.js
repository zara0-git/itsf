import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

var styles = {
  background: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "2",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 0,
    backgroundColor: "rgba(130, 130, 130, 0.3)",
  },
  root: {
    position: "relative",
  },
  top: {
    color: "#a3a3a3",
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
};

const useStyles = makeStyles(styles);

export default function DivLoading(props) {
  const classes = useStyles();
  return (
    <div
      className={classes.background}
      style={{
        right: 0,
        left: 0,
      }}
    >
      <div className={classes.root}>
        <CircularProgress
          variant="determinate"
          value={100}
          style={{ color: "#eef3fd" }}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
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
