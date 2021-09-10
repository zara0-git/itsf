import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./style.css";

var styles = {
  cnt: {
    position: "relative",
    width: "100%",
    height: "50vh",
    opacity: "0.5",
  },
  titleSec: {
    position: "absolute",
    width: "100%",
    top: "18vh",
    textTransform: "uppercase",
    color: "white",
    fontSize: "40px",
    fontWeight: "500",
    animation: `pulse1 1s linear `,
  },
  contentSec: {
    position: "absolute",
    top: "25vh",
    color: "white",
    fontSize: "16px",
    width: "100%",
    animation: `pulse 1s linear `,

    "& p": {
      width: "50%",
      margin: "auto",
    },
  },
  buttonSec: {
    position: "absolute",
    top: "35vh",

    color: "white",
    fontSize: "16px",
    width: "100%",
    animation: `pulse 1s linear `,

    "& .link": {
      border: " 1px solid ",
      color: "white",

      padding: "10px",
      borderRadius: "20px",
      transition: "0.5s",
      "&:hover": { fontSize: "18px", color: "#6163FF", fontWeight: "500" },
    },
  },
};
const useStyles = makeStyles(styles);

export default function RCItem(props) {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundColor: "black",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        className={classes.cnt}
        style={{
          backgroundImage: "url('" + props.item.image + "')",
          backgroundSize: "cover",
          backgroundColor: "red",
        }}
      ></div>
      <div className={classes.titleSec}>
        <p>{props.item.title}</p>
      </div>
      <div className={classes.contentSec}>
        <p>{props.item.content}</p>
      </div>
      <div className={classes.buttonSec}>
        <Link className="link" to={props.item.url}>
          See more
        </Link>
      </div>
    </div>
  );
}
