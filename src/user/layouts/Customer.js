import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// custom components
import routes from "user/routes.js";
import Toolbar from "user/components/header/Toolbar";
import ResponsiveToolbar from "user/components/header/ResponsiveToolbar";
import Menu from "user/components/header/Menu.js";
import CustomFooter from "user/components/footer/CustomFooter";
import ScrollToTopButton from "user/components/ScrollToTopButton";
import SocialLinks from "user/components/links/SocialLinks";

import { Hidden } from "@material-ui/core";

export default function () {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return (
        <Route
          exact
          path={"/home" + prop.path}
          component={prop.component}
          key={key}
        />
      );
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <Hidden mdDown>
        <Toolbar />
      </Hidden>

      <Menu />
      <Switch>
        {getRoutes(routes)}
        <Redirect to="/home" />
      </Switch>
      {
        //     <SocialLinks />
      }
      <CustomFooter />
      <ScrollToTopButton />
    </div>
  );
}
