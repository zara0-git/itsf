import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import HomeSlider from "user/components/home-slider/HomeSlider.js";
import Greeting from "user/components/Introduction/greeting/Greeting";
import Sidebar from "user/components/sidebar/Sidebar.js";
import Sidemenu from "user/components/sidemenu/Sidemenu";
// styles
import styles from "assets/jss/material-dashboard-pro-react/custom/homePageStyle";

import Activition from "user/components/Introduction/activation/Activation";
const useStyles = makeStyles(styles);

export default function (props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <GridContainer style={{ background: "#FFFFFF" }}>
          <GridItem xs={12} sm={12} md={9}>
            <div style={{ marginTop: "10px" }}>
              <Activition name="Үйл ажиллагааны төлөвлөлт, гүйцэтгэл" />
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <div style={{ marginTop: "10px" }}>
              <Sidemenu index="1" />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
