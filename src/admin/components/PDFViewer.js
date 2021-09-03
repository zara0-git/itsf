import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import Tooltip from "@material-ui/core/Tooltip";

const LightTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#FFF",
    textTransform: "uppercase",
    fontSize: 11,
    marginTop: "2px",
  },
}))(Tooltip);

const styles = {
  root: {
    margin: 0,
    padding: 0,
  },
  paper: {
    borderRadius: "0",
  },
  content: {
    padding: "0",
    minHeight: "90vh",
  },
  contentRoot: {
    borderRadius: "0",
    "&:first-child": {
      paddingTop: 0,
    },
  },
};

const useStyles = makeStyles(styles);

export default function (props) {
  var classes = useStyles();
  const Src = props.FileSrc ? props.FileSrc : null;

  return (
    <Dialog
      open
      fullWidth={true}
      scroll="paper"
      onClose={() => {
        props.Hide && props.Hide();
      }}
      maxWidth="md"
      // disableBackdropClick
      classes={{ paperScrollPaper: classes.root, paper: classes.paper }}
    >
      <DialogContent
        className={classes.content}
        classes={{ root: classes.contentRoot }}
      >
        <div style={{ height: "100%", width: "100%" }}>
          <embed src={Src} style={{ height: "90vh", width: "100%" }} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
