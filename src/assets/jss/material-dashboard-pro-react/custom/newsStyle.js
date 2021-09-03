import {
  primaryColor,
  whiteColor,
  grayColor,
  container,
} from "assets/jss/material-dashboard-pro-react.js";

const newsStyle = (theme) => ({
  paperRoot: {
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: whiteColor,
    borderRadius: 0,
    padding: "0",
    "& h3": {
      display: "inline-block",
      width: "100%",
      color: primaryColor[1],
      fontSize: "24px",
      fontWeight: "400",
    },
    "& h4": {
      fontSize: "18px",
      fontWeight: "500",
      color: primaryColor[1],
      //   paddingLeft: "25px",
      "&:hover": {
        cursor: "pointer",
        textDecoration: "underline",
      },
    },
  },
  title: {
    margin: "0 0 10px",
  },
  newsImgPanel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  newsViewImgPanel: {
    display: "flex",
    width: "100%",
    marginTop: "20px",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  newsImg: {
    cursor: "pointer",
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
  subContent: {
    color: "#36383d",
    fontSize: "16px",
    fontWeight: "400",
    textAlign: "justify",
  },
  titleLink: {
    display: "block",
    color: "#17469e",
    margin: "10px 0 3px 25px",
    fontSize: "14px",
    fontWeight: "500",
    "&:hover": {
      color: "#17469e !important",
      textDecoration: "underline",
    },
  },
  link: {
    color: "#FFFFFF",
    marginTop: "15px",
    marginLeft: "auto",
    marginRight: "35px",
    "&:hover": {
      color: "#FFFFFF !important",
      textDecoration: "underline",
    },
  },
});

export default newsStyle;
