import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import Download from "@material-ui/icons/GetApp";
import helper from "admin/helper/index";
import server from "config/server";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import DivLoading from "admin/components/DivLoading";
import Button from "components/CustomButtons/Button.js";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Pagination from "@material-ui/lab/Pagination";

const styles = (theme) => ({
  buttonControl: {
    display: "block",
    marginRight: "10px",
    float: "right",
    marginTop: "10px",
  },
});

//import Table from "user/components/PdfList/Table";

const useStyles = makeStyles(styles);

export default function PdfList(props) {
  const [EBSList, setEBSList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = props.typeId ? props.typeId : null;
  const [cnt, setCnt] = useState(0);

  const [page, setPage] = useState(1);
  const take = 5;

  const handleChange = (event, value) => {
    setPage(value);
    GetData(null, take, value);
  };

  useEffect(() => {
    GetData(null, take, 0);
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

  const classes = useStyles();

  return (
    <>
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
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center" width="50px"></TableCell>
                <TableCell align="left" width="280px">
                  Нэр
                </TableCell>

                <TableCell align="center" width="50px">
                  Үзэх Татах
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {EBSList && EBSList.length > 0 ? (
                EBSList.map((row, index) => (
                  <TableRow key={row.id} hover>
                    <TableCell align="center">
                      {take * (page - 1) + index + 1}
                    </TableCell>
                    <TableCell align="left">{row.title}</TableCell>

                    <TableCell align="center">
                      <a
                        href={
                          row.main_file
                            ? `${server.BaseFileUrl}ourRules/${row.main_file}`
                            : null
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button justIcon color="info" simple>
                          <Visibility
                            className={
                              classes.socialButtonsIcons +
                              " " +
                              classes.marginRight
                            }
                            style={{
                              width: "24px",
                              height: "24px",
                            }}
                          />
                        </Button>
                      </a>
                      <Button
                        justIcon
                        color="success"
                        simple
                        onClick={() => {
                          this.DeleteConfirm(row.id);
                        }}
                      >
                        <Download
                          className={
                            classes.socialButtonsIcons +
                            " " +
                            classes.marginRight
                          }
                          style={{
                            width: "24px",
                            height: "24px",
                          }}
                        />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow hover>
                  <TableCell colSpan={5}>
                    <div
                      style={{
                        width: "100%",
                        padding: "8px 0",
                        textAlign: "center",
                      }}
                    >
                      Мэдээ олдсонгүй
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </GridItem>
      </GridContainer>
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
    </>
  );
}
