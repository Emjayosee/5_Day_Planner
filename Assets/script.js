

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

// const events = [
//     {time:9, entry: ""},
//     {time:10, entry: ""},
//     {time:11, entry: ""},
//     {time:12, entry: ""},
//     {time:13, entry: ""},
//     {time:14, entry: ""},
//     {time:15, entry: ""},
//     {time:16, entry: ""},
//     {time:17, entry: ""},

// ]

// let now = moment();
// let hour = now.get('hour');
// console.log("Hour: " + hour);

// function myFunction() {
//     for (let i = 0; i < events.length; index++){
        
//         if (hour<events.time[i]) {
//             document.getElementsByid("i+9")[i].setAttribute("class", "future");
//         }else{
//             if (hour>events.time[i]) {
//             document.getElementsByid("i+9")[i].setAttribute("class", "past");
//         }else{
//             document.getElementsByid("i+9")[i].setAttribute("class", "present");
//             }
//         }
//         }
//     }


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




   