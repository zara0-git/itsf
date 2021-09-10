import {
  primaryColor,
  grayColor,
  dangerColor,
  blackColor,
  whiteColor,
  hexToRgb,
} from "assets/jss/material-dashboard-pro-react.js";
import LinkIcon from "@material-ui/icons/Link";
import zurag from "assets/img/manai.jpg";
const toolbarMenuStyle = {
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
        display: "block",
      },
    },
    "& > li > ul": {
      margin: 0,
      padding: 0,
      display: "none",
      position: "absolute",
      top: "20px",
      zIndex: "99999",
      listStyle: "none",
      backgroundColor: whiteColor,
      boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.33)",
    },
    "& > li > ul > li": {
      width: "180px",
      float: "none",
      cursor: "pointer",
      display: "list-item",
      position: "relative",
      padding: 0,
      borderBottom: "1px solid rgba(" + hexToRgb("#0072c9") + ", 0.63)",
      "&:last-child": {
        borderBottom: "none",
      },
      "& > .link": {
        display: "list-item",
        width: "100%",
        padding: "4px 8px",
        color: "#00408f",
        textTransform: "none",
        fontSize: "12px",
        fontWeight: "400",
        "&:hover": {
          color: whiteColor,
          backgroundColor: "rgba(" + hexToRgb("#0072c9") + ", 0.47)",

          backgroundSize: "cover",
        },
      },
      "&:hover > ul": {
        display: "list-item",
      },
      "&:hover < li > .link": {
        // backgroundColor: "rgba(0, 0, 0, 0.08)",
      },
      "& > ul": {
        display: "none",
        listStyle: "none",
        margin: 0,
        padding: 0,
        position: "absolute",
        top: 0,
        left: "180px",
        boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.33)",
      },
      "& > ul > li": {
        position: "relative",
        width: "180px",
        backgroundColor: whiteColor,
        borderBottom: "1px solid rgba(" + hexToRgb("#0072c9") + ", 0.63)",
        "&:last-child": {
          borderBottom: "none",
        },
        "& > .link": {
          display: "list-item",
          width: "100%",
          padding: "4px",
          color: "#00408f",
          textTransform: "none",
          fontSize: "12px",
          fontWeight: "400",
          "&:hover": {
            color: whiteColor,
            backgroundColor: "rgba(" + hexToRgb("#0072c9") + ", 0.47)",
          },
        },
      },
    },
    "& > li > .link": {
      position: "relative",
      display: "flex",
      alignItems: "center",
      background: "transparent",
      padding: "0 8px",
      lineHeight: "0.8",
      fontWeight: "400",
      fontSize: "10px",
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
    "& > li > .link1": {
      position: "relative",
      display: "flex",
      alignItems: "center",
      background: "transparent",
      padding: "0 2px",
      lineHeight: "0.8",
      fontWeight: "400",
      fontSize: "10px",
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
  },
};

export default toolbarMenuStyle;
