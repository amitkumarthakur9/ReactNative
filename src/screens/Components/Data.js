import React, { useEffect, useState } from "react";
import {
  Fetchuserdetails,
  Checksession,
} from "../../api/services/endpoints/userEndpoints";

export const UserDetails = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    Fetchuserdetails()
      .then((response) => {
        setUserData(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return userData;
};

export const Session = () => {
  const [session, setSession] = useState(true);
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

  return { session };
};
