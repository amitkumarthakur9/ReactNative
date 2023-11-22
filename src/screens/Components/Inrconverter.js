import React from "react";

const formatNumberWithCommas = (input) => {
  let sign = "";

  if (!isNaN(input)) {
    input = parseInt(input);
  }

  if (input < 0) {
    sign = "";
    input = -1 * input;
  } else {
    sign = "";
  }

  if (typeof input !== "undefined") {
    let result = input.toString();

    if (result.length > 3) {
      const lastThree = result.substring(result.length - 3);
      const otherNumbers = result.substring(0, result.length - 3);

      if (otherNumbers !== "") {
        result =
          otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree;
      } else {
        result = lastThree;
      }
    }

    return sign + result;
  } else {
    return "0";
  }
};

export default formatNumberWithCommas;
