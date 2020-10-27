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
    "Current time: " +
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

  if (year > null) {
    if (year % 4 == 0) {
      if (year % 100 == 0) {
        if (year % 400 == 0) {
          document.getElementById("leapYear").innerHTML = yes;
          document.getElementById("leapYear").style.color = "#333";
          console.log("leap true");
        } else {
          document.getElementById("leapYear").innerHTML = no;
          document.getElementById("leapYear").style.color = "red";
          console.log("leap false");
        }
      } else {
        document.getElementById("leapYear").innerHTML = yes;
        document.getElementById("leapYear").style.color = "#333";
        console.log("leap true");
      }
    } else {
      document.getElementById("leapYear").innerHTML = no;
      document.getElementById("leapYear").style.color = "red";
      console.log("leap false");
    }
  } else {
    document.getElementById("leapYear").innerHTML = "Not a valid input.";
    document.getElementById("leapYear").style.color = "red";
  }
}

//EX 3
function isItASunday() {}
