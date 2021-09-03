import React from "react";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import Swipe from "user/components/Swipe/Swipe";
import server from "config/server";
import { makeStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  haha: {
    borderBottom: "1px solid rgba(0,0,0,0.2)",
  },

  text: {
    textAlign: "justify",
    textIndent: "50px",
    fontSize: "12px",

    "& table ": {
      borderCollapse: "collapse",
      "& td,th": {
        border: "1px solid #ddd",
        padding: "8px",
      },
    },
  },
  textContainer: {
    height: "100%",
    width: "100%",
  },

  text1: {
    marginTop: "10px",

    textIndent: "50px",
    textAlign: "justify",
  },
});

const useStyles = makeStyles(styles);

export default function EBSDetails(props) {
  const tab = props.tab;

  const [images, setImages] = React.useState([]);

  const classes = { ...useStyles() };

  React.useEffect(() => {
    GetImages();
  }, [props.tab]);

  const GetImages = () => {
    var filterImages = [];
    if (tab && tab.customer_image && tab.customer_image.length > 0) {
      tab.customer_image.map((value, key) => {
        filterImages.push({
          id: key,
          imageName: `${server.BaseFileUrl}customer/${value.generated_name}`,
        });
      });
    }
    console.log(filterImages);

    setImages(filterImages);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div className={classes.imgCont}>
            <img
              src={
                tab.main_image
                  ? `${server.BaseFileUrl}customer/${tab.main_image}`
                  : null
              }
              width="100%"
            />
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <br />
          <div className={classes.textContainer}>
            <p
              className={classes.text}
              dangerouslySetInnerHTML={{ __html: tab.content }}
            />
          </div>
        </GridItem>
        <Swipe images={images} index="4" size="false" />
      </GridContainer>
    </div>
  );
}
