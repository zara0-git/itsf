import React, { useEffect, useState } from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
//import { NewsLists } from "assets/store/NewsLists";
import DateRangeIcon from "@material-ui/icons/DateRange";

import helper from "admin/helper/index";
import server from "config/server";
import defaultImage from "assets/img/image_placeholder.jpg";
import DivLoading from "admin/components/DivLoading";
import Pagination from "@material-ui/lab/Pagination";
import GridOnIcon from "@material-ui/icons/GridOn";
import ListIcon from "@material-ui/icons/List";
import ViewCompactIcon from "@material-ui/icons/ViewCompact";
const styles = (theme) => ({
  switch: {
    marginTop: "-20px",
    float: "right",
    marginRight: "10px",
    color: "#005DA3",
  },
  buttonControl: {
    display: "block",
    marginRight: "10px",
    float: "right",
  },
  cnt: {
    margin: "10px",
    position: "relative",
    borderBottom: "1px solid blue",
    padding: "10px",
    width: "calc(100% - 20px)",
  },
  imgSec: { width: "100%", height: "130px", objectFit: "cover" },
  text: {
    fontSize: "14px",
    fontWeight: "300",
  },

  newsDate1: {
    fontSize: "12px",
    fontWeight: "300",
    alignItems: "center",
    fontStyle: "italic",
    display: "flex",
    justifyContent: "flex-end",
    position: "relative",
    bottom: "0",

    width: "calc(100%)",

    cursor: "pointer",

    "& span": {
      marginRight: "10px",
      marginLeft: "-10px",
    },
  },
  linkSec: {
    color: "black",
  },

  typeSec: {
    color: "white",
    backgroundColor: "green",

    textAlign: "center",
    fontSize: "12px",
    width: "300px",
    fontWeight: "500",
    paddingRight: "5px",
    paddingLeft: "5px",
  },
  bannerSec: {
    overflow: "hidden",
    position: "relative",
  },
  red: {
    backgroundColor: "red",
  },
  green: {
    backgroundColor: "#2CA02C",
  },
  blue: {
    backgroundColor: "#1F77B4",
  },
  orange: {
    backgroundColor: "#FF6D12",
  },
  ftr: { display: "flex" },

  buttonControl: {
    display: "block",
    marginRight: "10px",
    float: "right",
  },
  newsItem: {
    position: "relative",
    margin: "10px",
    width: "calc(100%-20px)",
    justifyContent: "center",
    alignItems: "center",
  },
  newsImg: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  newsImgC: {
    width: "100%",
    height: "180px",
    overflow: "hidden",
  },
  newsTitle: {
    position: "absolute",

    bottom: "0",

    width: "100%",
    height: "35%",
    background: "rgba(0,0,0,0.5)",
    cursor: "pointer",
    color: "white",

    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      background: "rgba(0,0,0,0.2)",
    },
    "& h5": {
      textAlign: "center",
    },
  },
  newsDate: {
    "&:hover": {
      background: "rgba(0,0,0,0.1)",
    },

    fontSize: "12px",
    fontWeight: "300",
    alignItems: "center",
    width: "90px",
    fontStyle: "italic",
    display: "flex",
    justifyContent: "flex-end",
    position: "absolute",
    top: "0",
    background: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "20%",

    cursor: "pointer",
    color: "white",
    "& span": {
      marginRight: "10px",
      marginLeft: "-10px",
    },
  },
});

const useStyles = makeStyles(styles);

