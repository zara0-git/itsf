import React, { useState, useRef, useEffect } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import CircularProgress from "@material-ui/core/CircularProgress";

// @material-ui/icons
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import LockIcon from "@material-ui/icons/Lock";

import { useAuth } from "admin/context/auth.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";

import helper from "admin/helper/index";

// custom images
import logo from "assets/img/logo.png";

const useStyles = makeStyles(styles);

export default function () {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [showAlert, setShowAlert] = React.useState(null);

  const classes = useStyles();

  const { Login, LoginLoading, Message, setMessage } = useAuth();

  var timeOut;

  useEffect(() => {
    let id = setTimeout(function () {
      setCardAnimation("");
    }, 700);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.clearTimeout(id);
    };
  });

  useEffect(() => {
    clearTimeout(timeOut);
    if (Message) {
      var Alert = helper.Helper.ShowAlert(false, Message, () => {
        setShowAlert(null);
      });

      setShowAlert(Alert);

      timeOut = setTimeout(function () {
        setShowAlert(null);
        setMessage(null);
      }, 6000);
    }
  }, [Message]);

  const GetLogin = () => {
    setShowAlert(null);
    clearTimeout(timeOut);
    if (username && password) {
      Login({
        username: username,
        password: password,
      });
    } else {
      var Alert = helper.Helper.ShowAlert(
        false,
        "Мэдээллээ гүйцэд оруулна уу !!!",
        () => {
          setShowAlert(null);
        }
      );

      setShowAlert(Alert);

      timeOut = setTimeout(function () {
        setShowAlert(null);
      }, 6000);
    }
  };

  return (
    <div className={classes.container}>
      {showAlert}
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={6} md={4}>
          <form>
            <Card login className={classes[cardAnimaton]}>
              <CardBody>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <img
                    src={logo}
                    width="60"
                    height="auto"
                    style={{ marginTop: "5px" }}
                  />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "15px",
                    padding: "0 45px",
                  }}
                >
                  <h4
                    style={{
                      display: "block",
                      clear: "both",
                      padding: 0,
                      margin: 0,
                      marginBottom: "5px",
                      fontSize: "13px",
                      lineHeight: "1",
                      fontWeight: "400",
                      textTransform: "uppercase",
                    }}
                  >
                    Булган аймгийн
                  </h4>
                  <h2
                    style={{
                      clear: "both",
                      padding: 0,
                      margin: 0,
                      fontSize: "16px",
                      fontWeight: "500",
                      textTransform: "uppercase",
                      lineHeight: "1",
                    }}
                  >
                    Боловсрол, соёл урлагийн газар
                  </h2>
                </div>
                <CustomInput
                  labelText="Хэрэглэгчийн нэр"
                  id="username"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PermIdentityIcon
                          className={classes.inputAdornmentIcon}
                        />
                      </InputAdornment>
                    ),
                    onChange: (event) => {
                      setUsername(event.target.value);
                    },
                  }}
                  autoComplete="off"
                />
                <CustomInput
                  labelText="Нууц үг"
                  id="password"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LockIcon className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                    type: "password",
                    onChange: (event) => {
                      setPassword(event.target.value);
                    },
                    onKeyDown: (event) => {
                      if (event.keyCode === 13) {
                        GetLogin();
                      }
                    },
                  }}
                  autoComplete="off"
                />
              </CardBody>
              <CardFooter className={classes.justifyContentCenter}>
                <div style={{ position: "relative", width: "100%" }}>
                  <Button
                    color="rose"
                    simple
                    size="lg"
                    block
                    onClick={GetLogin}
                    disabled={LoginLoading}
                  >
                    Нэвтрэх
                  </Button>
                  {LoginLoading && (
                    <CircularProgress
                      size={24}
                      style={{
                        color: "#e91e63",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        marginTop: -12,
                        marginLeft: -12,
                      }}
                    />
                  )}
                </div>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
