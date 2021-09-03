import React from "react";
import C3 from "user/components/survey/C3.js";
import Server from "config/server.js";
import { makeStyles } from "@material-ui/core/styles";

import Button from "components/CustomButtons/Button.js";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import SimpleRadioButton from "user/components/survey/SimpleRadioButton.js";
import helper from "admin/helper/index";
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle";

const styles = {
  grid: {
    backgroundColor: "#0000",
  },
  gridBody: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    itemAlign: "center",
    flexWrap: "wrap",
    borderTop: "1px solid rgb(255,109,18)",
    borderBottom: "1px solid rgb(255,109,18)",
  },
  formStyle: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
  formHeader: {
    "& h5": {
      fontWeight: "400",
      margin: 0,
      textAlign: "center",
      borderBottom: "1px solid rgba(0,0,0,0.2)",
      paddingBottom: "20px",
      paddingTop: "20px",
    },
  },
  fSec: {
    width: "50%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    itemAlign: "flex-start",
    flexWrap: "wrap",
  },
  buttonSec: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    itemAlign: "flex-start",
  },
  fSec1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
};

const useStyles = makeStyles(styles);

export default function Survey() {
  const classes = useStyles();
  const server = Server;
  const [selectedValue, setSelectedValue] = React.useState(null);
  const [evaVal, setEvaVal] = React.useState({ good: 1, mid: 1, bad: 1 });
  const [Alert, setAlert] = React.useState(null);

  var timeOut = null;

  const d = new Date();
  const d1 = new Date();
  d.setHours(d.getHours() - 1);
  const handleChange = (value) => {
    setSelectedValue(value);
  };

  React.useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    var Response = await server.CallService({
      Method: "GET",
      Url: "evaluation",
    });

    if (
      Response &&
      Response.data &&
      Response.data.Data &&
      Response.data.Success
    ) {
      setEvaVal(Response.data.Data);
    }
  };

  const Save = async () => {
    clearTimeout(timeOut);
    localStorage.setItem(
      "isEvaluated",
      d1.getFullYear() * 100000000 +
        d1.getMonth() * 1000000 +
        d1.getDay() * 10000 +
        d1.getHours() * 100 +
        d1.getMinutes()
    );

    var Response = await server.CallService({
      Url: "evaluation",
      Data: { evaluation_value: parseInt(selectedValue) },
    });

    if (Response && Response.data && !Response.data.Success) {
      var Alert = helper.Helper.ShowAlert(
        Response.data.Success,
        Response.data.Message,
        () => {
          setAlert(null);
        }
      );
      setAlert(Alert);

      timeOut = setTimeout(function () {
        setAlert(null);
      }, 3000);
    } else {
      GetData();
    }
  };
  return (
    <GridContainer>
      {Alert}
      <GridItem xs={12} sm={12} md={6}>
        <div className={classes.formHeader}>
          <h5>
            Булган аймгийн боловсрол соёл урлагын газрын үйл ажиллагаанд үнэлгээ
            өгнө үү
          </h5>
        </div>

        {localStorage.getItem("isEvaluated") >
        d.getFullYear() * 100000000 +
          d.getMonth() * 1000000 +
          d.getDay() * 10000 +
          d.getHours() * 100 +
          d.getMinutes() ? (
          <p>Санал өгсөнд баярлалаа.</p>
        ) : (
          <div className={classes.fSec}>
            <div className={classes.fSec1}>
              <form className={classes.formStyle}>
                <SimpleRadioButton
                  label="Сайн"
                  value="1"
                  selectedValue={selectedValue}
                  handleChange={handleChange}
                  addClass="good"
                />
                <SimpleRadioButton
                  label="Дунд"
                  value="2"
                  selectedValue={selectedValue}
                  handleChange={handleChange}
                  addClass="medi"
                />
                <SimpleRadioButton
                  label="Муу"
                  value="3"
                  selectedValue={selectedValue}
                  handleChange={handleChange}
                  addClass="bad"
                />
              </form>
            </div>
            <div className={classes.buttonSec}>
              <Button
                color="linkedin"
                size="sm"
                style={{ borderRadius: 0 }}
                onClick={Save}
              >
                Илгээх
              </Button>
            </div>
          </div>
        )}
      </GridItem>

      <GridItem xs={12} sm={12} md={6}>
        <C3 evaVal={evaVal} />
      </GridItem>
    </GridContainer>
  );
}
