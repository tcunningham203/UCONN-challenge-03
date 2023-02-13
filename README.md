# UCONN-challenge-03
The third challenge for the Uconn bootcamp. A web application that generates a password when the button is pressed. 

# Link to deployed application

https://tcunningham203.github.io/UCONN-challenge-03/


# Screenshot link

![AppScreenshot](/assets/screenshots/WEBSITE-SCREENSHOT.png?raw=true "Screenshot of Deployed Application")


# What the Application Does, Features, How to Use

This application is a website which contains a password generator. If you click on the "Generate Password" button, it will open a prompt which asks you to specify the length of the password you wish to generate. You must input a number of 8 or higher, but no more than 128. If you input anything other than a number in this range, or if you cancel the prompt, a second prompt appears alerting you of the correct range to input if you wish to continue. 

Assuming the correct range is entered, it then takes you to another series of prompts- 4 in a row. These prompts are all meant to ask about which type of characters you want in your password. The first prompt is regarding lowercase letters. If you press "OK", lowercase letters will be among the characters generated. If you press "Cancel", they will not. This process repeats 3 more times for uppercase, numerical, and special characters respectively. If you press cancel on all 4, a password will not be generated and a message will be returned, saying that you must pick at least 1 of the 4.

Picking 1-4 of the character options will generate the password. You can then copy the password by highlighting the text and copying it as you would any other text. 

IMPORTANT: If you wish to generate a new password, it is recommended that you refresh the page first, because the previous password will still be in the box. If you refresh the page, it clears the box. I tried to find a way to have the "generate" button also clear the box, but the solution seems to be beyond the scope of this week's lessons and project. The easiest way would be just to add a "clear" button, but then the project would look different from the intended screenshot. Therefore, I left it as is. 

#Challenges I Faced

I was unsure of how to proceed; I knew what I had to do but I didn't know the exact way to do it. My first step was to search online for similar projects. I found some things resembling this project, but the code was bad or didn't accomplish what this assignment wanted.

After reviewing the previous lessons, I felt that several if/then/else statements would get the job done. I'm sure there's a more effecient way to do it, but I felt most comfortable with writing the if/then/else statements so I went in that direction. So as to not confuse myself, I wrote a prompt route "map" on paper, then put the matching letters with the correct path. L is for lower, U is for upper, N is for numeric, S is for special. In this way, I found 16 possible combinations, including a result where none of them were selected.

Despite this, I did reference the web for certain things I didn't know, especially regarding how to get the random generation working. I tried many different things for hours and it wasn't working- after a bit of tweaking and trying different things I finally got it working as intended, and the result is different from the sites I referenced initially. The links to the (2) websites I used to learn more about Javascript are commented in the Javascript file. 

![PlanningPic](/assets/screenshots/routes-map.jpg?raw=true "Prompt Routes Picture")

# Commit Changes

Commit 01: Initial Commit

Created repository and cloned it.

Commit 02: File structure

Added files from UCONN, structured them, linked css to html

Commit 03: Code Working

Added Javascript to make the password function work. Has only 2 prompts so far.

Commit 04: Prompt Routes

Added all possible routes needed to generate the correct outcomes. Tested screenshot link in readme to see if it works.

Commit 05: Updated Readme

Updated readme with relevant information.