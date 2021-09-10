import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
// icons
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const styles = {
  cnt: {
    top: "120px",
    position: "fixed",
    right: "0",
    zIndex: "9",
    display: "flex",
    flexDirection: "column",
  },
  link: {
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  link1: {
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  link2: {
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "red",
    },
  },
};

const useStyles = makeStyles(styles);
export default function Sociallinks(props) {
  const classes = useStyles();
  return (
    <div className={classes.cnt}>
      <div className={classes.link}>
        <Link to={"#"}>
          <FacebookIcon
            style={{
              width: "100%",
              color: "#4267B2 ",
            }}
          />
        </Link>
      </div>
      <div className={classes.link1}>
        <Link to={"#"}>
          <TwitterIcon style={{ color: "#03f0fc " }} />
        </Link>
      </div>
      <div className={classes.link2}>
        <Link to={"#"}>
          <LinkedInIcon
            style={{
              color: "#0077b5",
            }}
          />
        </Link>
      </div>
    </div>
  );
}
