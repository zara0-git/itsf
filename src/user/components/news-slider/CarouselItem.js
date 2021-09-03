import React from "react";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { Link } from "react-router-dom";

import server from "config/server";
import defaultImage from "assets/img/image_placeholder.jpg";
export default function CarouselItem(props) {
  return (
    <div>
      <Link to={props.id ? "/home/news/" + props.id : "#"}>
        <div className="title">
          <p>
            {props.title && props.title.length < 70
              ? props.title
              : props.title.substr(0, 60) + "..."}
          </p>
        </div>
        <div className="date">
          <span>
            <DateRangeIcon
              style={{
                width: "13",
                marginRight: "5px",
                marginTop: "4px",
              }}
            />
          </span>
          <span>{props.date ? props.date.substr(0, 10) : "2020.06.29"}</span>
        </div>
      </Link>
      <img src={props.img} alt={props.id} />
    </div>
  );
}
