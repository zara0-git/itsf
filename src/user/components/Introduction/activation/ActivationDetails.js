import React, { useEffect, useState } from "react";
import server from "config/server";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { container } from "assets/jss/material-dashboard-pro-react";
import DivLoading from "admin/components/DivLoading";
import "react-gallery-carousel/dist/index.css";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Swipe from "user/components/Swipe/Swipe";
import defaultImage from "assets/img/image_placeholder.jpg";
const styles = (theme) => ({
  headImg: {
    width: "100%",

    overflow: "hidden",
  },
  caroSec: { padding: "10px" },
  container: {
    ...container,
  },
  dateSec: {
    marginLeft: "0px",
    marginRight: "auto",
    width: "15%",
    height: "25px",
    fontSize: "12px",
    fontWeight: "300",
    width: "90px",
    fontStyle: "italic",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bodySec: {
    width: "100%",
    padding: "10px",
  },
  textSec: {
    textAlign: "justify",
  },
  titleSec: {
    borderBottom: "1px solid blue",
    width: "100",
  },
});

const useStyles = makeStyles(styles);

export default function NewsDetails(props) {
  const { id } = useParams();
  const [data, setData] = React.useState({});
  const [images, setImages] = React.useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const classes = { ...useStyles() };

  React.useEffect(() => {
    GetData(id);
  }, [id]);

  const GetData = async (id) => {
    if (id) {
      setIsLoading(true);
      var Response = await server.CallService({
        Method: "GET",
        Url: `home/activation/` + id,
      });

      if (
        Response &&
        Response.data &&
        Response.data.Data &&
        Response.data.Success
      ) {
        setData(Response.data.Data);
        const responseData = Response.data.Data;
        if (
          responseData[props.img + ""] &&
          responseData[props.img + ""].length > 0
        ) {
          const imagess = responseData[[props.img + ""]].map((value, key) => ({
            id: key,
            imageName: `${server.BaseFileUrl}ourActivition/${value.generated_name}`,
          }));
          setImages(imagess);
        }
      }
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.container}>
      {isLoading ? <DivLoading /> : null}
      <GridContainer>
        <GridItem xs={12} sm={9} md={9}>
          <div>
            <div className={classes.bodySec}>
              <h4 className={classes.titleSec}>{data.title}</h4>
              <div className={classes.dateSec}>
                <span>
                  <DateRangeIcon
                    style={{
                      width: "13",
                      marginRight: "5px",
                      marginTop: "4px",
                    }}
                  />
                </span>
                <span>
                  {data.created_at ? data.created_at.substr(0, 10) : null}
                </span>
              </div>
            </div>
          </div>
        </GridItem>
        <GridItem xs={12} sm={9} md={9}>
          <div className={classes.caroSec}>
            {Array.isArray(images) ? (
              <Swipe images={images} index="6" size="false" />
            ) : null}
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
