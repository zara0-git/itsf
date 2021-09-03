import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Footer from "components/Footer/Footer.js";
import LoginPage from "admin/pages/LoginPage.js";

import styles from "assets/jss/material-dashboard-pro-react/layouts/authStyle.js";

// custom images
import bulgan from "assets/img/auth-bg.jpg";

const useStyles = makeStyles(styles);

export default function (props) {
  // styles
  const classes = useStyles();

  React.useEffect(() => {
    document.body.style.overflow = "unset";
    // Specify how to clean up after this effect:
    return function cleanup() {};
  });

  return (
    <div>
      <div className={classes.wrapper}>
        <div
          className={classes.fullPage}
          style={{ backgroundImage: "url('" + bulgan + "')" }}
        >
          <Switch>
            <Route path="/auth/login" component={LoginPage} />
            <Redirect to="/auth/login" />
            <Redirect from="/auth" to="/auth/login" />
            <Redirect from="/login" to="/auth/login" />
          </Switch>
          <Footer white />
        </div>
      </div>
    </div>
  );
}
