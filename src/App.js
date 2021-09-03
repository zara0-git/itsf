import React from "react";
import History from "./History";
import { Router } from "react-router-dom";
// use Context
import { AuthProvider, useAuth } from "admin/context/auth";

import Authenticated from "Authenticated.js";
import NotAuthenticated from "NotAuthenticated.js";

import PageLoading from "components/PageLoading.js";

import "assets/scss/material-dashboard-pro-react.scss?v=1.9.0";

function App() {
  const { UserData, loading } = useAuth();

  if (loading) {
    return <PageLoading />;
  }

  if (UserData) {
    return <Authenticated />;
  }

  return <NotAuthenticated />;
}

export default function () {
  return (
    <Router history={History}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  );
}
