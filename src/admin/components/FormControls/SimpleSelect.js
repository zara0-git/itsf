import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { FormControl, MenuItem, Select, InputLabel } from "@material-ui/core";

import { grayColor } from "assets/jss/material-dashboard-pro-react.js";

const styles = {
  selectFormControl: {
    minWidth: "80px",
    backgroundColor: "#FFF",
    "& > div": {
      "&:before": {
        borderBottomWidth: "1px !important",
        borderBottomColor: "#D2D2D2 !important",
      },
      "&:after": {
        borderBottomColor: "#9c27b0 !important",
      },
    },
  },
  outlinedFormControl: {
    marginTop: "-10px !important",
    "& > div": {
      "&:before": {
        borderBottomWidth: "1px !important",
        borderBottomColor: "#D2D2D2 !important",
      },
      "&:after": {
        borderBottomColor: "#9c27b0 !important",
      },
    },
  },
  select: {
    padding: "12px 0 7px",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "1.42857",
    textDecoration: "none",
    color: grayColor[14],
    letterSpacing: "0",
    "&:focus": {
      backgroundColor: "transparent",
    },
    "&[aria-owns] + input + svg": {
      transform: "rotate(180deg)",
    },
    "& + input + svg": {
      transition: "all 300ms linear",
    },
  },
  selectOutlinedRoot: {
    paddingLeft: "8px",
  },
  selectMenu: {
    "& > div > ul": {
      border: "0",
      padding: "5px 0",
      margin: "0",
      boxShadow: "none",
      minWidth: "100%",
      borderRadius: "4px",
      boxSizing: "border-box",
      display: "block",
      fontSize: "14px",
      textAlign: "left",
      listStyle: "none",
      backgroundColor: "#FFF",
      backgroundClip: "padding-box",
    },
    "& $selectPaper $selectMenuItemSelectedMultiple": {
      backgroundColor: "inherit",
    },
    "& > div + div": {
      maxHeight: "266px !important",
    },
  },
  selectMenuItem: {
    fontSize: "14px",
    padding: "4px 8px",
    margin: "0 5px",
    borderRadius: "2px",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    lineHeight: "2",
    whiteSpace: "nowrap",
    color: "#333",
    paddingRight: "30px",
    "&:hover": {
      backgroundColor: "#999999",
      color: "#FFF",
    },
  },
};

const useStyles = makeStyles(styles);

export default function SimpleSelect(props) {
  var classes = useStyles();

  const [Value, setValue] = React.useState(
    props.Value ? props.Value : props.DefaultValue ? "-1" : ""
  );
  const NewValue = props.NewValue ? props.NewValue : null;
  const Data = props.Data ? props.Data : [];

  const handleChange = (event) => {
    if (props.ChangeValue) {
      props.ChangeValue(event.target.value);
    }
    setValue(event.target.value);
  };

  React.useEffect(() => {
    if (NewValue && NewValue !== undefined) {
      if (Value && NewValue !== Value) {
        if (props.ChangeValue) {
          props.ChangeValue(NewValue);
        }
        setValue(NewValue);
      }
    }
  }, [NewValue]);

  const GetMenuItem = () => {
    var MenuItems = [];
    if (Data) {
      for (var i = 0; i < Data.length; i++) {
        MenuItems.push(
          <MenuItem
            key={"Item" + i}
            value={Data[i] + ""}
            classes={{
              root: classes.selectMenuItem,
            }}
          >
            {Data[i] + ""}
          </MenuItem>
        );
      }
    }
    return MenuItems;
  };

  const GetDefaultValue = () => {
    return props.DefaultValue ? (
      <MenuItem
        value="-1"
        classes={{
          root: classes.selectMenuItem,
        }}
        disabled={true}
      >
        {props.DefaultValue + ""}
      </MenuItem>
    ) : null;
  };

  return (
    <FormControl
      fullWidth={true}
      className={classes.selectFormControl + " " + classes.outlinedFormControl}
      variant="outlined"
      size="small"
    >
      <Select
        disabled={props.disabled}
        MenuProps={{
          className: classes.selectMenu,
        }}
        classes={{
          select: classes.select,
          root: classes.selectOutlinedRoot,
        }}
        value={Value}
        onChange={(event) => {
          handleChange(event);
        }}
      >
        {GetDefaultValue()}
        {GetMenuItem()}
      </Select>
    </FormControl>
  );
}
