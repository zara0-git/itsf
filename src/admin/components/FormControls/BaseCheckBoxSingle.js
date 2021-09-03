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

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// translation
import { useTranslation } from "react-i18next";
import styles from "assets/jss/material-dashboard-pro-react/custom/baseControlsStyles";

const useStyles = makeStyles(styles);

export default function BaseCheckBoxSingle(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const [Value, setValue] = React.useState(
    props.Value + "" === "1" ? "1" : "0"
  );
  const Config = props.Config ? props.Config : null;

  const GetChecked = (value) => {
    return Value === value;
  };

  const GetControl = () => {
    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          {!props.WithLabel ? (
            <FormLabel
              component="legend"
              style={{ fontSize: "13px", margin: "0 0 4px 0" }}
            >
              {t(Config.Label + "")}
            </FormLabel>
          ) : null}
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={GetChecked("1")}
                    onChange={(event, checked) => {
                      setValue(checked === true ? "1" : "0");
                      if (props.ChangeValue) {
                        props.ChangeValue(checked === true ? "1" : "0");
                      }
                    }}
                    value={"1"}
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
                label={t("Check")}
              />
            </GridItem>
          </GridContainer>

          {Config.HelperText ? (
            <FormHelperText>{Config.HelperText}</FormHelperText>
          ) : null}
        </FormControl>
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
