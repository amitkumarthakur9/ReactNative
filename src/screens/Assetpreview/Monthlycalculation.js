import { Navdata } from "./Data";

export default Index = (mfId, timePeriod, MonthlyInvestment) => {
  const Nav = Navdata(mfId, 60);

  if (Nav != undefined && Nav.length > 0) {
    const getFirstDates = (startDate, endDate) => {
      const result = [];
      let currentDate = new Date(startDate);
      let endDateWithTime = new Date(endDate);
      while (currentDate <= endDateWithTime) {
        const firstDateOfMonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          1
        );
        result.push({
          date:
            firstDateOfMonth.getFullYear() +
            "-" +
            (firstDateOfMonth.getMonth() + 1).toString().padStart(2, "0") +
            "-" +
            firstDateOfMonth.getDate().toString().padStart(2, "0"),
        });

        currentDate.setMonth(currentDate.getMonth() + 1);
      }

      return result;
    };

    const today = new Date();

    const endDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      today.getDate().toString().padStart(2, "0");

    const startDate =
      today.getFullYear() -
      timePeriod +
      "-" +
      (today.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      "01";

    const firstDates = getFirstDates(startDate, endDate);

    console.log("first date", firstDates);

    sipNavs = [];
    firstDates.forEach((searchDate) => {
      const foundElement = Nav.find(
        (element) => element.date === searchDate.date
      );

      if (foundElement) {
        sipNavs.push(foundElement);
      }
    });
    console.log("sipNavs", sipNavs);

    allUnits = sipNavs.reduce((accumulator, value) => {
      return accumulator + MonthlyInvestment / value.nav;
    }, 0);

    console.log("all Units", allUnits);
  }

  //firstDates()
};
