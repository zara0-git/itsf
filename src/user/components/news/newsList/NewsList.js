import React, { useEffect, useState } from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import helper from "admin/helper/index";

import server from "config/server";
import defaultImage from "assets/img/image_placeholder.jpg";
import DivLoading from "admin/components/DivLoading";
import Pagination from "@material-ui/lab/Pagination";
import DateRangeIcon from "@material-ui/icons/DateRange";
const styles = (theme) => ({
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

export default function NewsList(props) {
  const classes = { ...useStyles() };
  const [NewsLists, setNewsLists] = useState([]);
  const [cnt, setCnt] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const url = props.typeId ? props.typeId : null;
  const RootFilter = props.RootFilter ? props.RootFilter : null;
  useEffect(() => {
    GetData(null, 6, 1);
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
    GetData(null, 6, value);
  };

  const GetData = async (SearchFilter, take, value) => {
    setIsLoading(true);
    var skip = (value - 1) * take;
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

  return (
    <div style={{ position: "relative" }}>
      {props.paginationHide ? null : (
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
      )}
      <GridItem>
        <div style={{ position: "relative" }}>
          {isLoading ? <DivLoading /> : null}
        </div>
      </GridItem>
      <GridContainer>
        {NewsLists && NewsLists.length > 0
          ? NewsLists.map((value, key) => {
              return (
                <GridItem xs={12} sm={6} md={4} key={key}>
                  <Link
                    to={
                      value.id
                        ? `/home/${url}/${
                            props.RootFilter ? props.RootFilter[2] + "/" : ""
                          }` + value.id
                        : "#"
                    }
                  >
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
            })
          : null}
      </GridContainer>
      {props.paginationHide ? null : (
        <div className={classes.buttonControl}>
          <Pagination
            color="primary"
            count={
              cnt / 6 > Math.floor(cnt / 6)
                ? Math.floor(cnt / 6) + 1
                : Math.floor(cnt / 6)
            }
            page={page}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
}
