import React from "react";
import Slider from "react-slick";
import CustomCard from "./CustomCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NewsLists } from "assets/store/NewsLists";
import { makeStyles } from "@material-ui/core";
import styles1 from "assets/jss/material-dashboard-pro-react/custom/homePageStyle";
import image1 from "assets/img/aboutus/slider-background.jpg";
//

var styles = {
  cnt: {
    position: "relative",
    width: "100%",

    opacity: "0.9",
  },
};

const useStyles = makeStyles(styles);
const useStyles1 = makeStyles(styles1);

export default function News() {
  const classes = { ...useStyles1(), ...useStyles() };
  var data = NewsLists;
  var newsTemplate;
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  if (data.length > 0) {
    newsTemplate = data.map(function (item, index) {
      return (
        <div key={index}>
          <CustomCard data={item} />
        </div>
      );
    });
  } else {
    newsTemplate = <p>Please add some cards</p>;
  }

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
          paddingBottom: "30px",
        }}
      >
        <Slider {...settings}>{newsTemplate}</Slider>
      </div>
    </div>
  );
}
