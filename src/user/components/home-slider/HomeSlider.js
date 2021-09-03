import React from "react";
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core";
import HeaderItem from "user/components/home-slider/CarouselItem.js";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Caro1 from "assets/img/home-carousel/caro4.jpg";
import Caro2 from "assets/img/home-carousel/caro5.jpg";
import Caro3 from "assets/img/home-carousel/caro6.jpg";

import arrowImg from "./arrow.png";
import arrowImgHover from "./arrow-hover.png";

const styles = {
  arrow: {
    position: "absolute",
    top: 0,
    bottom: 0,
    backgroundColor: "transparent",
    backgroundImage: "url(" + arrowImg + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "120px",
    zIndex: 2,
    "&:hover": {
      backgroundImage: "url(" + arrowImgHover + ")",
      cursor: "pointer",
      backgroundColor: "rgba(0, 0, 0, 0.25)",
    },
  },
  arrowPrev: {
    left: 0,
    right: "auto",
    transform: "rotate(180deg) translateY(calc(0% + 0px))",
    WebkitTransform: "rotate(180deg) translateY(calc(0% + 0px))",
  },
  arrowNext: {
    left: "auto",
    right: 0,
  },
};

const useStyles = makeStyles(styles);

export default function CarouselComponent() {
  const classes = useStyles();
  const data = [
    {
      image: Caro1,
    },
    {
      image: Caro2,
    },
    {
      image: Caro3,
    },
  ];

  // require("./style.css");

  return (
    <Carousel
      infiniteLoop={true}
      showArrows={true}
      showStatus={false}
      renderArrowPrev={(onClickHandler) => (
        <div
          onClick={onClickHandler}
          className={classes.arrow + " " + classes.arrowPrev}
        ></div>
      )}
      renderArrowNext={(onClickHandler) => (
        <div
          onClick={onClickHandler}
          className={classes.arrow + " " + classes.arrowNext}
        ></div>
      )}
      dynamicHeight={true}
    >
      {data.map((item, key) => {
        return <HeaderItem imgURL={item.image} key={"Item-" + key} />;
      })}
    </Carousel>
  );
}
