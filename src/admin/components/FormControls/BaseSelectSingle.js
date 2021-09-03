/* eslint-disable no-use-before-define */
import React, { useEffect } from "react";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import Autocomplete from "@material-ui/lab/Autocomplete";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-dashboard-pro-react/custom/baseControlsStyles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(styles);

export default function (props) {
  const { t } = useTranslation();
  var classes = useStyles();

  const [Value, setValue] = React.useState(
    props.Value !== undefined ? props.Value : null
  );

  const Config = props.Config ? props.Config : null;
  const Data =
    props.Config &&
    props.Config !== undefined &&
    props.Config.Data !== undefined &&
    props.Config.Data !== null
      ? props.Config.Data
      : [];

  var DataFilter =
    props.Config.DataFilter !== undefined ? props.Config.DataFilter : [];

  const GetValueObject = () => {
    if (Value !== null) {
      var temp = Data.filter((s) => s[Config.Config.IdField] === Value);
      if (temp.length === 1) {
        return temp[0];
      }
    }
    return null;
  };

  const GetFilteredData = () => {
    for (var i = 0; i < DataFilter.length; i++) {
      var Filter = DataFilter[i];
      return Data.filter((s) => s[Filter.Field] + "" === Filter.Value + "");
    }
    return Data;
  };

  const ChangeValue = (value) => {
    var Val =
      value !== null && value !== undefined
        ? value[Config.Config.IdField]
        : null;
    setValue(Val);
    if (props.ChangeValue) {
      props.ChangeValue(Val);
    }
  };

  const GetControl = () => {
    return (
      <Autocomplete
        variant="outlined"
        style={{ margin: "4px" }}
        options={GetFilteredData()}
        value={GetValueObject()}
        clearText="Цэвэрлэх"
        multiple={false}
        noOptionsText={t("No data found") + " !!!"}
        getOptionLabel={(option) => {
          return t(option[Config.Config.TextField] + "");
        }}
        onChange={(object, val) => {
          ChangeValue(val);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={props.WithLabel ? null : Config ? t(Config.Label + "") : ""}
            classes={{ root: classes.input }}
            size="small"
            fullWidth
            variant={props.WithLabel ? "standard" : "outlined"}
          />
        )}
      />
    );
  };

  return (
    <div>
      {props.WithLabel ? (
        <GridContainer style={{ marginBottom: "10px" }}>
          <GridItem xs={12} sm={12} md={12}>
            <FormLabel
              className={classes.labelHorizontal}
              style={{ paddingTop: "10px" }}
            >
              {Config.Label
                ? t(Config.Label + "") +
                  ":" +
                  (Config.Rules && Config.Rules.Required === true ? " *" : "")
                : ""}
            </FormLabel>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            {GetControl()}
          </GridItem>
        </GridContainer>
      ) : (
        GetControl()
      )}
    </div>
  );
}
