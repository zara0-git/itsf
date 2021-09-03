import React from "react";

import Snackbar from "components/Snackbar/Snackbar.js";

export default function (props) {
  return (
    <Snackbar
      place="bc"
      color={props.Success ? "success" : "danger"}
      message={props.Message ? props.Message : "Алдаа гарлаа !!!"}
      open={true}
      closeNotification={() => {
        props.CloseFunction && props.CloseFunction();
      }}
      close
    />
  );
}
