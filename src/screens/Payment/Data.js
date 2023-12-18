import React, { useEffect, useState } from "react";
import { Mfubanksdata } from "../../api/services/endpoints/buyEndpoints";

const Mfubanks = () => {
  const [mfubanks, setMfubanks] = useState([]);
  useEffect(() => {
    Mfubanksdata().then((response) => {
      setMfubanks(response.data.additionlBankArray);
    });
  }, []);

  return mfubanks;
};

export default Mfubanks;
