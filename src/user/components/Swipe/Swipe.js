import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

var styles = {
  container: {
    width: "100%",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "10px",
    overflow: "hidden",
  },
  imageCard: {
    border: "1px solid #ddddd",
    borderRadius: "2px",
    overflow: "hidden",
    width: "100%",

    height: "250px",
  },

  image: {
    width: "100%",

    "&:hover": {
      opacity: 0.5,
    },
  },
  image1: {
    width: "100%",
  },
  tags: {
    textAlign: "center",
    padding: "20px 0px",
    backgroundColor: "rgb(43,92,226)",
  },
};

const options = {
  settings: {
    overLayColor: "green",
  },
};
const useStyles = makeStyles(styles);
function Swipe(props) {
  const classes = useStyles();

  const tag = "all";
  const [filteredImages, setFilteredImages] = useState([]);
  const images = props.images;

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  useEffect(() => {
    setFilteredImages(props.images);
  }, [props.images]);

  return (
    <SimpleReactLightbox>
      <SRLWrapper options={options}>
        <GridContainer>
          {filteredImages.map((image, key) => (
            <GridItem
              xs={12}
              sm={4}
              md={props.index ? props.index : 4}
              style={{ margin: 0 }}
              key={key}
            >
              {props.size ? (
                <div key={image.id} className={classes.imageCard}>
                  <a href={image.imageName}>
                    <img
                      className={classes.image}
                      src={image.imageName}
                      alt=""
                    />
                  </a>
                </div>
              ) : (
                <div className={classes.imageCard} style={{ height: "100%" }}>
                  <a href={image.imageName}>
                    <img
                      className={classes.image1}
                      src={image.imageName}
                      alt=""
                    />
                  </a>
                </div>
              )}
            </GridItem>
          ))}
        </GridContainer>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default Swipe;
