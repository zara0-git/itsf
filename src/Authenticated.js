import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import AdminLayout from "admin/layouts/Admin.js";
import CustomerLayout from "user/layouts/Customer.js";

export default function () {
  return (
    <Switch>
      <Route path="/home" component={CustomerLayout} />
      <Route path="/admin" component={AdminLayout} />
      <Redirect from="/auth" to="/admin" />
      <Redirect from="/" to="/home" />
      <Redirect from="/home" to="/home" />
    </Switch>
  );
}
