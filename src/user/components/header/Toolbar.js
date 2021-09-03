import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomToolbarMenu from "user/components/header/CustomToolbarMenu.js";
// styles
import headerStyle from "assets/jss/material-dashboard-pro-react/custom/headerStyle";

const styles = (theme) => ({
  notchedOutline: {
    backgroundColor: "#fff",
    "& .MuiOutlinedInput-adornedEnd": {
      paddingRight: "8px",
      "&:hover": {
        cursor: "pointer",
      },
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
      "& fieldset": {
        borderColor: "#ccc",
      },
      "&:hover fieldset": {
        borderColor: "rgba(0, 46, 74, 0.4)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(0, 46, 74, 0.4)",
        borderWidth: "1px",
      },
    },
  },
});

const useHeaderStyles = makeStyles(headerStyle);
const useStyles = makeStyles(styles);

export default function Toolbar(props) {
  const classes = { ...useHeaderStyles(), ...useStyles() };

  return (
    <div style={{ backgroundColor: "rgb(46,46,46)" }}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem
            xs={12}
            sm={6}
            md={6}
            style={{ position: "relative" }}
          ></GridItem>
          <GridItem xs={12} sm={6} md={6} style={{ position: "relative" }}>
            <CustomToolbarMenu />
          </GridItem>
        </GridContainer>
      </div>
      <div style={{ clear: "both" }}></div>
    </div>
  );
}
