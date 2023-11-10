export default Formatfundname = (input) => {
  if (!input) {
    return "";
  }
  if (input !== "NIPPON INDIA GROWTH FUND - GROWTH PLAN - GROWTH OPTION") {
    input = input.toLowerCase();
    let isGrowth = false;

    if (input.includes("growth")) {
      isGrowth = true;
    }

    input = input
      .replace(" regular growth", "")
      .replace(" - regular plan", "")
      .replace(" - regular", "")
      .replace(" - growth", "")
      .replace("fundregular", "fund")
      .replace("termregular", "term")
      .replace("fundgrowth", "fund")
      .replace("fundregular", "fund")
      .replace("-growth", "")
      .replace(" growth", "")
      .replace(" option", "")
      .replace(" plan", "")
      .replace(" regular", "")
      .replace(" - ", " ")
      .replace("-", "")
      .replace("regular", "")
      .replace("fundsavings", "fund savings");

    const words = input.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    if (isGrowth) {
      return words.join(" ") + " - Growth Plan";
    } else {
      return words.join(" ");
    }
  } else {
    return "Nippon India Growth Fund - Growth Plan";
  }
};
