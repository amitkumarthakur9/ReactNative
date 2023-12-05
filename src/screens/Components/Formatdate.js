export default Formatdate = (currentDateString) => {
  // Convert the string to a Date object
  const currentDate = new Date(currentDateString);

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
};
