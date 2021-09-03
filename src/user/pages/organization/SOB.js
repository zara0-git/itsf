import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import HomeSlider from "user/components/home-slider/HomeSlider.js";

import Sidemenu from "user/components/sidemenu/Sidemenu";
import SOB from "user/components/customer/SOB/SOB";
// styles
import styles from "assets/jss/material-dashboard-pro-react/custom/homePageStyle";

const useStyles = makeStyles(styles);

export default function (props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <GridContainer style={{ background: "#FFFFFF" }}>
          <GridItem xs={12} sm={12} md={12}>
            <div>
              <SOB />
            </div>
          </GridItem>
          {/* <GridItem xs={12} sm={12} md={3}>
            <div style={{ marginTop: "10px" }}>
              <Sidemenu />
            </div>
  </GridItem>*/}
        </GridContainer>
      </div>
    </div>
  );
}
