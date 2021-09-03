import React, { useEffect, useState } from "react";

import helper from "admin/helper/index";
import server from "config/server";
import fileDownload from "js-file-download";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Download from "@material-ui/icons/GetApp";
import Visibility from "@material-ui/icons/Visibility";
import Pagination from "@material-ui/lab/Pagination";
import Button from "components/CustomButtons/Button.js";
import DivLoading from "admin/components/DivLoading";
// import { NewspaperList } from "assets/store/NewspaperList";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { Hidden } from "@material-ui/core";

import zurag from "assets/img/manai.jpg";
const styles = (theme) => ({
  cnt: {
    margin: "10px",
    position: "relative",
    borderBottom: "1px solid blue",
    padding: "10px",
    width: "calc(100% - 20px)",
  },

  buttonControl: {
    display: "block",
    marginRight: "10px",
    float: "right",
  },

  newsDate: {
    fontSize: "12px",
    fontWeight: "300",
    alignItems: "center",

    fontStyle: "italic",
    display: "flex",

    cursor: "pointer",
  },
  newsDate1: {
    display: "flex",
    justifyContent: "flex-end",
    position: "relative",

    cursor: "pointer",
  },
  h5tag: {},
  buttonSec: {
    position: "absolute",

    top: " auto",
    bottom: "10px",
    width: "auto",

    right: "5px",
  },
});

const useStyles = makeStyles(styles);

export default function FileList(props) {
  const [EBSList, setEBSList] = useState([]);
  const classes = useStyles();
  const url = props.typeId ? props.typeId : null;
  const [cnt, setCnt] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    GetData(null, 5, value);
  };

  useEffect(() => {
    GetData(null, 5, 0);
  }, [props.name]);

  const GetData = async (SearchFilter, take, value) => {
    setIsLoading(true);
    var skip = (value - 1) * 5;
    var take = take;
    var Filter = props.RootFilter ? props.RootFilter : null;
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
      setEBSList(Response.data.Data);
      setCnt(Response.data.Total);
    }
    setIsLoading(false);
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

      {EBSList && EBSList.length > 0
        ? EBSList.map((value, key) => {
            return (
              <GridContainer className={classes.cnt} key={key}>
                <GridItem xs={12} sm={4} md={3}>
                  <img width="100%" className="imgSec" src={zurag} />
                </GridItem>
                <GridItem xs={12} sm={8} md={5}>
                  <h5 className={classes.h5tag}>
                    {value.title.length < 39
                      ? value.title
                      : value.title.substr(0, 39) + " . . ."}
                  </h5>
                  <p className={classes}>
                    {value.subtitle.length < 50
                      ? value.subtitle
                      : value.subtitle.substr(0, 60) + " . . ."}
                  </p>

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
                </GridItem>
                <GridItem xs={12} sm={8} md={4}>
                  <div className={classes.buttonSec}>
                    <a
                      href={
                        value.main_file
                          ? `${server.BaseFileUrl}${url}/${value.main_file}`
                          : null
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        color="success"
                        size="sm"
                        className={classes.marginRight}
                      >
                        <Visibility className={classes.icons} /> Үзэх
                      </Button>
                    </a>

                    <Button
                      color="danger"
                      size="sm"
                      className={classes.marginRight}
                      onClick={() => {
                        console.log("tatah");
                      }}
                    >
                      <Download className={classes.icons} /> Татах
                    </Button>
                  </div>
                </GridItem>
              </GridContainer>
            );
          })
        : null}
      <div className={classes.buttonControl}>
        <Pagination
          color="primary"
          count={
            cnt / 5 > Math.floor(cnt / 5)
              ? Math.floor(cnt / 5) + 1
              : Math.floor(cnt / 5)
          }
          page={page}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
