// This is the Javascript file for the note taker site. -->
// last updated by Michael O'Connor, March 12, 2021 -->

// Insert Current date at Top of Work Day Scheduler
var today = moment().format("[As per locale the date is ] LLLL");
var currentDay = document.getElementById("currentDay");
currentDay.innerHTML = today

// Add a sticky to the Jumpbotron to facilitate scrolling

window.onscroll = function() {myFunction()};

var jumbotron = document.getElementById("jumbotron");
var sticky = jumbotron.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    jumbotron.classList.add("sticky");
  } else {
    jumbotron.classList.remove("sticky");
  }
}

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
console.log("Start of Day: " + eventWindowStart);
console.log("Current Hour: " + hour);
console.log("Whether Current Hour is more or less than Event Window: " + (hour-eventWindowStart));
console.log("Number of Event Windows in the Day: " + events.length)

// Here is a loop routine that I tried to get going but ran out of time, will execute next time.

// for (let i = 0; i < events.length; index++){
// if ((hour-eventWindowStart+[i])>0) {
//       $(document).ready(function(){$("#[i]+9").addClass("past");});
//     } else {
//         if ((hour-eventWindowStart+[i])<0) {
//           $(document).ready(function(){$("#[i]+9").addClass("future");});
//             } else {
//               $(document).ready(function(){$("#[i]+9").addClass("present");});
//     }
//   }
// }

if ((hour-eventWindowStart)>0) {
  $(document).ready(function(){$("#9").addClass("past");});
} else {
    if ((hour-eventWindowStart)<0) {
      $(document).ready(function(){$("#9").addClass("future");});
        } else {
          $(document).ready(function(){$("#9").addClass("present");});
}
}  
if ((hour-eventWindowStart-1)>0) {
    $(document).ready(function(){$("#10").addClass("past");});
  } else {
      if ((hour-eventWindowStart-1)<0) {
        $(document).ready(function(){$("#10").addClass("future");});
          } else {
            $(document).ready(function(){$("#10").addClass("present");});
  }
}
  
if ((hour-eventWindowStart-2)>0) {
  $(document).ready(function(){$("#11").addClass("past");});
} else {
    if ((hour-eventWindowStart-2)<0) {
      $(document).ready(function(){$("#11").addClass("future");});
        } else {
          $(document).ready(function(){$("#11").addClass("present");});
}
}

if ((hour-eventWindowStart-3)>0) {
    $(document).ready(function(){$("#12").addClass("past");});
  } else {
      if ((hour-eventWindowStart-3)<0) {
        $(document).ready(function(){$("#12").addClass("future");});
          } else {
            $(document).ready(function(){$("#12").addClass("present");});
  }
}

if ((hour-eventWindowStart-4)>0) {
  $(document).ready(function(){$("#13").addClass("past");});
} else {
    if ((hour-eventWindowStart-4)<0) {
      $(document).ready(function(){$("#13").addClass("future");});
        } else {
          $(document).ready(function(){$("#13").addClass("present");});
}
}

if ((hour-eventWindowStart-5)>0) {
  $(document).ready(function(){$("#14").addClass("past");});
} else {
    if ((hour-eventWindowStart-5)<0) {
      $(document).ready(function(){$("#14").addClass("future");});
        } else {
          $(document).ready(function(){$("#14").addClass("present");});
}
}

if ((hour-eventWindowStart-6)>0) {
  $(document).ready(function(){$("#15").addClass("past");});
} else {
    if ((hour-eventWindowStart-6)<0) {
      $(document).ready(function(){$("#15").addClass("future");});
        } else {
          $(document).ready(function(){$("#15").addClass("present");});
}
}

if ((hour-eventWindowStart-7)>0) {
  $(document).ready(function(){$("#16").addClass("past");});
} else {
    if ((hour-eventWindowStart-7)<0) {
      $(document).ready(function(){$("#16").addClass("future");});
        } else {
          $(document).ready(function(){$("#16").addClass("present");});
}
}
         
if ((hour-eventWindowStart-8)>0) {
  $(document).ready(function(){$("#17").addClass("past");});
} else {
    if ((hour-eventWindowStart-8)<0) {
      $(document).ready(function(){$("#17").addClass("future");});
        } else {
          $(document).ready(function(){$("#17").addClass("present");});
}
}

// Save the Data Entered Each Day


    // let saveFile = () => {
    	
    //     // Get the data from each element on the form.
    //     const entry9 = document.getElementById('9');
    //     const entry10 = document.getElementById('10');
    
    //     // This variable stores all the data.
    //     let events = 
    //         '9am:' + 'Entry: ' +entry9.value + ' \r\n '
    //         '10am:' + 'Entry: ' +entry10.value + ' \r\n '
        
    //     // Convert the text to BLOB.
    //     const textToBLOB = new Blob([data], { type: 'text/plain' });
    //     const sFileName = 'formData.txt';	   // The file to save the data.
    // }




   