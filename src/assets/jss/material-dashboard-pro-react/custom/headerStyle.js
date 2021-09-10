import {
  primaryColor,
  whiteColor,
  grayColor,
  container,
  hexToRgb,
} from "assets/jss/material-dashboard-pro-react.js";

const headerStyle = (theme) => ({
  toolbar: {
    backgroundColor: "#042a64",
    minHeight: "95px",
  },
  logo: {
    height: "50px",
    margin: "16px 0 16px 26px",
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
      fontSize: "16px",
      marginBottom: "-10px",
      fontWeight: "400",
    },
    "& h2": {
      padding: 0,
      margin: 0,
      fontSize: "24px",
      fontWeight: "500",
    },
  },
  container: {
    ...container,
  },
  flex: {
    display: "flex",
    flex: "1 auto",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  toolbarMenu: {
    float: "right",
    padding: "2px 0",
    // border: "1px solid #000",
    display: "inline-block",
    flex: "1 auto",
    alignItems: "center",
  },
  appBar1: {
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: "0",
    marginBottom: "0",
    width: "100%",
    zIndex: "1030",
    color: grayColor[6],
    padding: 0,
    transition: "all 150ms ease 0s",
    minHeight: "50px",

    boxShadow: "10px ",
    display: "block",
  },
  appBar: {
    backgroundColor: "#FFFFFF",
    boxShadow: "none",
    borderBottom: "0",
    marginBottom: "0",
    width: "100%",
    zIndex: "1030",
    color: grayColor[6],
    padding: 0,
    transition: "all 150ms ease 0s",
    minHeight: "50px",

    boxShadow: "10px ",
    display: "block",
  },
  groupButton: {
    color: whiteColor,
    marginLeft: "auto",
  },
});

export default headerStyle;
