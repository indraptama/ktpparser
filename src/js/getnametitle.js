function getNameTitle (martialstatus, gender) {
  if(gender === "man") {
    return "Tuan"
  } else if (gender == "woman" && martialstatus !== "single") {
    return "Nyonya"
  } return "Nona"
};

module.exports = getNameTitle;
