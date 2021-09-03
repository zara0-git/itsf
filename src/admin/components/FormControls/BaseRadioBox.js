import React from "react";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";
// @material-ui/icons
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
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
    props.Value && props.Value !== undefined ? props.Value + "" : null
  );

  const Data = props.Config && props.Config.Data ? props.Config.Data : [];

  const [Config, setConfig] = React.useState(
    props.Config ? props.Config : null
  );

  const GetRadioBoxes = () => {
    var RadioBoxes = [];
    for (var i = 0; i < Data.length; i++) {
      RadioBoxes.push(
        <GridItem xs={12} sm={12} md={6} key={"GridItem" + i}>
          <FormControlLabel
            key={"Label" + i}
            style={{ color: "#6e6e6e", fontWeight: "300" }}
            value={Data[i].Value}
            control={
              <Radio
                key={"Radio" + i}
                icon={<FiberManualRecord className={classes.radioUnchecked} />}
                checkedIcon={
                  <FiberManualRecord className={classes.radioChecked} />
                }
                classes={{
                  checked: classes.radio,
                  root: classes.radioRoot,
                }}
              />
            }
            classes={{
              label: classes.label,
              root: classes.labelRoot,
            }}
            label={t(Data[i].Label + "")}
          />
        </GridItem>
      );
    }
    return (
      <RadioGroup
        key={"RadioGroup"}
        value={Value + ""}
        onChange={(event) => {
          setValue(event.target.value + "");
          if (props.ChangeValue) {
            props.ChangeValue(event.target.value + "");
          }
        }}
      >
        <GridContainer key="MainCon">{RadioBoxes}</GridContainer>
      </RadioGroup>
    );
  };

  const GetControl = () => {
    return (
      <div>
        <FormControl
          component="fieldset"
          style={{ width: "100%", margin: "6px" }}
        >
          {!props.WithLabel ? (
            <FormLabel
              component="legend"
              style={{
                fontSize: "14px",
                color: "#6e6e6e",
                fontWeight: "300",
                margin: "0px",
              }}
            >
              {t(Config.Label + "")}
            </FormLabel>
          ) : null}
          {GetRadioBoxes()}
        </FormControl>
      </div>
    );
  };

  if (Config !== null) {
    return (
      <div>
        {props.WithLabel ? (
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <FormLabel className={classes.labelHorizontal}>
                {Config.Label
                  ? Config.Label +
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
  } else {
    return null;
  }
}
