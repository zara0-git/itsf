import React from "react";
import Datetime from "react-datetime";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import { FormLabel, TextField, InputAdornment } from "@material-ui/core";
// @material-ui/icons
import EventIcon from "@material-ui/icons/Event";
// default components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// helper
import Helper from "admn/helper/index";
// translation
import { useTranslation } from "react-i18next";

import styles from "assets/jss/material-dashboard-pro-react/custom/baseControlsStyles";

const useStyles = makeStyles(styles);

export default function BaseDate(props) {
  const { t } = useTranslation();
  var classes = useStyles();
  const [Value, setValue] = React.useState(
    props.Value ? props.Value : Helper.ObjectHelper.getDateYMD()
  );
  const Config = props.Config ? props.Config : null;

  const GetControl = () => {
    return (
      <Datetime
        timeFormat={false}
        value={new Date(Value)}
        onChange={(val) => {
          setValue(Helper.ObjectHelper.getDateYMD({ Date: val._d }));
          if (props.ChangeValue) {
            props.ChangeValue(Helper.ObjectHelper.getDateYMD({ Date: val._d }));
          }
        }}
        closeOnSelect
        renderInput={(props) => {
          return (
            <TextField
              {...props}
              value={Value}
              label={
                props.WithLabel ? null : Config ? t(Config.Label + "") : ""
              }
              InputProps={{
                className: classes.inputUnderline,
                endAdornment: (
                  <InputAdornment>
                    <EventIcon
                      style={{
                        cursor: "pointer",
                        color: "#9c27b0",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              size="small"
              fullWidth
            />
          );
        }}
      />
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
