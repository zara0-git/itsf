import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import styles from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";

const useStyles = makeStyles(styles);

export default function (props) {
  const classes = useStyles();
  return (
    <SweetAlert
      warning
      style={{ display: "block", marginTop: "-100px" }}
      title={
        props.Message ? (
          <span style={{ fontSize: "18px" }}>{props.Message}</span>
        ) : (
          ""
        )
      }
      onConfirm={() => props.Confirm()}
      onCancel={() => props.Hide()}
      confirmBtnCssClass={classes.button + " " + classes.success}
      cancelBtnCssClass={classes.button + " " + classes.danger}
      confirmBtnText="Тийм"
      cancelBtnText="Үгүй"
      showCancel
    >
      {props.MoreInfo}
    </SweetAlert>
  );
}
