import React, { useEffect, useState } from "react";
import {
  Fetchuserdetails,
  Checksession,
  Logout,
} from "../../api/services/endpoints/userEndpoints";
import { useSelector, useDispatch } from "react-redux";
import { userDetails } from "../../redux/slices/user/Index";
import { Userpassword } from "../../api/services/endpoints/userEndpoints";

export const UserDetails = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    Fetchuserdetails()
      .then((response) => {
        setUserData(response.data.user);
        console.log("user data", response.data.user.id);
        dispatch(userDetails({ id: response.data.user.id }));
        Userpass(dispatch);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return userData;
};

export const Session = () => {
  const [session, setSession] = useState(null);
  useEffect(() => {
    Checksession()
      .then((response) => {
        setSession(response.data.success);
      })
      .catch((error) => {
        console.warn("session:", error);
      });
    return () => {
      setSession(false);
    };
  }, []);

  return session;
};

export const SessionEnd = () => {
  Logout();
};

export const Userpass = async (dispatch) => {
  try {
    const token = await Userpassword();
    dispatch(userDetails({ token: token.data.password }));
    console.log(token.data.password);
  } catch (eror) {
    console.warn("password error", eror);
  }
};
