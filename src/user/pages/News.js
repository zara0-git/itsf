import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
// styles
import styles from "assets/jss/material-dashboard-pro-react/custom/homePageStyle";

const useStyles = makeStyles(styles);

export default function () {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <GridContainer style={{ height: "1200px", background: "#FFFFFF" }}>
        <GridItem xs={12} sm={12} md={9}>
          News
        </GridItem>
      </GridContainer>
    </div>
  );
}
