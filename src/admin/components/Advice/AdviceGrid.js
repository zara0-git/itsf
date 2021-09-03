import React from "react";
import server from "config/server.js";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import RefreshIcon from "@material-ui/icons/Refresh";
import SearchIcon from "@material-ui/icons/Search";

// default components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import DivLoading from "admin/components/DivLoading";
import CustomPagination from "admin/components/FormControls/CustomPagination";
// helper
import helper from "admin/helper/index";
// history
import History from "History.js";

import defaultImage from "assets/img/image_placeholder.jpg";

// import styles from "assets/jss/material-dashboard-pro-react/views/buttonsStyle.js";

const styles = {
  marginRight: {
    marginRight: "5px",
  },
  icons: {
    width: "17px",
    height: "17px",
  },
  socialButtonsIcons: {
    fontSize: "24px",
    marginTop: "-2px",
    position: "relative",
  },
  input: {
    color: "#495057",
    height: "unset",
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: 1.5,
      opacity: "1",
    },
    "&::placeholder": {
      color: "#AAAAAA",
    },
  },

  inputUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important",
    },
    "&:after": {
      borderColor: "#9c27b0",
    },
    "& + p": {
      fontWeight: "300",
    },
  },
};

class AdviceGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Alert: null,
      Confirm: null,
      isLoading: false,
      Data: [],
      Total: 0,
    };
    this.RootFilter = props.RootFilter ? props.RootFilter : null;
    this.RootSort = [{ selector: "created_at", desc: true }];
    this.take = 10;
    this.skip = 0;
    this.server = server;
    this.id = null;
    this.myTimeout = null;
    this.CustomPaginationRef = React.createRef();
  }

  componentDidMount() {
    this.GetData(null);
  }

  ChangePage = (skip, take) => {
    this.take = take;
    this.skip = skip * take;
    this.GetData(null);
  };

  GetSearchData = (SearchText) => {
    var SearchText = SearchText && SearchText.replace(/ /g, "");
    var Filter = null;
    Filter = SearchText &&
      SearchText !== "" && [
        ["title", "contains", SearchText],
        "or",
        ["subtitle", "contains", SearchText],
        "or",
        ["content", "contains", SearchText],
      ];
    this.GetData(Filter);
  };

  GetData = async (SearchFilter) => {
    this.setState({
      isLoading: true,
    });

    var { skip, take } = this;
    var Filter = this.RootFilter;
    var Sort = this.RootSort;

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

    var Response = await this.server.CallService({
      Method: "GET",
      Url: "advice" + ReqData,
    });

    if (
      Response &&
      Response.data &&
      Response.data.Data &&
      Response.data.Success
    ) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      this.setState({
        Data: Response.data.Data,
        Total: Response.data.Total,
      });
    }

    this.setState({
      isLoading: false,
    });
  };

  DeleteConfirm = (id) => {
    if (id) {
      var Confirm = helper.Helper.ShowConfirm(
        "Устгахдаа итгэлтэй байна уу !!!",
        () => {
          this.setState({ Confirm: null });
          this.Delete(id, (Success) => {
            console.log({ Success });
            Success && this.Refresh();
          });
        },
        () => {
          this.setState({ Confirm: null });
        }
      );
      this.setState({ Confirm });
    }
  };

  Delete = async (id, callback) => {
    this.id = id;
    this.setState({
      isLoading: true,
    });
    if (this.id) {
      var Response = await this.server.CallService({
        Method: "DELETE",
        Url: "advice/" + id,
      });

      if (Response && Response.data && Response.data.Success) {
        callback(Response.data.Success);
      }
      this.setState({
        isLoading: false,
      });
    }
  };

  Refresh = () => {
    this.CustomPaginationRef &&
      this.CustomPaginationRef.setState({ page: 0, rowsPerPage: 10 });
    this.ChangePage(0, 20);
  };

  render() {
    const { classes } = this.props;
    const { Data, isLoading, Confirm, Total } = this.state;
    const { take } = this;

    return (
      <div>
        {isLoading ? <DivLoading /> : null}
        <GridContainer>
          {Confirm}
          <GridItem xs={12} sm={6} md={6}>
            <Button
              variant="contained"
              size="sm"
              color="info"
              splice={1}
              onClick={this.Refresh}
              style={{ marginRight: "5px" }}
            >
              <RefreshIcon style={{ marginRight: "4px" }} /> Сэргээх
            </Button>
            <Button
              variant="contained"
              size="sm"
              color="success"
              splice={1}
              onClick={() => {
                History.push(`/admin/advice/${this.props.typeId}/create`);
              }}
              style={{ marginRight: "5px" }}
            >
              <AddIcon style={{ marginRight: "4px" }} /> Шинэ
            </Button>
          </GridItem>
          <GridItem md={6}>
            <div
              style={{ float: "right", display: "flex", alignItems: "center" }}
            >
              <TextField
                placeholder="Хайх үгээ бичнэ үү..."
                onKeyDown={(event) => {
                  if (event.keyCode === 13) {
                    var SearchText = event.target.value;
                    this.GetSearchData(SearchText);
                  }
                }}
                onChange={(event) => {
                  if (this.myTimeout) {
                    clearTimeout(this.myTimeout);
                  }
                  var SearchText = event.target.value;
                  this.myTimeout = setTimeout(() => {
                    this.GetSearchData(SearchText);
                  }, 1000);
                }}
                InputProps={{
                  classes: {
                    input: classes.input,
                    underline: classes.inputUnderline,
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon style={{ color: "#999" }} />
                    </InputAdornment>
                  ),
                }}
              />
              {/* <Button
                color="danger"
                size="sm"
                onClick={() => {
                  this.GetData(SearchText);
                }}
                style={{ marginLeft: "8px" }}
              >
                Хайх
              </Button> */}
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer style={{ marginTop: "15px" }}>
          <GridItem xs={12} sm={12} md={12}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell width="160px"></TableCell>
                  <TableCell align="center" width="280px">
                    Гарчиг
                  </TableCell>
                  <TableCell align="center">Үүсгэсэн хэрэглэгч</TableCell>
                  <TableCell align="center">Үүсгэсэн огноо</TableCell>
                  <TableCell align="center" width="140px"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Data && Data.length > 0 ? (
                  Data.map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell>
                        <img
                          src={
                            row.main_image
                              ? this.server.BaseFileUrl +
                                "advice/" +
                                row.main_image
                              : defaultImage
                          }
                          width="150"
                          alt={row.main_image + ""}
                        />
                      </TableCell>
                      <TableCell align="center">{row.title}</TableCell>
                      <TableCell align="center">
                        {row["CreateUsers:name"]}
                      </TableCell>
                      <TableCell align="center">
                        {helper.ObjectHelper.getDateYMDHMS({
                          DateStr: row.created_at,
                        })}
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          justIcon
                          color="success"
                          simple
                          onClick={() => {
                            History.push(
                              `/admin/advice/${this.props.typeId}/edit/` +
                                row.id
                            );
                          }}
                        >
                          <EditIcon
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
                        <Button
                          justIcon
                          color="danger"
                          simple
                          onClick={() => {
                            this.DeleteConfirm(row.id);
                          }}
                        >
                          <DeleteIcon
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

        <CustomPagination
          take={take}
          Total={Total}
          ChangePage={this.ChangePage}
          ref={(ref) => (this.CustomPaginationRef = ref)}
        />
      </div>
    );
  }
}

export default withStyles(styles)(AdviceGrid);
