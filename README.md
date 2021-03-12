# Assignment05
This is the repo for the Code Quiz assignment 05, due Jan 28, 2021.


# Unit 04 Javascript Homework: Code Quiz

Submitted: March 12, 2021, Michael O'Connor, WebDev Wannabe, 604 765-6061

# 01 Goal: 

    The Goal of this project is to create a simple calendar application that allows a user 
    to save events for each hour of the day by modifying starter code. This app will run in the 
    browser and feature dynamically updated HTML and where possible CSS powered by jQuery. Here 
    is a link to the Github folder <https://github.com/Emjayosee/Assignment05> and a link to the 
    deployed website <https://emjayosee.github.io/Assignment05/>.

# 02 Approach:

    In approaching this project, I fell behind and had to go back about a month to pick it up 
    again, with so many advances, I spent several hours trying to achieve the objectives.  This 
    is what I have so far, it meets a number of the requirements, and by accident includes privacy 
    blocker so that the user clicks te window to see events.  

    I followed the following plan design:

        Code Quiz

            Goal:

            Develop a timed quiz on Coding and have it present a question, allow th user time 
            to respond and go to the next question, advising the user if they are correct or 
            incorrect and then keeping track of the scores and high scores.

            Design:
            [X]	WHEN the user opens the planner the current day and time is displayed at the 
                top of the calendar
            [X]	WHEN the user scroll down the user is presented with timeblocks for standard business hours
            [X] WHEN the user views the timeblocks for that day, and clicks the time block to bypass 
                the privacy screen, the events are listed
            [ ] Each timeblock is color coded to indicate whether it is in the past, present, or future
            [X] WHEN the user clicks into a timeblock, the user can enter an event and it is saved in 
                the background and can be recalled by clicking on the text area again presumably in local storage and when the page is refreshed the saved events persist   
            
            Here is the basic logic flow (ignoring the coour coded timeslots: past, future and present):


                [X] On load, display introduction and directions

                [X] User is advised to click the text area to add an entry

                [X] User can see the entries by clicking the field

                [ ] When the page loads the schedule refreshed the boxes and displays a colour for past, present and future.


            Build:
            •	Set up three files, index.html, script.js and style.css (add to Github) [x]
            •	HTML:
                >Layout for Landing page [x]
                >Schedule of events by hour 9 to 5 [x]
                >CSS [x]

            JavaScript: 
                > Timer routine [x]
                > Splash screen routine that announces game is over - alert box [x]
            
            CSS:
                >Stylish background image and styling [x]
            


# 03 Testing and Quality Control:

    1. Test each of the criteria to confirm functionality.

    2. Format HTML Code to make it easier to follow when viewed at source.

    3. Load the files and tested the page functionality at GITHUB.

    6. Run the html through a code validation service on the final commit.  Use validator.w3.org and describe any issues and resolution.  Adjust before the final commit. Some duplicate attribute issues, but does not seem to impact results.

# 04 Lessons Learned:

The following lessons learned:

    1. Use of loops

    2. How to save data in local storage


# 05 Further improvements to make:

The following items should be considered for future enhancements, time and budget permitting:

    1. Use of local storage

    2. Ability to delete entires


# 06 Current Renderings:

See Current Rendering at the time of writing in the Assignment04 Repo. 
![alt text](Assets/Images/Morning.png)
![alt text](Assets/Images/Afternoon.png)
