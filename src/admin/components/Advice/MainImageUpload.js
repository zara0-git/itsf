import React from "react";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import CloseIcon from "@material-ui/icons/Close";

// core components
import Button from "components/CustomButtons/Button.js";
// helper
import Helper from "admin/helper/index";

import defaultImage from "assets/img/image_placeholder.jpg";

const styles = {
  // File Upload
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  download: {
    display: "none",
    position: "absolute",
    cursor: "pointer",
    bottom: "0",
    left: "0",
    right: "0",
    zIndex: "999",
    textAlign: "center",
    color: "#FFF",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: "0 4px 4px",
    fontWeight: "400",
    "&:hover": {
      display: "block",
    },
  },

  // Image Single
  thumbnailImage: {
    display: "inline-block",
    float: "left",
    borderRadius: "0",
    marginTop: "15px",
    overflow: "inherit",
    width: "550px",
    height: "auto",
    // maxHeight: "400px",
    background: "transparent",
    boxShadow: "none !important",
    "&:hover .upload": {
      display: "block",
    },
  },
  upload: {
    cursor: "pointer",
    bottom: "0",
    left: "0",
    right: "0",
    zIndex: "999",
    textAlign: "center",
    color: "#FFF",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: "0 8px 14px",
    fontWeight: "400",
    "&:hover": {
      display: "block",
    },
  },
  close: {},
  closeIconButton: {
    backgroundColor: "#ff3b3b",
    boxShadow: "0 1px 4px 0 rgba(255, 255, 255, 0.34)",
    color: "#FFF",
    padding: "16px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#ff7878",
    },
  },
  imagePanel: {
    position: "relative",
    overflow: "hidden",
    width: "550px",
    height: "auto",
    objectFit: "cover",
  },
  imageSingle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

const useStyles = makeStyles(styles);

export default function (props) {
  var classes = useStyles();
  const [Value, setValue] = React.useState(props.Value ? props.Value : []);
  const [update, setUpdate] = React.useState(false);
  const FileLink = props.FileLink ? props.FileLink : null;
  //   const [Procent, setProcent] = React.useState(0);

  console.log({ MainImage: Value });

  let fileInput = React.createRef();

  const Remove = () => {
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
      <div>
        <Button
          color="rose"
          onClick={() => {
            fileInput.current.click();
          }}
        >
          <i
            className="fas fa-camera-retro"
            style={{ marginRight: "12px" }}
          ></i>
          Зураг сонгох
        </Button>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={"thumbnail " + classes.thumbnailImage}>
          <div className={classes.imagePanel}>
            <img
              className={classes.imageSingle}
              src={
                Value.length > 0
                  ? Value[0].FileSrc
                  : FileLink
                  ? FileLink
                  : defaultImage
              }
            />
          </div>
        </div>
        {Value.length > 0 ? (
          <div
            style={{
              float: "left",
              display: "inline-block",
              marginLeft: "-24px",
            }}
          >
            <IconButton
              className={classes.closeIconButton}
              size="small"
              onClick={() => {
                Remove();
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
