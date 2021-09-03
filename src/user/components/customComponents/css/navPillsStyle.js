import {
  roseColor,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  blackColor,
  grayColor,
  hexToRgb,
} from "assets/jss/material-dashboard-pro-react.js";

const navPillsStyle = (theme) => ({
  root: {
    marginTop: "20px",
    paddingLeft: "0px",

    marginBottom: "0",
    overflowY: "visible !important",
    maxHeight: "100vh",
    "&::-webkit-scrollbar": {
      width: "6px",
      height: "6px",
      margin: "10px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "rgba(136, 136, 136, 0.1)",
      "&:hover": {
        backgroundColor: "rgba(173, 173, 173, 0.4)",
      },
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(136, 136, 136, 0.6)",
      borderRadius: "6px",
      width: "6px",
      "&:hover": {
        backgroundColor: "rgba(136, 136, 136, 0.9)",
      },
    },
  },

  flexContainer: {
    marginRight: "6px",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexWrap: "wrap",
    },
  },
  displayNone: {
    display: "none !important",
  },
  fixed: {
    overflow: "visible !important",
  },
  horizontalDisplay: {
    display: "block",
  },
  pills: {
    float: "left",
    position: "relative",
    display: "block",
    padding: "10px 15px",
    color: grayColor[6],
    border: "1px solid rgba(0,0,0,0.2)",
    height: "auto",
    opacity: "1",

    fontSize: "10px",
    maxWidth: "100%",
    minWidth: "100px",
    minHeight: "10px",
    textAlign: "center",
    transition: "all .3s",
    fontWeight: "500",
    lineHeight: "12px",

    textTransform: "uppercase",
    letterSpacing: "initial",
  },
  pillsWithIcons: {},
  tabIcon: {
    width: "30px",
    height: "30px",
    display: "block",
    margin: "15px 0 !important",
  },
  horizontalPills: {
    width: "100%",
    float: "none !important",
    "& + button": {
      margin: "10px 0 0 0",
    },
  },
  labelContainer: {
    padding: "0!important",
    color: "inherit",
  },
  label: {
    lineHeight: "24px",
    textTransform: "uppercase",
    fontSize: "12px",

    fontWeight: "500",
    position: "relative",
    display: "block",
    color: "inherit",
  },
  contentWrapper: {
    margin: "10px",
    marginTop: " 20px",
  },
  primary: {
    "&,&:hover": {
      color: whiteColor,
      backgroundColor: primaryColor[0],
      boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 10px -5px rgba(" +
        hexToRgb(primaryColor[0]) +
        ", 0.4)",
    },
  },
  info: {
    "&,&:hover": {
      color: whiteColor,
      backgroundColor: infoColor[0],
      boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 10px -5px rgba(" +
        hexToRgb(successColor[0]) +
        ", 0.4)",
    },
  },
  success: {
    "&,&:hover": {
      color: whiteColor,
      backgroundColor: successColor[0],
      boxShadow:
        "0 2px 2px 0 rgba(" +
        hexToRgb(successColor[0]) +
        ", 0.14), 0 3px 1px -2px rgba(" +
        hexToRgb(successColor[0]) +
        ", 0.2), 0 1px 5px 0 rgba(" +
        hexToRgb(successColor[0]) +
        ", 0.12)",
    },
  },
  warning: {
    "&,&:hover": {
      color: whiteColor,
      backgroundColor: warningColor[0],
      boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 10px -5px rgba(" +
        hexToRgb(warningColor[0]) +
        ", 0.4)",
    },
  },
  danger: {
    "&,&:hover": {
      color: whiteColor,
      backgroundColor: dangerColor[0],
      boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 10px -5px rgba(" +
        hexToRgb(warningColor[0]) +
        ", 0.4)",
    },
  },
  rose: {
    "&,&:hover": {
      color: whiteColor,
      backgroundColor: roseColor[0],
      boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 10px -5px rgba(" +
        hexToRgb(roseColor[0]) +
        ", 0.4)",
    },
  },
  alignCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default navPillsStyle;
