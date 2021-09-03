import React from "react";
import Datetime from "react-datetime";

import { makeStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment } from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";

import Helper from "admn/helper/index";

const styles = {
  formControl: {
    marginTop: "8px",
    minWidth: "160px",
    "& > div": {
      padding: "0 10px !important",
    },
  },
  inputUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderBottomColor: "#D2D2D2 !important",
      bordeBottomWidth: "1px !important",
    },
    "&:after": {
      borderBottomColor: "#9c27b0",
    },
    "& + p": {
      fontWeight: "300",
    },
  },
};

const useStyles = makeStyles(styles);

export default function (props) {
  var classes = useStyles();

  const [Value, setValue] = React.useState(
    props.Value ? props.Value : Helper.ObjectHelper.getDateYMD()
  );

  React.useEffect(() => {
    if (props.Value && props.Value !== Value) {
      setValue(props.Value);
    }
  }, [props.Value]);

  const GetVariant = () => {
    return props.Variant ? props.Variant : "standard";
  };
  const GetLabel = () => {
    return props.Label ? props.Label : null;
  };
  const GetFullWidth = () => {
    return props.FullWidth ? props.FullWidth : false;
  };
  const validation = (currentDate) => {
    if (props.minDate !== undefined) {
      return currentDate.isAfter(new Date(props.minDate));
    }
    if (props.maxDate !== undefined) {
      return currentDate.isBefore(new Date(props.maxDate));
    }
    return true;
  };
  return (
    <Datetime
      dateFormat={props.dateFormat ? props.dateFormat : "YYYY-MM-DD"}
      timeFormat={false}
      value={new Date(Value)}
      onChange={(val) => {
        setValue(Helper.ObjectHelper.getDateYMD({ Date: val._d }));
        if (props.ChangeValue) {
          props.ChangeValue(Helper.ObjectHelper.getDateYMD({ Date: val._d }));
        }
      }}
      closeOnSelect
      isValidDate={validation}
      viewMode={props.ViewMode ? props.ViewMode : "days"}
      renderInput={(props) => {
        return (
          <TextField
            {...props}
            value={Value}
            label={GetLabel()}
            InputProps={{
              className: classes.inputUnderline,
              endAdornment: (
                <InputAdornment>
                  <EventIcon
                    style={{
                      cursor: "pointer",
                      color: "#6e6d6d",
                    }}
                  />
                </InputAdornment>
              ),
            }}
            variant={GetVariant()}
            size="small"
            fullWidth={GetFullWidth()}
          />
        );
      }}
    />
  );
}
