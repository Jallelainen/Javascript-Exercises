//EX 1
function getDateAndTime() {
  var str = "";

  var days = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );

  var now = new Date();
  str =
    days[now.getDay()] +
    " " +
    now.toLocaleDateString() +
    " " +
    now.toLocaleTimeString();
    document.getElementById("getDate").innerHTML = str;
    setInterval(getDateAndTime, 1000);
}


//EX 2
function isItALeapYear() {
  var year = document.getElementById("myYear").value;
  var yes = "This is a leap year.";
  var no = "This is not a leap year.";

  if (year % 400 === 0) document.getElementById("leapYear").innerHTML = yes;
  if (year % 100 === 0) document.getElementById("leapYear").innerHTML = no;
  return year % 4 === 0;
}
