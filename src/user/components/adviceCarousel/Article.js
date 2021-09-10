import React from "react";

import "./Carousel4.css";
import { Link } from "react-router-dom";
export default function Article(props) {
  var image = props.data.img[0];
  const title = props.data.Name;
  const id = props.data.id;

  return (
    <figure className="snip1584">
      <div style={{ height: "300px", overflow: "hidden" }}>
        <img src={image} width="100%" height="100%" />
      </div>
      <Link style={{ color: "white" }} to={props.data.Url}>
        <figcaption>
          <h5>{title}</h5>
          <h6> Үзэх</h6>
        </figcaption>
      </Link>
    </figure>
  );
}
