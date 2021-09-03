import React from "react";
import server from "config/server.js";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import CloseIcon from "@material-ui/icons/Close";

// core components
import Button from "components/CustomButtons/Button.js";
import PDFViewer from "admin/components/PDFViewer.js";
// helper
import helper from "admin/helper/index";

const styles = {
  // File Upload
  link: {
    fontSize: "16px",
    fontWeight: "400",
    "&:hover": {
      textDecoration: "underline",
    },
  },
};

const useStyles = makeStyles(styles);

const LightTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#FFF",
    textTransform: "uppercase",
    fontSize: 11,
    marginTop: "2px",
  },
}))(Tooltip);

export default function (props) {
  var classes = useStyles();
  const [Value, setValue] = React.useState(props.Value ? props.Value : []);
  const [update, setUpdate] = React.useState(false);
  const [zoomDialog, setZoomDialog] = React.useState(null);

  const GenName = props.GenName ? props.GenName : null;

  let fileInput = React.createRef();

  React.useEffect(() => {
    if (props.Name) {
      var FileSrc = null;
      setValue([
        {
          FileSrc: FileSrc,
          File: null,
          Type: null,
          FileInfo: { Name: props.Name, FileSize: null },
        },
      ]);
    }
  }, [props.Name]);

  const Remove = () => {
    if (props.ChangeValue) {
      props.ChangeValue([]);
    }
    setValue([]);
    setUpdate(!update);
  };

  const View = () => {
    setZoomDialog(
      <PDFViewer
        FileSrc={
          Value[0] &&
          (Value[0].FileSrc
            ? Value[0].FileSrc
            : server.BaseFileUrl + "methodology/" + GenName)
        }
        Hide={() => {
          setZoomDialog(null);
        }}
      />
    );
  };

  const ChooseFile = async (e) => {
    e.preventDefault();

    let file = e.target.files[0];
    var FileSrc = null;
    if (file !== undefined) {
      FileSrc = await helper.FileHelper.GetFileSrc(file);

      var NewValue = [
        {
          Name: null,
          FileSrc: FileSrc,
          File: file,
          Type: file.type,
          FileInfo: { Name: file.name, FileSize: file.size },
        },
      ];
      setValue(NewValue);
      if (props.ChangeValue) {
        props.ChangeValue(NewValue);
      }
    }
    setUpdate(!update);
  };

  return (
    <div>
      {zoomDialog}
      <div className="fileinput">
        <div style={{ marginBottom: "15px" }}>
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
            Файл сонгох
          </Button>
        </div>

        {Value.length > 0 ? (
          <div
            style={{
              display: "flex",
              width: "100%",
              marginBottom: "18px",
              padding: "2px 8px",
              borderLeft: "2px solid #ccc",
            }}
          >
            <div
              style={{
                float: "left",
                minWidth: "250px",
              }}
            >
              <LightTooltip title="Татах">
                <a
                  style={{
                    cursor: "pointer",
                  }}
                  className={classes.link}
                  onClick={() => {
                    View();
                  }}
                >
                  {Value[0].FileInfo ? Value[0].FileInfo.Name : ""}
                </a>
              </LightTooltip>
            </div>
            <div style={{ display: "inline-block", marginLeft: "15px" }}>
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
                  Remove();
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </div>
          </div>
        ) : null}
        <input
          type="file"
          onChange={ChooseFile}
          accept="application/pdf"
          ref={fileInput}
        />
      </div>
    </div>
  );
}
