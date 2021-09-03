import React from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import CloseIcon from "@material-ui/icons/Close";
// default components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// helper
import Helper from "admin/helper/index";
// translation
import { useTranslation } from "react-i18next";

import styles from "assets/jss/material-dashboard-pro-react/custom/baseControlsStyles";

const LightTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#FFF",
    textTransform: "uppercase",
    fontSize: 11,
    marginTop: "2px",
  },
}))(Tooltip);

const useStyles = makeStyles(styles);
// var Value = [{
// id_data
// ext: "JPG",
// hash: "1",
// original_name: "1212",
// generated_name: "dwdw"
// LinkedObjectName:"DoctorsProfile",
// LinkedObjectId:"319",
// File:"blob",
// FileSrc:"base64" only picture,
// }];

export default function BaseFileUpload(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const [Value, setValue] = React.useState(
    props.Value && props.Value !== undefined ? props.Value : []
  );
  const [Update, SetUpdate] = React.useState(false);
  //   const [Procent, setProcent] = React.useState(0);
  const Config = props.Config ? props.Config : null;

  let fileInput = React.createRef();

  React.useEffect(() => {
    setValue(props.Value);
  }, [props.Value]);

  //FileUrl: URL.createObjectURL(file),
  //   const ShowProgress = (evt) => {
  //     console.log((evt.loaded / evt.total) * 100);
  //     setProcent((evt.loaded / evt.total) * 100);
  //   };

  //   const ResetProgressBar = () => {
  //     setProcent(0);
  //   };

  const DownloadFile = (file) => {
    // Helper.BaseCrudHelper.BaseDownloadFile(file);
  };

  const Remove = (Name) => {
    var NewValue = Value ? Value : [];
    NewValue = NewValue.filter((s) => s.FileInfo.Name !== Name);
    if (props.ChangeValue) {
      props.ChangeValue(NewValue);
    }
    fileInput.current.value = "";
    setValue(NewValue);
    SetUpdate(!Update);
  };

  const ChooseFile = async (e) => {
    e.preventDefault();

    let files = e.target.files;
    var NewValue = Value ? Value : [];
    for (var l = 0; l < files.length; l++) {
      var file = files[l];
      var FileSrc = null;
      if (file.type.indexOf("image") > -1) {
        FileSrc = await Helper.FileHelper.GetFileSrc(file);
      }
      NewValue.push({
        FileSrc: FileSrc,
        File: file,
        Type: file.type,
        FileInfo: { Name: file.name },
      });
    }
    if (props.ChangeValue) {
      props.ChangeValue(NewValue);
    }
    setValue(NewValue);
    SetUpdate(!Update);
  };

  const GetControl = () => {
    return (
      <div
        className="fileinput"
        style={{ display: "inline-block", width: "100%" }}
      >
        <div>
          <Button
            color="primary"
            onClick={() => {
              fileInput.current.click();
            }}
            size="sm"
          >
            {t("Choose files")}
          </Button>
        </div>
        <input type="file" multiple onChange={ChooseFile} ref={fileInput} />
        {Value
          ? Value.map((file, key) => {
              if (file.Type.indexOf("image") > -1) {
                return (
                  <div
                    style={{
                      float: "left",
                      display: "inline-block",
                      position: "relative",
                    }}
                    key={"Div" + key}
                  >
                    <div className={"thumbnail " + classes.thumbnail}>
                      <div className={classes.imagePanel}>
                        <img
                          src={file.FileSrc}
                          className={classes.image}
                          alt={file.FileInfo.name}
                        />
                      </div>
                      <LightTooltip title={t("Download")}>
                        <div
                          className={"download " + classes.download}
                          onClick={() => {
                            DownloadFile(file);
                          }}
                        >
                          <i
                            className={"fa fa-download"}
                            style={{ fontSize: "18px", marginTop: "4px" }}
                          ></i>
                        </div>
                      </LightTooltip>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: "-10px",
                        right: "14px",
                        zIndex: "999",
                      }}
                    >
                      <IconButton
                        aria-label="remove"
                        style={{
                          backgroundColor: "#5c5c5c",
                          boxShadow: "0 1px 4px 0 rgba(255, 255, 255, 0.34)",
                          color: "#FFF",
                        }}
                        size="small"
                        onClick={() => {
                          Remove(file.FileInfo.Name);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      marginBottom: "18px",
                      padding: "2px 8px",
                      borderLeft: "2px solid #ccc",
                    }}
                    key={"Div" + key}
                  >
                    <div
                      style={{
                        float: "left",
                        minWidth: "250px",
                      }}
                    >
                      <LightTooltip title={t("Download")}>
                        <a
                          style={{
                            cursor: "pointer",
                          }}
                          className={classes.link}
                          onClick={() => {
                            DownloadFile(file);
                          }}
                        >
                          {file.FileInfo.Name}
                        </a>
                      </LightTooltip>
                    </div>
                    <div
                      style={{ display: "inline-block", marginLeft: "15px" }}
                    >
                      <IconButton
                        aria-label="remove"
                        style={{
                          padding: "0",
                          backgroundColor: "#ff1414",
                          boxShadow: "0 1px 4px 0 rgba(255, 255, 255, 0.34)",
                          color: "#FFF",
                        }}
                        size="small"
                        onClick={() => {
                          Remove(file.FileInfo.Name);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    </div>
                  </div>
                );
              }
            })
          : null}
      </div>
    );
  };

  return (
    <div>
      {props.WithLabel ? (
        <GridContainer>
          <GridItem xs={12} sm={12} md={props.mdLabel ? props.mdLabel : 3}>
            <FormLabel className={classes.labelHorizontal}>
              {Config.Label
                ? t(Config.Label + "") +
                  ":" +
                  (Config.Rules && Config.Rules.Required === true ? " *" : "")
                : ""}
            </FormLabel>
          </GridItem>
          <GridItem xs={12} sm={12} md={props.mdValue ? props.mdValue : 9}>
            {GetControl()}
          </GridItem>
        </GridContainer>
      ) : (
        GetControl()
      )}
    </div>
  );
}
