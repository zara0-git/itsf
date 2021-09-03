import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import SimpleSelect from "admin/components/FormControls/SimpleSelect.js";

var styles = {
  labelHorizontal: {
    color: "#75736c",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "10px",
    marginRight: "0",
    textAlign: "left",
    marginBottom: "12px",
    "@media (min-width: 992px)": {
      float: "left",
    },
  },
};

const useStyles = makeStyles(styles);

export default function BaseSelect(props) {
  var classes = useStyles();
  const [Value, setValue] = React.useState(props.Value ? props.Value : "");

  const Data = props.Data ? props.Data : [];

  React.useEffect(() => {
    if (props.Value && props.Value !== Value) {
      setValue(props.Value);
    }
  }, [props.Value]);

  const ChangeValue = (value) => {
    setValue(value);
    if (props.ChangeValue) {
      props.ChangeValue(value);
    }
  };

  return (
    <GridContainer style={{ marginBottom: "10px" }}>
      <GridItem xs={12} sm={12} md={12}>
        <FormLabel className={classes.labelHorizontal}>
          {props.Label ? props.Label + "" + (props.Required ? " *" : "") : ""}
        </FormLabel>
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={6}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <SimpleSelect
          ChangeValue={ChangeValue}
          DefaultValue="-- Сонгох --"
          Value={Value}
          NewValue={Value}
          Data={Data}
        />
      </GridItem>
    </GridContainer>
  );
}
