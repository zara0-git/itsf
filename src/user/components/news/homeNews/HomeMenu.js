import React from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { makeStyles } from "@material-ui/core";
import zurag from "assets/img/link1.png";
import zurag1 from "assets/img/link20.jpg";
import zurag2 from "assets/img/link12.png";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  cnt: {
    backgroundPosition: "center" /* Center the image */,
    backgroundRepeat: "no-repeat" /* Do not repeat the image */,
    backgroundSize: "cover",
    margin: 0,
    padding: "10px",
  },
  link: {
    color: "white",

    paddingLeft: "5px",
    paddingRight: "5px",
    "&:hover": {
      color: "white",
    },
    "&:focus": {
      color: "white",
    },
    "& h5": { textTransform: "uppercase", fontWeight: "400" },
  },
  item: {
    backgroundColor: "rgba(38, 37, 37,0.5);",
    height: "100px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "&:hover": {
      color: "white",
      backgroundColor: "rgba(38, 37, 37,0.8);",
    },
  },
});

const useStyles = makeStyles(styles);
export default function HomeMenu(props) {
  const classes = { ...useStyles() };
  return (
    <div
      style={{
        marginBottom: "5px",
        paddingBottom: "5px",
      }}
    >
      <div
        style={{
          position: "relative",
          margin: "10px 0",
          borderTop: "1px solid #2CA02C",
        }}
      ></div>
      <div
        style={{
          width: " 100%",
        }}
      >
        <GridContainer>
          <GridItem xs={12} sm={4} md={4} style={{ paddingLeft: 0 }}>
            <div
              className={classes.cnt}
              style={{ backgroundImage: "url('" + zurag + "')" }}
            >
              <div className={classes.item}>
                <a
                  className={classes.link}
                  href="http://itembank.eec.mn/"
                  target="_blank"
                >
                  <h5>Даалгаврын сангийн систем </h5>
                </a>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <div
              className={classes.cnt}
              style={{ backgroundImage: "url('" + zurag2 + "')" }}
            >
              <div className={classes.item}>
                <a
                  className={classes.link}
                  href="http://mals.mn"
                  target="_blank"
                >
                  <h5>Хичээлийн судалга</h5>
                </a>
              </div>
            </div>
          </GridItem>{" "}
          <GridItem xs={12} sm={4} md={4} style={{ paddingRight: 0 }}>
            <div
              className={classes.cnt}
              style={{ backgroundImage: "url('" + zurag1 + "')" }}
            >
              <div className={classes.item}>
                <a
                  className={classes.link}
                  href="http://econtent.edu.mn"
                  target="_blank"
                >
                  <h5>Цахим хичээл</h5>
                </a>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
