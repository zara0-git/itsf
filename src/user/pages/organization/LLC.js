import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import HomeSlider from "user/components/home-slider/HomeSlider.js";

import Sidemenu from "user/components/sidemenu/Sidemenu";
import LLC from "user/components/customer/lifelong-learning-center/LLC";

// styles
import styles from "assets/jss/material-dashboard-pro-react/custom/homePageStyle";

const useStyles = makeStyles(styles);

export default function (props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <GridContainer style={{ background: "#FFFFFF" }}>
          <GridItem xs={12} sm={12} md={9}>
            <div>
              <LLC />
            </div>
          </GridItem>
          {/* <GridItem xs={12} sm={12} md={3}>
            <div style={{ marginTop: "10px" }}>
              <Sidemenu />
            </div>
  </GridItem> */}
        </GridContainer>
      </div>
    </div>
  );
}
