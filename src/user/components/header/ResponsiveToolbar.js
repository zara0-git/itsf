import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import SearchIcon from "@material-ui/icons/Search";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomToolbarMenu from "user/components/header/CustomToolbarMenu.js";
// styles
import headerStyle from "assets/jss/material-dashboard-pro-react/custom/headerStyle";
import logo from "assets/img/logo.png";
import toolbarBg from "assets/img/toolbarbg.png";

const styles = (theme) => ({
  toolbar: {
    backgroundColor: "#042a64",
    minHeight: "95px",
  },
  logo: {
    height: "72px",
    margin: "6px 0 6px 12px",
    float: "left",
  },
  headerText: {
    float: "left",
    marginLeft: "20px",
    textTransform: "uppercase",
    color: "#00408f",
    "& h4": {
      padding: 0,
      margin: 0,
      fontSize: "12px",
      fontWeight: "400",
    },
    "& h2": {
      padding: 0,
      margin: 0,
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: 1,
    },
  },
});

const useHeaderStyles = makeStyles(headerStyle);
const useStyles = makeStyles(styles);

export default function ResponsiveToolbar(props) {
  const classes = { ...useHeaderStyles(), ...useStyles() };

  return (
    <div
      style={{
        background: "#FFFFFF",
        backgroundImage: "url(" + toolbarBg + ")",
        backgroundRepeat: "repeat-x",
      }}
    >
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={6} md={7}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link to="/home">
                <img src={logo} className={classes.logo} />
              </Link>
              <div className={classes.headerText}>
                <h4>Булган аймгийн</h4>
                <h2>Боловсрол, соёл урлагийн газар</h2>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
      <div style={{ clear: "both" }}></div>
    </div>
  );
}