export default function AllNewsList(props) {
  const [NewsLists, setNewsLists] = useState([]);
  const [cnt, setCnt] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const url = props.typeId ? props.typeId : null;
  const RootFilter = props.RootFilter ? props.RootFilter : null;

  const handleChange = (event, value) => {
    setPage(value);
    GetData(null, 6, value);
  };

  useEffect(() => {
    GetData(null, 6, 1);
  }, []);

  const GetData = async (SearchFilter, take, value) => {
    setIsLoading(true);
    var skip = (value - 1) * 5;
    var take = take;
    var Filter = RootFilter;
    var Sort = [{ selector: "created_at", desc: true }];

    Filter = SearchFilter
      ? Filter
        ? [Filter, "and", SearchFilter]
        : SearchFilter
      : Filter;

    var select = `["*", "CreateUsers:name"]`;
    let params = helper.Helper.GetRequest({
      filter: Filter,
      sort: Sort,
      take: take,
      skip: skip,
      group: null,
    });
    params += `select=${select}&`;
    params = params.slice(0, -1);

    var ReqData = "";
    ReqData += params;

    var Response = await server.CallService({
      Method: "GET",
      Url: `home/${url}` + ReqData,
    });

    if (
      Response &&
      Response.data &&
      Response.data.Data &&
      Response.data.Success
    ) {
      setNewsLists(Response.data.Data);
      setCnt(Response.data.Total);
    }
    setIsLoading(false);
  };

  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "relative",
          margin: "30px 0",
          borderTop: "1px solid #1F77B4",
        }}
      >
        <h3
          style={{
            position: "absolute",
            top: "-17px",
            left: 0,
            right: "auto",
            bottom: "auto",
            display: "inline-block",
            margin: 0,
            padding: "4px 12px",
            backgroundColor: "#005DA3",
            color: "#fff",
            fontSize: "15px",
            fontWeight: "400",
          }}
        >
          {props.name}
        </h3>
      </div>
      <div style={{ position: "relative" }}>
        {isLoading ? <DivLoading /> : null}
      </div>

      {checked ? (
        <ListIcon className={classes.switch} onClick={toggleChecked} />
      ) : (
        <ViewCompactIcon className={classes.switch} onClick={toggleChecked} />
      )}

      {NewsLists && NewsLists.length > 0 ? (
        !checked ? (
          NewsLists.map((value, key) => {
            return (
              <div>
                <GridContainer className={classes.cnt} key={key}>
                  <GridItem xs={12} sm={4} md={3}>
                    <div className={classes.bannerSec}>
                      <img
                        width="100%"
                        className={classes.imgSec}
                        src={
                          value.main_image
                            ? server.BaseFileUrl + `${url}/` + value.main_image
                            : defaultImage
                        }
                        alt={value.main_image + ""}
                      ></img>
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={9}>
                    <Link
                      to={value.id ? `/home/${url}/` + value.id : "#"}
                      className={classes.linkSec}
                    >
                      <h5 className={classes.h5tag}>
                        {value.title.length < 40
                          ? value.title
                          : value.title.substr(0, 39) + " . . ."}
                      </h5>

                      <p
                        className={classes.text}
                        dangerouslySetInnerHTML={{
                          __html: value.subtitle ? value.subtitle : "",
                        }}
                      />

                      <div className={classes.ftr}>
                        <div className={classes.newsDate1}>
                          <span>
                            {value.type && value.type === "Онцгой" ? (
                              <span
                                className={classes.typeSec + " " + classes.red}
                              >
                                {value.type}
                              </span>
                            ) : value.type && value.type === "Фото" ? (
                              <span
                                className={
                                  classes.typeSec + " " + classes.orange
                                }
                              >
                                {value.type}
                              </span>
                            ) : value.type && value.type === "Видео" ? (
                              <span
                                className={classes.typeSec + " " + classes.blue}
                              >
                                {value.type}
                              </span>
                            ) : (
                              <span
                                className={
                                  classes.typeSec + " " + classes.green
                                }
                              >
                                {value.type}
                              </span>
                            )}
                          </span>
                          <span>
                            <DateRangeIcon
                              style={{
                                width: "13",
                                marginRight: "5px",
                                marginTop: "4px",
                              }}
                            />
                          </span>
                          <span>{value.created_at.substr(0, 10)}</span>
                        </div>
                      </div>
                    </Link>
                  </GridItem>
                </GridContainer>
              </div>
            );
          })
        ) : (
          <GridContainer>
            {NewsLists.map((value, key) => {
              return (
                <GridItem xs={12} sm={6} md={4} key={key}>
                  <Link to={value.id ? `/home/${url}/` + value.id : "#"}>
                    <div className={classes.newsItem}>
                      <div className={classes.newsImgC}>
                        <img
                          className={classes.newsImg}
                          src={
                            value.main_image
                              ? server.BaseFileUrl +
                                `${url}/` +
                                value.main_image
                              : defaultImage
                          }
                        />
                      </div>

                      <div className={classes.newsTitle}>
                        <h5 className={classes.h5tag}>
                          {value.title.length < 40
                            ? value.title
                            : value.title.substr(0, 40) + " . . ."}
                        </h5>
                      </div>

                      <div className={classes.newsDate}>
                        <span>
                          <DateRangeIcon
                            style={{
                              width: "13",
                              marginRight: "5px",
                              marginTop: "4px",
                            }}
                          />
                        </span>
                        <span>{value.created_at.substr(0, 10)}</span>
                      </div>
                    </div>
                  </Link>
                </GridItem>
              );
            })}
          </GridContainer>
        )
      ) : null}

      <div className={classes.buttonControl}>
        <Pagination
          color="primary"
          count={
            cnt / 5 > Math.floor(cnt / 5)
              ? Math.floor(cnt / 5) + 1
              : Math.floor(cnt / 5)
          }
          page={page}
          boundaryCount={cnt}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
