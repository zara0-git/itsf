import React from "react";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
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
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <FormLabel className={classes.labelHorizontal}>
          {props.Label
            ? t(props.Label + "") + (props.Required === true ? " *" : "")
            : ""}
        </FormLabel>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <TextField
          size="small"
          value={Value !== null ? Value : ""}
          variant="outlined"
          InputProps={{
            classes: {
              input: classes.input,
            },
            readOnly: props.ReadOnly ? props.ReadOnly : false,
          }}
          className={classes.notchedOutline}
          multiline
          fullWidth
          rows={props.rows ? props.rows : "3"}
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
