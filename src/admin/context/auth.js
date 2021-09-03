import React, { useState, useEffect, createContext, useContext } from "react";
import Server from "config/server";
// import Helper from "../helper/Helper";

const AuthContext = createContext({});
const useAuth = () => useContext(AuthContext);

function AuthProvider(props) {
  const [UserData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [LoginLoading, setLoginLoading] = useState(false);
  const [Message, setMessage] = useState(null);

  const Login = async ({ username, password }) => {
    setLoginLoading(true);
    const ResData = await Server.server({
      method: "POST",
      data: { username, password },
      url: "/auth/login",
    });
    setLoginLoading(false);
    const Data = ResData && ResData.data;
    if (Data.Success === true) {
      localStorage.setItem("BulganBSGToken", Data.Token);
      setUserData(Data.LogedUser);
      setMessage(null);
    } else {
      setUserData(null);
      setMessage(Data.Message);
    }
  };

  const LogOut = async function () {
    try {
      const ResData = await Server.CallService({ Url: "/auth/logout" });
      const Data = ResData.data;
      if (Data.Success === true) {
        setMessage(null);
      } else {
        setMessage(Data.Message);
      }
    } catch (ex) {
      setMessage(ex);
    } finally {
      setUserData(null);
      localStorage.removeItem("BulganBSGToken");
    }
  };

  const GetUserData = async () => {
    setLoading(true);
    const ResData = await Server.CallService({
      Url: "/auth/get-user-data",
    });

    if (ResData.status === 401) {
      localStorage.removeItem("BulganBSGToken");
      setUserData(null);
      setMessage(null);
    } else {
      var Data = ResData.data;
      if (Data.Success === true) {
        setUserData(Data.LogedUser);
        setMessage(null);
      } else {
        localStorage.removeItem("BulganBSGToken");
        setUserData(null);
        setMessage(Data.Message);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    const Token = localStorage.getItem("BulganBSGToken");
    if (Token) {
      GetUserData();
    } else {
      setUserData(null);
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        UserData,
        Login,
        LogOut,
        loading,
        LoginLoading,
        setLoginLoading,
        Message,
        setMessage,
      }}
      {...props}
    />
  );
}

export { AuthProvider, useAuth, AuthContext };
