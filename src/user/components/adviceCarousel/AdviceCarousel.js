import React from "react";
import "./Carousel4.css";
import News from "./News";
import { NewsLists } from "assets/store/NewsLists";
var cards = NewsLists;

export default function Carousel5() {
  return (
    <div>
      <News data={cards} />
    </div>
  );
}
