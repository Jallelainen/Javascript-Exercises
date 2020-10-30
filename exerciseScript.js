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
function isItASunday() {
  var year = document.getElementById("myYear").value;
  var date = new Date();
  date.setFullYear(year, 0, 1);

  if (date.getDay() == 0) {
    document.getElementById("isIt").innerHTML = "This is a Sunday!";
    document.getElementById("isIt").style.color = "darkgreen";
    console.log("sunday true");
    console.log("date: " + date);
  } else {
    document.getElementById("isIt").innerHTML = "This is not a Sunday..";
    document.getElementById("isIt").style.color = "#333";
    console.log("sunday false");
    console.log("date: " + date);
  }
}

//EX 4
var lives;
var randomNumber;

function generateNumber() {
  randomNumber = Math.floor(Math.random() * 10);
  lives = 5;

  document.getElementById("lives").innerHTML = "Lives left: " + lives;
  document.getElementById("outcome").innerHTML = " ";
  console.log(randomNumber);
}

function guessingGame() {
  var guess = document.getElementById("guess").value;
  console.log(guess);

  if (randomNumber == guess - 1) {
    document.getElementById("outcome").innerHTML = "CORRECT! You've won!";
  } else if (lives == 1) {
    document.getElementById("outcome").innerHTML =
      "GAME OVER. You've lost all your lives.";
    livesCounter();
  } else {
    document.getElementById("outcome").innerHTML = "Wrong. Try again.";
    livesCounter();
  }
}

function livesCounter() {
  lives = lives - 1;
  document.getElementById("lives").innerHTML = "Lives left: " + lives;
}

//EX 5
function daysUntilChristmas() {
  var today = new Date();
  var christmas = new Date(today.getFullYear(), 11, 24);

  if (today.getMonth() == 11 && today.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }
  var one_day = 1000 * 60 * 60 * 24;
  var days = Math.ceil((christmas.getTime() - today.getTime()) / one_day);

  document.getElementById("daysLeft").innerHTML =
    "There are " + days + " days left until Christmas!";

  console.log("today" + today);
  console.log("christmas" + christmas);
}

//EX 6
function theReverser() {
  var str = document.getElementById("input").value;

  var reversed = str.split("").reverse().join("");
  document.getElementById("outcome").innerHTML = "<b>Outcome: </b>" + reversed;
}

//EX 7
function strOutcomes() {
  document.getElementById("outcomes").innerHTML = "Outcomes: ";
  var input = document.getElementById("input").value;
  var char = input.split("");
  var paragraph = document.getElementById("outcomes");
  var next;
  console.log(char);

  for (i = 0; i < char.length; i++) {
    next = char[i];
    paragraph.textContent += next;
    paragraph.textContent += ", ";
    console.log("1:" + next);

    for (k = i + 1; k < char.length; k++) {
      next = next + char[k];
      paragraph.textContent += next;
      paragraph.textContent += ", ";
      console.log("2:" + next);
    }
  }
}

//EX 8
function alphabeticalOrder() {
  var word = document.getElementById("input").value;
  var char = word.split("");
  var inOrder = char.sort().join("");

  document.getElementById("outcome").innerHTML = "<b>Outcome: </b>" + inOrder;
}

//EX 9
function wordManipulator() {
  var sentence = document.getElementById("input").value;
  var words = sentence.split(" ");
  var longest = 0;
  var longWord;
  var newSentence = sentence[0].toUpperCase() + sentence.substring(1);
  console.log(words.length);

  for (i = 0; i < words.length; i++) {
    if (words[i].length > longest) {
      longWord = words[i];
      longest = words[i].length;
    }
  }

  document.getElementById("outcome").innerHTML =
    "<b>Outcome: </b>" + newSentence;
  document.getElementById("outcome2").innerHTML =
    "<b>Longest word: </b>" + longWord;
  console.log(longest);
  console.log(longWord);
}

//EX 10
function primeNumber() {
  var n = document.getElementById("input").value;
  var isPrime = true;

  if (n == 1) {
    document.getElementById("outcome").innerHTML =
      "This is not a prime number.";
    document.getElementById("outcome").style.color = "red";
    console.log("prime false");
  } else if (n == 2) {
    document.getElementById("outcome").innerHTML = "This is a prime number!";
    document.getElementById("outcome").style.color = "#333";
    console.log("prime true");
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x == 0) {
        document.getElementById("outcome").innerHTML =
          "This is not a prime number.";
        document.getElementById("outcome").style.color = "red";
        console.log("prime false");
        isPrime = false;
      }
    }
    if (isPrime == true) {
      document.getElementById("outcome").innerHTML = "This is a prime number!";
      document.getElementById("outcome").style.color = "#333";
      console.log("prime true");
    }
  }
}

//EX 11
function whatType() {
  var type = document.getElementById("input").value;
  console.log(type.type);

  if (isNaN(type)) {
    document.getElementById("outcome").innerHTML = "<b>Type: </b>string.";
  } else {
    document.getElementById("outcome").innerHTML = "<b>Type: </b>integer.";
  }
}

//EX 12
function loop15() {
  var num = 0;
  var i;

  for (i = 0; i < 15; i++) {
    num++;
    if (num % 2 == 0) {
      console.log("even");
      var para = document.createElement("P");
      para.innerHTML = num + " is even.";
      document.getElementById("evenOdd").appendChild(para);
    } else {
      console.log("odd");
      var para = document.createElement("P");
      para.innerHTML = num + " is odd.";
      document.getElementById("evenOdd").appendChild(para);
    }
  }
}

//EX 13
function happyNum() {
  var num = 1;
  var numArr = ("" + num).split("");

  for (var i = 0; i < numArr.length; i++) {
    numArr[i] ** 2;
  }

  console.log(numArr);
}

//EX 14
function intoaString() {
  var days = new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday");
  var str = days.join(", ");

  document.getElementById("outcome").innerHTML = str + " are workdays.";
}

//EX 15
function sizeOrder() {
  var nums = new Array(4, 5, 2, 9, -1, 11);
  document.getElementById("outcome").innerHTML = "Array[" + nums.sort(function(a, b){return a-b}).join(", ") + "]";
}
