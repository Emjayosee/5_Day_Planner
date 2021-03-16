
# Assignment05

This is the repo for the Code Quiz assignment 05, due Jan 28, 2021.


# Unit 05 Javascript Homework: Day Planner

Submitted: March 12, 2021, Michael O'Connor, 604 765-6061

# 01 Goal: 

    The Goal of this project is to create a simple calendar application that allows a user 
    to save events for each hour of the day by modifying starter code. This app will run in
    the browser and feature dynamically updated HTML and where possible CSS powered by
    jQuery. Here is a link to the Github folder https://github.com/Emjayosee/Assignment05
    and a link to the deployed website https://emjayosee.github.io/Assignment05/.

# 02 Approach:

    In approaching this project, I fell behind and had to go back about a month to pick it up 
    again, with so many advances, I spent several hours trying to achieve the objectives.  My 
    initial submissions, failed to properly use loacl storage, even though it was an obvious requirement
    I went back over the class illustrations, class video and found this useful article, 
    https://www.tiny.cloud/blog/javascript-localstorage/ and rebuilt that app using local storage.
    I then made an attempt at a loop to run the various JS, colour coding, and was close but
    worked with Tutor to make the loops work.  BOOM, now it is done!

    I followed the following plan design:

            Goal:

            Develop a calendar that can be used to plan out each day, with some user 
            requested features, like colour coding of the event time blocks and an ability 
            to save the entries in local storage.  

            Design:

            [X]	WHEN the user opens the planner the current day and time is displayed at the 
                top of the calendar.
            [X]	WHEN the user scrolls down the user is presented with timeblocks for standard
                 business hours.
            [X] Each timeblock is color coded to indicate whether it is in the past, present, or 
                future, past events are then displayed in white.
            [X] WHEN the user views the timeblocks for that day the events are listed and persists
                when that user returns using that URL.
            [X] WHEN the user clicks into a timeblock, the user can add to the event and save a 
                new entry for that timeblock, whatever is entered at the time of saving is
                stored in local storage.   
            
            Here is the basic logic flow :

                [X] On load, display timeblocks 

                [X] User is advised to click the text area to add an entry

                [X] User can see the entries by clicking the field

                [X] When the page loads the schedule refreshed the boxes and displays a colour 
                    for past, present and future.

            Build:
            •	Set up three files, index.html, script.js and style.css (add to Github) [x]
            
            HTML:
                >Layout for Landing page [x]
                >Schedule of events by hour 9 to 5 [x]
                >CSS [x]

            JavaScript: 
                > Use of JQuery [X]
                > Use of moment.js [X]
                > Adjust timeblocks to classify past, present and future [X ]
                > Save routine [X]
                > Loop for colour coding and loading from local storage.
            
            CSS:
                >Stylish background image and styling [x]
            


# 03 Testing and Quality Control:

    1. Test each of the criteria to confirm functionality.

    2. Format HTML Code to make it easier to follow when viewed at source.

    3. Load the files and tested the page functionality at GITHUB.

    4. Run the html through a code validation service on the final commit.  Use validator.w3.org 
    and describe any issues and resolution.  Adjust before the final commit. 
    Some issues with tags, but does not seem to impact results.

# 04 Lessons Learned:

The following lessons learned:

    1. Use of loops, to reduce the duplication of code

    2. Use of Jquery shortcuts.

    3. Using Local Storage.

# 05 Further improvements to make:

The following items should be considered for future enhancements, time and budget permitting:

    1. Add an ability to send the file as a note by email or text.

# 06 Current Renderings:

See Current Rendering at the time of writing in the Assignment05 Repo. 
![alt text](Assets/Images/EarlyMorningView.png)
![alt text](Assets/Images/TenAMView.png)



