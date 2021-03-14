// This is the Javascript file for the note taker site. -->
// last updated by Michael O'Connor, March 13, 2021 -->

// Insert Current date at Top of Work Day Scheduler
var today = moment().format("[As per locale the date is ] LLLL");
var currentDay = document.getElementById("currentDay");
currentDay.innerHTML = today


myLoad9()
myLoad10()
myLoad11()
myLoad12()
myLoad13()
myLoad14()
myLoad15()
myLoad16()
myLoad17()


// Run through the time and add the class to the entry depending on the time of day

var events = [
    {time:9, entry: ""},
    {time:10, entry: ""},
    {time:11, entry: ""},
    {time:12, entry: ""},
    {time:13, entry: ""},
    {time:14, entry: ""},
    {time:15, entry: ""},
    {time:16, entry: ""},
    {time:17, entry: ""},
]

let now = moment();
let hour = now.get('hour');
let eventWindowStart = 9;

// for (let i = 0; i < events.length; index++){
// if ((hour-eventWindowStart-[i])>0) {
//       $(document).ready(function(){$("#myTextarea"[i]+9).addClass("past");});
//       console.log("Hello World")
//     } else {
//         if ((hour-eventWindowStart+[i])<0) {
//           $(document).ready(function(){$("#myTextarea"[i]+9).addClass("future");});
//           console.log("Hello World2")
//             } else {
//               $(document).ready(function(){$("#myTextarea"[i]+9).addClass("present");});
//               console.log("Hello World3")
//     }
//   }
// }
// 9 am colour-coding
if ((hour-eventWindowStart)>0) {
  $(document).ready(function(){$("#myTextarea9").addClass("past");});
} else {
    if ((hour-eventWindowStart)<0) {
      $(document).ready(function(){$("#myTextarea9").addClass("future");});
        } else {
          $(document).ready(function(){$("#myTextarea9").addClass("present");});
  }
}  
// 10 am colour-coding
if ((hour-eventWindowStart-1)>0) {
    $(document).ready(function(){$("#myTextarea10").addClass("past");});
  } else {
      if ((hour-eventWindowStart-1)<0) {
        $(document).ready(function(){$("#myTextarea10").addClass("future");});
          } else {
            $(document).ready(function(){$("#myTextarea10").addClass("present");});
  }
}
// 11 am colour-coding
if ((hour-eventWindowStart-2)>0) {
  $(document).ready(function(){$("#myTextarea11").addClass("past");});
} else {
    if ((hour-eventWindowStart-2)<0) {
      $(document).ready(function(){$("#myTextarea11").addClass("future");});
        } else {
          $(document).ready(function(){$("#myTextarea11").addClass("present");});
  }
}
// 12 pm colour-coding
if ((hour-eventWindowStart-3)>0) {
    $(document).ready(function(){$("#myTextarea12").addClass("past");});
  } else {
      if ((hour-eventWindowStart-3)<0) {
        $(document).ready(function(){$("#myTextarea12").addClass("future");});
          } else {
            $(document).ready(function(){$("#myTextarea12").addClass("present");});
  }
}
// 13 pm colour-coding
if ((hour-eventWindowStart-4)>0) {
  $(document).ready(function(){$("#myTextarea13").addClass("past");});
} else {
    if ((hour-eventWindowStart-4)<0) {
      $(document).ready(function(){$("#myTextarea13").addClass("future");});
        } else {
          $(document).ready(function(){$("#myTextarea13").addClass("present");});
  }
}
// 14 pm colour-coding
if ((hour-eventWindowStart-5)>0) {
  $(document).ready(function(){$("#myTextarea14").addClass("past");});
} else {
    if ((hour-eventWindowStart-5)<0) {
      $(document).ready(function(){$("#myTextarea14").addClass("future");});
        } else {
          $(document).ready(function(){$("#myTextarea14").addClass("present");});
  }
}
// 15 pm colour-coding
if ((hour-eventWindowStart-6)>0) {
  $(document).ready(function(){$("#myTextarea15").addClass("past");});
} else {
    if ((hour-eventWindowStart-6)<0) {
      $(document).ready(function(){$("#myTextarea15").addClass("future");});
        } else {
          $(document).ready(function(){$("#myTextarea15").addClass("present");});
  }
}
// 16 pm colour-coding
if ((hour-eventWindowStart-7)>0) {
  $(document).ready(function(){$("#myTextarea16").addClass("past");});
} else {
    if ((hour-eventWindowStart-7)<0) {
      $(document).ready(function(){$("#myTextarea16").addClass("future");});
        } else {
          $(document).ready(function(){$("#myTextarea16").addClass("present");});
  }
}
// 17 pm colour-coding         
if ((hour-eventWindowStart-8)>0) {
  $(document).ready(function(){$("#myTextarea17").addClass("past");});
} else {
    if ((hour-eventWindowStart-8)<0) {
      $(document).ready(function(){$("#myTextarea17").addClass("future");});
        } else {
          $(document).ready(function(){$("#myTextarea17").addClass("present");});
  }
}

function mySave9() {
  var myContent9 = document.getElementById("myTextarea9").value;
  localStorage.setItem("myContent9", myContent9);
}
function myLoad9() {
  var myContent9 = localStorage.getItem("myContent9");
  document.getElementById("myTextarea9").value = myContent9;
}

function mySave10() {
  var myContent10 = document.getElementById("myTextarea10").value;
  localStorage.setItem("myContent10", myContent10);
}
function myLoad10() {
  var myContent10 = localStorage.getItem("myContent10");
  document.getElementById("myTextarea10").value = myContent10;
}

function mySave11() {
  var myContent11 = document.getElementById("myTextarea11").value;
  localStorage.setItem("myContent11", myContent11);
}
function myLoad11() {
  var myContent11 = localStorage.getItem("myContent11");
  document.getElementById("myTextarea11").value = myContent11;
}

function mySave12() {
  var myContent12 = document.getElementById("myTextarea12").value;
  localStorage.setItem("myContent12", myContent12);
}
function myLoad12() {
  var myContent12 = localStorage.getItem("myContent12");
  document.getElementById("myTextarea12").value = myContent12;
}

function mySave13() {
  var myContent13 = document.getElementById("myTextarea13").value;
  localStorage.setItem("myContent13", myContent13);
}
function myLoad13() {
  var myContent13 = localStorage.getItem("myContent13");
  document.getElementById("myTextarea13").value = myContent13;
}

function mySave14() {
  var myContent14 = document.getElementById("myTextarea14").value;
  localStorage.setItem("myContent14", myContent14);
}
function myLoad14() {
  var myContent14 = localStorage.getItem("myContent14");
  document.getElementById("myTextarea14").value = myContent14;
}

function mySave15() {
  var myContent15 = document.getElementById("myTextarea15").value;
  localStorage.setItem("myContent15", myContent15);
}
function myLoad15() {
  var myContent15 = localStorage.getItem("myContent15");
  document.getElementById("myTextarea15").value = myContent15;
}

function mySave16
() {
  var myContent16 = document.getElementById("myTextarea16").value;
  localStorage.setItem("myContent16", myContent16);
}
function myLoad16() {
  var myContent16 = localStorage.getItem("myContent16");
  document.getElementById("myTextarea16").value = myContent16;
}

function mySave17
() {
  var myContent17 = document.getElementById("myTextarea17").value;
  localStorage.setItem("myContent17", myContent17);
}
function myLoad17() {
  var myContent17 = localStorage.getItem("myContent17");
  document.getElementById("myTextarea17").value = myContent17;
}
