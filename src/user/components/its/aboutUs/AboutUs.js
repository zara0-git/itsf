import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import image1 from "assets/img/aboutus/slider-background.jpg";
import mainImage from "assets/img/aboutus/aboutcompany.jpg";

import styles1 from "assets/jss/material-dashboard-pro-react/custom/homePageStyle";

//
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
var styles = {
  cnt: {
    position: "relative",
    width: "100%",

    opacity: "0.9",
  },
  textSec: {
    fontSize: "14px",

    width: "100%",
    animation: `pulse 1s linear`,
    "& p": {
      marginTop: "20px",
      textAlign: "justify",
      fontWeight: "400",
      textJustify: "inter-word",
      lineHeight: 2,
    },
    "& .title": {
      width: "40%",
      fontSize: "24px",
      fontWeight: "400",
      marginBottom: "10px",
      paddingBottom: "10px",
      borderBottom: "1px solid blue",
    },
  },
  buttonSec: {
    position: "absolute",
    top: "35vh",

    color: "white",
    fontSize: "16px",
    width: "100%",
    animation: `pulse 1s linear `,

    "& .link": {
      border: " 1px solid ",
      color: "white",

      padding: "10px",
      borderRadius: "20px",
      transition: "0.5s",
      "&:hover": { fontSize: "18px", color: "#6163FF", fontWeight: "500" },
    },
  },
};

const useStyles = makeStyles(styles);
const useStyles1 = makeStyles(styles1);
export default function RCItem(props) {
  const classes = { ...useStyles1(), ...useStyles() };
  return (
    <div
      style={{
        backgroundColor: "black",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        className={classes.cnt}
        style={{
          backgroundImage: "url('" + image1 + "')",
          backgroundSize: "cover",
          backgroundColor: "red",
        }}
      >
        <div className={classes.container}>
          <div
            style={{
              margin: "auto",
              padding: "5px",
              paddingTop: "50px",
              paddingBottom: "50px",
            }}
          >
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <img width="100%" src={mainImage} />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.textSec}>
                  <span className="title">КОМПАНИЙ ТУХАЙ</span>
                  <p>
                    "Ай Ти Систем" компани нь 2004 онд байгуулагдан мэдээллийн
                    технологийн салбарт 10 жилийн турш амжилттай ажилласан арвин
                    туршлагатай бөгөөд Үүрэн холбооны нэмэлт үйлчилгээний
                    программчлал, автоматжуулалтын шийдэл, Мобайл аппликейшн
                    хөгжүүлэлт, “CRM” ба “Call center” байгууллагын хэрэглэгчтэй
                    харилцах систем, вебд суурилсан программчлал чиглэлээр 20
                    гаруй технологийн төсөл, системүүдийг Монгол
                    инженерүүдийнхээ хүчээр боловсруулж хэрэгжүүлэн
                    хэрэглэгчиддээ нийлүүлээд байна.
                  </p>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
