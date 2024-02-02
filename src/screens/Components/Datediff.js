const Isovereeighteen = (dobString) => {
  // Split the date string into day, month, and year components
  const [day, month, year] = dobString.split("-").map(Number);

  // Create a Date object for the provided date of birth
  const dob = new Date(year, month - 1, day);

  // Create a Date object for the current date
  const currentDate = new Date();

  // Calculate the difference in milliseconds between the two dates
  const timeDiff = currentDate.getTime() - dob.getTime();

  // Calculate the age in years
  const age = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));

  // Check if the age is greater than or equal to 18
  return age >= 18;
};

export default Isovereeighteen;
