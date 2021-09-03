import React from "react";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import CloseIcon from "@material-ui/icons/Close";
// helper
import Helper from "admin/helper/index";

import defaultImage from "assets/img/image_placeholder.jpg";

import styles from "assets/jss/material-dashboard-pro-react/custom/baseControlsStyles";

const useStyles = makeStyles(styles);

export default function BaseImageSingle(props) {
  var classes = useStyles();
  const [Value, setValue] = React.useState(props.Value ? props.Value : []);
  const [update, setUpdate] = React.useState(false);
  //   const [Procent, setProcent] = React.useState(0);

  let fileInput = React.createRef();

  const Remove = (Name) => {
    if (props.ChangeValue) {
      props.ChangeValue([]);
    }
    setValue([]);
    setUpdate(!update);
  };

  const ChooseFile = async (e) => {
    e.preventDefault();

    let file = e.target.files[0];
    var FileSrc = null;
    if (file !== undefined) {
      if (file.type.indexOf("image") > -1) {
        FileSrc = await Helper.FileHelper.GetFileSrc(file);
      }
      var NewValue = [
        {
          FileSrc: FileSrc,
          File: file,
          Type: file.type,
          FileInfo: { Name: file.name, FileSize: file.size },
        },
      ];
      if (props.ChangeValue) {
        props.ChangeValue(NewValue);
      }
      setValue(NewValue);
    }
    setUpdate(!update);
  };

  return (
    <div className="fileinput">
      <div style={{ position: "relative" }}>
        <div className={"thumbnail " + classes.thumbnailImage}>
          <div className={classes.imagePanel}>
            <img
              className={classes.imageSingle}
              src={Value.length > 0 ? Value[0].FileSrc : defaultImage}
              alt="SingleImage"
            />
            <div
              className={"upload " + classes.upload}
              onClick={() => {
                fileInput.current.click();
              }}
            >
              <i
                className={"fa fa-camera-retro"}
                style={{ fontSize: "24px", margin: "10px" }}
              ></i>
            </div>
          </div>
        </div>
        {Value.length > 0 ? (
          <div className={classes.close}>
            <IconButton
              className={classes.closeIconButton}
              size="small"
              onClick={() => {
                Remove(Value[0].FileInfo.Name);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </div>
        ) : null}
      </div>
      <input
        type="file"
        onChange={ChooseFile}
        ref={fileInput}
        accept="image/*"
      />
    </div>
  );
}
