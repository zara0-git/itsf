import React from "react";
// my components
import CustomSnackbar from "admin/components/CustomSnackbar";
import CustomSweetAlert from "admin/components/CustomSweetAlert";

class Helper {
  isNotEmpty(value) {
    return value !== undefined && value !== null && value !== "";
  }

  GetRequest(loadOptions) {
    process.env.NODE_ENV === "development" && console.log({ loadOptions });
    let params = "?";
    ["skip", "take", "sort", "filter", "group"].forEach((i) => {
      if (i in loadOptions && this.isNotEmpty(loadOptions[i])) {
        var Option = loadOptions[i];
        params += `${i}=${JSON.stringify(Option)}&`;
      }
    });

    return params;
  }

  ShowAlert = (Success, Message, CloseFunction) => {
    return (
      <CustomSnackbar
        Success={Success}
        Message={Message}
        CloseFunction={CloseFunction}
      />
    );
  };

  ShowConfirm = (Message, ConfirmFunction, CancelFunction) => {
    return (
      <CustomSweetAlert
        Message={Message}
        Confirm={ConfirmFunction}
        Hide={CancelFunction}
      />
    );
  };

  BaseDownloadFile = (file, callback) => {
    process.env.NODE_ENV === "development" && console.log({ file });
    if (file && file.FileInfo) {
      if (file.File) {
        const url = URL.createObjectURL(file.File);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", file.File.name);
        document.body.appendChild(link);
        link.click();
      }
    }
  };
}

export default new Helper();
