import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

// styles
import styles from "assets/jss/material-dashboard-pro-react/custom/homePageStyle";
import HomeSlider from "user/components/home-slider/HomeSlider.js";
import CardCarousel from "user/components/its/card/CardCarousel";
import HomeNews from "user/components/news/homeNews/HomeNews";
import BusinessType from "user/components/its/homePage/BusinessTypes";
import AboutUs from "user/components/its/aboutUs/AboutUs";
const useStyles = makeStyles(styles);

export default function (props) {
  const classes = useStyles();

  return (
    <div>
      <HomeSlider />
      <div className={classes.container}>
        <HomeNews />
      </div>
      {/*<GridContainer style={{ background: "#FFFFFF" }}>
          <GridItem xs={12} sm={12} md={12}>
            <div></div>
          </GridItem>
        </GridContainer>
    */}

      <AboutUs />
      <div className={classes.container}>
        <BusinessType />
      </div>
      <CardCarousel />
      <br />
      <br />
      <br />
    </div>
  );
}
