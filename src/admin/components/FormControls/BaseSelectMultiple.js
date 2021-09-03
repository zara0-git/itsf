/* eslint-disable no-use-before-define */
import React from "react";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import Autocomplete from "@material-ui/lab/Autocomplete";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import { useTranslation } from "react-i18next";

import styles from "assets/jss/material-dashboard-pro-react/custom/baseControlsStyles";

const useStyles = makeStyles(styles);

export default function (props) {
  const { t } = useTranslation();
  var classes = useStyles();

  const [Value, setValue] = React.useState(
    props.Value !== undefined ? props.Value : []
  );

  const Config = props.Config ? props.Config : null;
  const Data =
    props.Config && props.Config.Data !== undefined ? props.Config.Data : [];

  var DataFilter =
    props.Config.DataFilter !== undefined ? props.Config.DataFilter : [];

  const GetValueObject = () => {
    var Values = [];
    if (Value !== null) {
      Value.forEach((element) => {
        var temp = Data.filter((s) => s[Config.Config.IdField] === element);
        if (temp.length === 1) {
          Values.push(temp[0]);
        }
      });
    }
    return Values;
  };

  const GetFilteredData = () => {
    for (var i = 0; i < DataFilter.length; i++) {
      var Filter = DataFilter[i];
      return Data.filter((s) => s[Filter.Field] === Filter.Value);
    }
    return Data;
  };

  const ChangeValue = (value) => {
    var Val = [];
    value.forEach((element) => {
      if (element[Config.Config.IdField] !== undefined) {
        Val.push(element[Config.Config.IdField]);
      }
    });
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
        multiple={true}
        noOptionsText="Мэдээлэл олдсонгүй !!!"
        getOptionLabel={(option) => t(option[Config.Config.TextField] + "")}
        onChange={(object, val) => {
          ChangeValue(val);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={props.WithLabel ? null : Config ? t(Config.Label + "") : ""}
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
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <FormLabel className={classes.labelHorizontal}>
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
