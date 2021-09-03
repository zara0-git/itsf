import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js";

const styles = {
  label: {
    color: "#0f0f0f",
  },

  good: {
    color: "blue",
    border: "1px solid blue",
  },
  medi: {
    color: "orange",
    border: "1px solid orange",
  },
  bad: {
    color: "green",
    border: "1px solid green",
  },

  radioChecked: {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
  },
};

const useImportStyles = makeStyles(customCheckboxRadioSwitch);
const useStyles = makeStyles(styles);

export default function SimpleRadioButton(props) {
  const classes = { ...useImportStyles(), ...useStyles() };

  return (
    <div
      className={
        classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
      }
    >
      <FormControlLabel
        control={
          <Radio
            checked={props.selectedValue === props.value}
            onChange={(event) => {
              props.handleChange(event.target.value);
            }}
            value={props.value}
            icon={<FiberManualRecord className={classes.radioUnchecked} />}
            checkedIcon={
              <FiberManualRecord
                className={classes.radioChecked + " " + classes[props.addClass]}
              />
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
        label={props.label}
      />
    </div>
  );
}

SimpleRadioButton.propTypes = {
  addClass: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selectedValue: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};
