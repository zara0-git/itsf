import React from "react";
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core";
import HeaderItem from "user/components/home-slider/CarouselItem.js";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Caro1 from "assets/img/home-carousel/1.jpg";
import Caro2 from "assets/img/home-carousel/2.jpg";
import Caro3 from "assets/img/home-carousel/3.jpg";
import Caro4 from "assets/img/home-carousel/4.jpg";

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
      url: "#",
      title: "Нүүр хуудас",
      content:
        "Програм хангамж боловсруулах, мэргэжлийн сургалт, зөвлөгөө өгөх, мэдээллийн технологийн худалдаа, засвар үйлчилгээ",
    },
    {
      image: Caro2,
      url: "#",
      title: "Програм хангамж",
      content:
        "Програм хангамж боловсруулах, мэргэжлийн сургалт, зөвлөгөө өгөх, мэдээллийн технологийн худалдаа, засвар үйлчилгээ",
    },
    {
      image: Caro3,
      url: "#",
      title: "Тоног төхөөрөмж",
      content:
        "Програм хангамж боловсруулах, мэргэжлийн сургалт, зөвлөгөө өгөх, мэдээллийн технологийн худалдаа, засвар үйлчилгээ",
    },
    {
      image: Caro4,
      url: "#",
      title: "Үйлчилгээ",
      content:
        "Програм хангамж боловсруулах, мэргэжлийн сургалт, зөвлөгөө өгөх, мэдээллийн технологийн худалдаа, засвар үйлчилгээ",
    },
  ];

  // require("./style.css");

  return (
    <Carousel
      infiniteLoop={true}
      showArrows={true}
      autoPlay={true}
      showStatus={false}
      interval="5000"
      showThumbs={false}
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
        return <HeaderItem item={item} key={"Item-" + key} />;
      })}
    </Carousel>
  );
}
