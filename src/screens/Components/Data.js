import React, { useEffect, useState } from "react";
import {
  Fetchuserdetails,
  Checksession,
  Logout,
} from "../../api/services/endpoints/userEndpoints";
import { useSelector, useDispatch } from "react-redux";
import { userDetails } from "../../redux/slices/user/Index";

export const UserDetails = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    Fetchuserdetails()
      .then((response) => {
        setUserData(response.data.user);
        console.log("user data", JSON.stringify(response.data.user, 1, 1));
        dispatch(userDetails(response.data.user.id));
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
