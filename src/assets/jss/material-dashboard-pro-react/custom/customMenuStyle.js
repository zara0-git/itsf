import {
  primaryColor,
  grayColor,
  dangerColor,
  blackColor,
  whiteColor,
  hexToRgb,
} from "assets/jss/material-dashboard-pro-react.js";

const customMenuStyle = {
  nav: {
    margin: 0,
  },
  navUl: {
    margin: 0,
    padding: 0,

    listStyle: "none",
    position: "relative",
    textTransform: "uppercase",
    "& > li": {
      position: "relative",
      float: "left",
      "&:hover > ul": {
        visibility: "visible",
        opacity: "1",
      },
    },
    "& > li > ul": {
      margin: 0,
      padding: 0,
      position: "absolute",
      top: "40px",
      zIndex: "99",
      listStyle: "none",
      backgroundColor: whiteColor,
      borderTop: "3px solid #ff8040",
      boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.33)",
      visibility: "hidden",
      transition: "visibility 0.3s ease-in, opacity 0.2s ease-in",
      opacity: "0",
    },
    "& > li > ul > li": {
      width: "260px",
      float: "none",
      cursor: "pointer",
      display: "list-item",
      position: "relative",
      padding: 0,
      borderBottom: "1px solid rgba(0, 0, 0, 0.13)",
      "&:last-child": {
        borderBottom: "none",
      },
      "& > .link": {
        display: "list-item",
        width: "100%",
        padding: "4px 10px",
        color: "black",
        textTransform: "none",
        fontWeight: "400",
        "&:hover": {
          color: whiteColor,
          backgroundColor: "rgba(" + hexToRgb("#005da3") + ", 0.87)",
        },
      },
      "&:hover > ul": {
        display: "list-item",
      },
      "&:hover < li > .link": {
        backgroundColor: "rgba(0, 0, 0, 0.08)",
      },
      "& > ul": {
        display: "none",
        listStyle: "none",
        margin: 0,
        padding: 0,
        position: "absolute",
        top: 0,
        left: "260px",
        boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.33)",
      },
      "& > ul > li": {
        position: "relative",
        width: "260px",
        backgroundColor: whiteColor,
        borderBottom: "1px solid rgba(0, 0, 0, 0.13)",
        "&:last-child": {
          borderBottom: "none",
        },
        "& > .link": {
          display: "list-item",
          width: "100%",
          padding: "4px 6px",
          color: "black",
          textTransform: "none",
          fontWeight: "400",
          "&:hover": {
            color: whiteColor,
            backgroundColor: "rgba(" + hexToRgb("#005da3") + ", 0.87)",
          },
        },
      },
    },
    "& > li > .link": {
      position: "relative",
      display: "flex",
      alignItems: "center",
      background: "transparent",
      padding: "0 15px",
      lineHeight: "0.8",

      fontSize: "14px",
      color: "black",
      fontWeight: "500",
      borderRadius: 0,
      textTransform: "uppercase",
      textDecoration: "none",
      transition: "all 0.5s ease",
      "&:hover": {
        color: "#0976B4",
        fontWeight: "500",
      },
    },
  },
};

export default customMenuStyle;
