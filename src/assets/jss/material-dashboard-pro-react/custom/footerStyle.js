import {
  primaryColor,
  whiteColor,
  grayColor,
  container,
  hexToRgb,
} from "assets/jss/material-dashboard-pro-react.js";

const footerStyle = (theme) => ({
  container: {
    ...container,
  },
  addressSec: {
    lineHeight: "2",
    marginLeft: "25px",
    marginRight: "25px",
  },
  cnt: {
    marginTop: "20px",
    color: "white",

    "& h5": { fontSize: "14px", fontWeight: "500", textTransform: "uppercase" },
  },
  headerSec: {
    marginLeft: "25px",
    marginRight: "25px",
    borderBottom: "0.5px solid rgb(110,110,110)",
  },
  toolbar: {
    backgroundColor: "#2E2E2E",
    minHeight: "95px",
  },
  logo: {
    height: "88px",
    margin: "12px 0 12px 22px",
    float: "left",
  },
  headerText: {
    float: "left",
    marginLeft: "10px",
    textTransform: "uppercase",
    color: whiteColor,
    "& h4": {
      padding: 0,
      margin: 0,
      fontSize: "15px",
      marginBottom: "-1px",
      fontWeight: "300",
    },
    "& h2": {
      padding: 0,
      margin: 0,
      fontSize: "15px",
      fontWeight: "500",
      lineHeight: "1.2",
    },
  },
  container: {
    ...container,
  },
  flex: {
    display: "flex",
    flex: "1 auto",
    alignItems: "center",
  },

  addressList: {
    width: "100%",
    maxWidth: 360,
    background: "transparent",
    color: whiteColor,
  },
  listItemIcon: {
    cursor: "pointer",
    minWidth: 18,

    marginRight: "10px",
    color: whiteColor,
  },
  listItemTextRoot: {
    lineHeight: "1",

    "& span": {
      fontSize: "14px",
      fontWeight: "300",
      transition: "all 0.5s ease",
      // color: "#3C3D8D",
      "&:hover": {
        color: "#0976B4",
        cursor: "pointer",
      },
    },
    "& .link1": {
      alignItems: "center",
      background: "transparent",
      paddingRight: "5px",
      lineHeight: "0.8",
      fontWeight: "400",

      color: whiteColor,
      height: "20px",
      borderRadius: 0,
      textTransform: "uppercase",
      textDecoration: "none",
      transition: "all 0.5s ease",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.08)",
        color: "#0976B4",
      },
    },
    "& > div > span": {
      fontSize: "13px",
      fontWeight: "300",
      color: "rgba(255, 255, 255, 0.6)",
    },
  },
  // Link Styles
  linkHeaderText: {
    fontSize: "24px",
    padding: 0,
    marginTop: "65px",
    marginBottom: "45px",
    fontWeight: "400",
    color: whiteColor,
  },

  linkList: {
    width: "100%",
    maxWidth: 360,
    paddingBottom: 0,
    paddingTop: 0,
    background: "transparent",
    color: whiteColor,
  },

  linkItem: {
    padding: "12px 0",
  },

  linkText: {
    color: whiteColor,
    fontSize: "15px",
    fontWeight: "300",
    "&:hover": {
      color: whiteColor,
      textDecoration: "underline",
    },
    "&:focus": {
      color: whiteColor,
    },
  },

  iconLink: {
    color: whiteColor,
    fontSize: "15px",
    fontWeight: "300",
    "&:hover": {
      color: whiteColor,
    },
    "&:focus": {
      color: whiteColor,
    },
  },

  linkItemIcon: {
    cursor: "pointer",
    minWidth: 18,
    width: 28,
    marginRight: 3,
    color: whiteColor,
  },
  linkItemTextRoot: {
    lineHeight: "1",
    padding: 0,
  },

  accessList: {
    width: "100%",
    maxWidth: 360,
    background: "transparent",
    color: whiteColor,
  },

  accessItem: {
    padding: "8px 0",
  },
  accessItemIcon: {
    cursor: "pointer",
    minWidth: 18,
    marginRight: 16,
    color: whiteColor,
  },
  accessItemTextRoot: {
    lineHeight: "1",
    "& span": {
      fontSize: "15px",
      fontWeight: "300",
    },
    "& > div > span": {
      fontSize: "13px",
      fontWeight: "300",
      color: "rgba(255, 255, 255, 0.6)",
    },
  },

  toolbarMenu: {
    float: "right",
    padding: "12px 0",
    // border: "1px solid #000",
    display: "inline-block",
    flex: "1 auto",
    alignItems: "center",
  },
  groupButton: {
    color: whiteColor,
    marginLeft: "auto",
  },
});

export default footerStyle;
