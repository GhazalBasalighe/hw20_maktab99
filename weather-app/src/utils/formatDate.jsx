class DateTools {
  formatDay(date, len = "short") {
    const timeStamp = new Date(date);
    const dayName = timeStamp.toLocaleDateString("en-US", {
      weekday: len,
    });
    return dayName;
  }
  formatDate(weather) {
    const date = new Date(weather.location.localtime);
    const newDate = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return newDate;
  }
}

const dateTools = new DateTools();
export default dateTools;
