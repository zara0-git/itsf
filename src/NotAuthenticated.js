import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import AuthLayout from "admin/layouts/Auth.js";
import CustomerLayout from "user/layouts/Customer.js";

export default function () {
  return (
    <Switch>
      <Route path="/home" component={CustomerLayout} />
      <Route path="/auth" component={AuthLayout} />
      <Redirect from="/admin" to="/auth/login" />
      <Redirect from="/" to="/home" />
      <Redirect from="/home" to="/home" />
    </Switch>
  );
}
