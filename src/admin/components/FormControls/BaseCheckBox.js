import React from "react";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Checkbox,
} from "@material-ui/core";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
// default components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// translation
import { useTranslation } from "react-i18next";

import styles from "assets/jss/material-dashboard-pro-react/custom/baseControlsStyles";

const useStyles = makeStyles(styles);

export default function BaseCheckBox(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const [Value, setValue] = React.useState(
    props.Value !== undefined ? Object.assign([], props.Value) : []
  );
  const Data =
    props.Config !== undefined && props.Config.Data !== undefined
      ? Object.assign([], props.Config.Data)
      : null;

  const Config = props.Config ? props.Config : null;

  const GetChecked = (value) => {
    return Value.filter((s) => s + "" === "" + value).length > 0;
  };

  const ChangeValue = (value, Checked) => {
    var NewCheckedData = Object.assign([], Value);
    var index = NewCheckedData.indexOf(value);
    if (Checked === true) {
      if (index === -1) {
        NewCheckedData.push(value);
      }
    }
    if (Checked === false) {
      if (index !== -1) {
        NewCheckedData.splice(index, 1);
      }
    }
    setValue(Object.assign([], NewCheckedData));
    if (props.ChangeValue) {
      props.ChangeValue(Object.assign([], NewCheckedData));
    }
  };

  const GetCheckBoxes = () => {
    var CheckBoxes = [];
    if (
      Config.Config !== undefined &&
      Config.Config !== null &&
      Data !== null
    ) {
      for (var i = 0; i < Data.length; i++) {
        CheckBoxes.push(
          <GridItem
            xs={12}
            sm={12}
            md={props.md ? props.md : 12}
            key={"GridItem" + i}
          >
            <div className={classes.checkboxAndRadioHorizontal}>
              <FormControlLabel
                style={{
                  color: "#6e6e6e",
                  fontWeight: "300",
                  fontSize: "14px",
                }}
                control={
                  <Checkbox
                    key={"CheckBox" + i}
                    checked={GetChecked(Data[i][Config.Config.IdField])}
                    onChange={(event, checked) => {
                      ChangeValue(event.target.value, checked);
                    }}
                    value={Data[i][Config.Config.IdField]}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot,
                    }}
                  />
                }
                classes={{
                  label: classes.label,
                  root: classes.labelRoot,
                }}
                label={t(Data[i][Config.Config.TextField] + "")}
              />
            </div>
          </GridItem>
        );
      }
      return (
        <GridContainer key={"MainContainer" + i}>{CheckBoxes}</GridContainer>
      );
    } else {
      return null;
    }
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={props.mdLabel ? props.mdLabel : 3}>
        <FormLabel className={classes.labelHorizontal}>
          {props.Label
            ? t(props.Label + "") + ":" + (props.Required === true ? " *" : "")
            : ""}
        </FormLabel>
      </GridItem>
      <GridItem xs={12} sm={12} md={props.mdValue ? props.mdValue : 9}>
        <div className={classes.root}>
          <FormControl component="fieldset" className={classes.formControl}>
            {GetCheckBoxes()}
            {props.HelperText ? (
              <FormHelperText>{props.HelperText}</FormHelperText>
            ) : null}
          </FormControl>
        </div>
      </GridItem>
    </GridContainer>
  );
}
