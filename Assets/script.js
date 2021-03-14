// This is the Javascript file for the note taker site. -->
// last updated by Michael O'Connor, March 14, 2021 -->

// Insert Current date at Top of Work Day Scheduler
var today = moment().format("[As per locale the date is ] LLLL");
var currentDay = document.getElementById("currentDay");
currentDay.innerHTML = today

// Run through the time and add the class to the entry depending on the time of day

let now = moment();
let hour = now.get('hour');
let eventWindowStart = 9;

for (let i = 0; i < eventWindowStart; i++){
if (hour-eventWindowStart-i>0) {
      $(document).ready(function(){$("#myTextarea"+(i+9)).addClass("past");});
      console.log(i+"past");
    } else {
        if ((hour-eventWindowStart-i)<0) {
          $(document).ready(function(){$("#myTextarea"+(i+9)).addClass("future");});
      console.log(i+"future");
            } else {
              $(document).ready(function(){$("#myTextarea"+(i+9)).addClass("present");});
              console.log(i+"present");
    }
  }
}

for (let i = 0; i < eventWindowStart; i++){
  var myContent = localStorage.getItem("myContent"+(i+9));
  document.getElementById("myTextarea"+(i+9)).value = myContent;
}

function mySave9() {
  var myContent9 = document.getElementById("myTextarea9").value;
  localStorage.setItem("myContent9", myContent9);
}

function mySave10() {
  var myContent10 = document.getElementById("myTextarea10").value;
  localStorage.setItem("myContent10", myContent10);
}

function mySave11() {
  var myContent11 = document.getElementById("myTextarea11").value;
  localStorage.setItem("myContent11", myContent11);
}

function mySave12() {
  var myContent12 = document.getElementById("myTextarea12").value;
  localStorage.setItem("myContent12", myContent12);
}

function mySave13() {
  var myContent13 = document.getElementById("myTextarea13").value;
  localStorage.setItem("myContent13", myContent13);
}

function mySave14() {
  var myContent14 = document.getElementById("myTextarea14").value;
  localStorage.setItem("myContent14", myContent14);
}

function mySave15() {
  var myContent15 = document.getElementById("myTextarea15").value;
  localStorage.setItem("myContent15", myContent15);
}

function mySave16
() {
  var myContent16 = document.getElementById("myTextarea16").value;
  localStorage.setItem("myContent16", myContent16);
}

function mySave17
() {
  var myContent17 = document.getElementById("myTextarea17").value;
  localStorage.setItem("myContent17", myContent17);
}
