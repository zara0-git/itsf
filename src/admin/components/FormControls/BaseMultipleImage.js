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
import helper from "admin/helper/index";
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

export default function (props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const [Value, setValue] = React.useState(
    props.Value && props.Value !== undefined ? props.Value : []
  );
  const [Update, SetUpdate] = React.useState(false);
  //   const [Procent, setProcent] = React.useState(0);

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
    helper.Helper.BaseDownloadFile(file);
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
        FileSrc = await helper.FileHelper.GetFileSrc(file);
      }
      NewValue.push({
        FileSrc: FileSrc,
        File: file,
        Type: file.type,
        FileInfo: { Name: file.name, FileSize: file.size },
      });
    }
    if (props.ChangeValue) {
      props.ChangeValue(NewValue);
    }
    setValue(NewValue);
    SetUpdate(!Update);
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <div
          className="fileinput"
          style={{ display: "inline-block", width: "100%" }}
        >
          <div style={{ margin: "15px 0" }}>
            <Button
              color="primary"
              onClick={() => {
                fileInput.current.click();
              }}
              size="sm"
            >
              <i className={"fas fa-image"} style={{ marginRight: "12px" }}></i>
              {t("Бусад зурагнууд")}
            </Button>
          </div>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={ChooseFile}
            ref={fileInput}
          />
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
                }
              })
            : null}
        </div>
      </GridItem>
    </GridContainer>
  );
}
