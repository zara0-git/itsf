import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import DivLoading from "admin/components/DivLoading";
import EBSDetails from "./EBSDetails";
import { makeStyles } from "@material-ui/core";

import { useParams } from "react-router-dom";

import helper from "admin/helper/index";
import server from "config/server";

const styles = (theme) => ({
  item: {
    width: "calc(100%-30px)",
    border: "1px solid rgb(204,204,204)",
    display: "flex",
    borderRadius: "10px",
    overflow: "hidden",
    paddingLeft: "10px",

    alignItems: "center",
    margin: "10px",
  },
  link: {
    color: "black",
    fontSize: "12px",
    fontWeight: "500",
    margin: "10px",
    "&:hover ": {
      color: "#F44336",
    },
    "&:focus ": {
      color: "rgb(76,175,80)",
    },
  },
  Tit: {
    borderBottom: "1px solid blue",
  },
});

const useStyles = makeStyles(styles);
const wd = window.screen.width;
var w1 = 0;

export default function EBS1() {
  const classes = { ...useStyles() };
  const { id } = useParams();

  const [EBSDetail, setEBSDetail] = React.useState(null);
  const [EBSList, setEBSList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    GetData();
  }, []);

  const GetData = async (SearchFilter) => {
    setIsLoading(true);
    var { skip } = 0;
    var take = 25;
    var Filter = ["customer_type", "=", "ebs"];
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
      Url: "home/customers" + ReqData,
    });

    if (
      Response &&
      Response.data &&
      Response.data.Data &&
      Response.data.Success
    ) {
      setEBSList(Response.data.Data);
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    GetData1(id);
  }, [id]);
  const GetData1 = async (id) => {
    if (id) {
      setIsLoading(true);
      var Response = await server.CallService({
        Method: "GET",
        Url: "home/customers/" + id,
      });

      if (
        Response &&
        Response.data &&
        Response.data.Data &&
        Response.data.Success
      ) {
        setEBSDetail(Response.data.Data);
      }
      setIsLoading(false);
    }
  };

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <div>
      <div>{isLoading ? <DivLoading /> : null}</div>
      <GridContainer>
        {EBSDetail ? (
          <>
            <GridItem xs={12} sm={12} md={9}>
              <>
                <h5 className={classes.Tit}>{EBSDetail.name}</h5>
                <EBSDetails tab={EBSDetail} />
                {console.log(EBSDetail)}
              </>
            </GridItem>
            <GridItem xs={12} sm={4} md={3}>
              {EBSList
                ? EBSList.map((item, key) => {
                    return (
                      <GridItem xs={12} sm={12} md={12}>
                        <div className={classes.item}>
                          <img
                            src={
                              item.main_image
                                ? `${server.BaseFileUrl}customer/${item.main_image}`
                                : null
                            }
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                            }}
                          />
                          <Link
                            to={"/home/ebs/" + item.id}
                            className={classes.link}
                          >
                            <p>{item.title}</p>
                          </Link>
                        </div>
                      </GridItem>
                    );
                  })
                : null}
            </GridItem>
          </>
        ) : (
          <>
            {EBSList
              ? EBSList.map((item, key) => {
                  return (
                    <GridItem xs={12} sm={12} md={3}>
                      <div className={classes.item}>
                        <img
                          src={
                            item.main_image
                              ? `${server.BaseFileUrl}customer/${item.main_image}`
                              : null
                          }
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                          }}
                        />
                        <Link
                          to={"/home/ebs/" + item.id}
                          className={classes.link}
                        >
                          <p>{item.title}</p>
                        </Link>
                      </div>
                    </GridItem>
                  );
                })
              : null}
          </>
        )}
      </GridContainer>
    </div>
  );
}
