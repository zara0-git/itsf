import React from "react";
import { makeStyles } from "@material-ui/core";

//

var styles = {
  cnt: {
    position: "relative",
    opacity: "0.9",
    margin: "20px",
    padding: "10px",
  },
  img: {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    border: "1px solid blue ",
    borderRadius: "100%",
  },
  subcnt: {
    display: "flex",
  },
};

const useStyles = makeStyles(styles);

const CustomCard = (props) => {
  const classes = { ...useStyles() };
  const data = props.data;
  return (
    <div className={classes.cnt}>
      <div className={classes.subcnt}>
        <img src={data.img[0]} className={classes.img}></img>
        <div>
          <h5>{data.Name}</h5>
          <p>{data.Name}</p>
        </div>
      </div>
    </div>
  );
};
export default CustomCard;
