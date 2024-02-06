const convertToDateTime = (dateObject) => {
  const year = dateObject.getFullYear(); // 2024
  const month = dateObject.getMonth() + 1; // Months are 0-based, so we add 1
  const date = dateObject.getDate(); // 6
  const hours = dateObject.getHours(); // 6
  const minutes = dateObject.getMinutes(); // 35
  const seconds = dateObject.getSeconds(); // 25
  const milliseconds = dateObject.getMilliseconds(); // 237

  // console.log(
  //   `${year}-${month}-${date} ${hours}:${minutes}:${seconds}.${milliseconds}`
  // );
  // Output: 2024-2-6 6:35:25.237

  return `${year}-${month.toString().padStart(2, "0")}-${date
    .toString()
    .padStart(2, "0")} ${hours}:${minutes}:${seconds}`;
};

export default convertToDateTime;
