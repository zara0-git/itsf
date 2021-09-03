import React from "react";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
// default components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// translation
import { useTranslation } from "react-i18next";

import styles from "assets/jss/material-dashboard-pro-react/custom/baseControlsStyles";

const useStyles = makeStyles(styles);

export default function (props) {
  const { t } = useTranslation();
  var classes = useStyles();
  const [Value, setValue] = React.useState(
    props.Value !== undefined ? props.Value + "" : ""
  );

  React.useEffect(() => {
    if (props.Value !== Value) {
      if (props.Value) {
        setValue(props.Value);
      } else {
        setValue("");
      }
    }
  }, [props.Value]);

  return (
    <GridContainer style={{ marginBottom: "10px" }}>
      <GridItem xs={12} sm={12} md={12}>
        <FormLabel className={classes.labelHorizontal}>
          {props.Label
            ? t(props.Label + "") + (props.Required === true ? " *" : "")
            : ""}
        </FormLabel>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <TextField
          disabled={props.disabled === true}
          style={{ width: "100%" }}
          size="small"
          variant="outlined"
          value={Value && Value !== null ? Value : ""}
          type={props.Password ? "password" : ""}
          InputProps={{
            classes: {
              input: classes.input,
            },
            readOnly: props.ReadOnly ? props.ReadOnly : false,
          }}
          className={classes.notchedOutline}
          onChange={(event) => {
            setValue(event.target.value);
            if (props.ChangeValue) {
              props.ChangeValue(event.target.value);
            }
          }}
        />
      </GridItem>
    </GridContainer>
  );
}
