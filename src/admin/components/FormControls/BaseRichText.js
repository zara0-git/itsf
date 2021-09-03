import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import FormLabel from "@material-ui/core/FormLabel";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-dashboard-pro-react/custom/baseControlsStyles";

import { useTranslation } from "react-i18next";
const useStyles = makeStyles(styles);

export default function (props) {
  const { t } = useTranslation();
  var classes = useStyles();
  const [Value, setValue] = React.useState(
    props.Value && props.Value !== undefined ? props.Value + "" : ""
  );

  // React.useEffect(() => {
  //   if (props.Value !== Value) {
  //     if (props.Value) {
  //       setValue(props.Value);
  //     } else {
  //       setValue("");
  //     }
  //   }
  // }, [props.Value]);

  require("./style.css");

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <FormLabel className={classes.labelHorizontal}>
          {props.Label
            ? t(props.Label + "") + (props.Required === true ? " *" : "")
            : ""}
        </FormLabel>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <CKEditor
          editor={ClassicEditor}
          data={props.Value}
          onChange={(event, editor) => {
            const data = editor.getData();
            // console.log({ event, editor, data });
            setValue(data);
            if (props.ChangeValue) {
              props.ChangeValue(data);
            }
          }}
        />
      </GridItem>
    </GridContainer>
  );
}
