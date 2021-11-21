Describe: beepBoop()

# Mr. Roboger

#### By _Amy Young_

#### _This site returns a range of numbers from 0 to the user-inputted number, with some numbers replaced with "Beep!", "Boop1", or "Will you be my neighbor?"_

## Technologies Used

* _HTML_
* _JavaScript_
* _jQuery_
* _Bootstrap_

## Description

_When the user inputs a number into the text area of the form, a range of numbers from 0 to the inputted number is returned below. Any number in the range which contains a 3 in any digit, the number is replaced with "Will you be my neighbor?". If containing 2, "Boop!", if containing 1, "Beep! (in order of priority) using the beeepBoop function defined in scripts.js._

## Setup/Installation Requirements

_Use as a template for further development_
1) open terminal
2) enter the following into terminal: `# git clone https://github.com/y0ung4my/mr-roboger`
3) to view the webpage as you make changes, you can open the index.html file in a web browser and refresh the page once the changes are saved.

To view in GitHub Pages (requires internet connection)_
https://y0ung4my.github.io/mr-roboger/

## Known Bugs

* _if a number with more than 3 digits is entered, the page may time out or take a long time to load._

## License

MIT License

Copyright (c) 2021 Amy Young

Questions or comments: youngamy1223@gmail.com

## Specifications (Test-Driven Development for scripts.js):

**Test:** "It should return an array with a 0 if the number 0 is inputted"  
**Code:** beepBoop(0);  
**Expected Output:** [0]  

**Test:** "It should return an array with range of numbers from 0-1 if 1 is inputted"  
**Code:** beepBoop(1)  
**Expected Output:** [0, 1]  

**Test:** "It should return an array with 0 and 'Beep!' if the number 1 is inputted"  
**Code:** beepboop(1);  
**Expected Output:** [0, "beep"]  

**Test:** "It should return an array with 0, 'Beep!' and 'Boop' if the number 2 is inputted"  
**Code:** beepBoop(2);  
**Expected Output:** [0, "Beep!", "Boop!"]  

**Test:** "It should return an array with 0, 'Beep!', 'Boop!', and 'Won't you be my neighbor?' if the number 3 is inputted"  
**Code:** beepBoop(3);  
**Expected Output:** [0, "Beep!", "Boop!", "Won't you be my neighbor?"]  

**Test:** "It should return "Won't you be my neighborhor" in place of a number containing 3 in any of its digits. So, if the number 13 is inputted, the last index should display "Won't you be my neighbor?"  
**Code:** beepBoop(13);  
**Expected Output*:** [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, 12, "Won't You be my neighbor?"]  

**Test:** "It should return "Boop!" to any inputted number containing a 2"  
**Code:** beepBoop(13);  
**Expected Output:** [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, "Boop!", "Won't You be my neighbor?"]  

**Test:** "It should return "Boop!" to any inputted number containing a 1"  
**Code:** beepBoop(13);  
**Expected Output:** [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, "Beep!", "Boop!", "Won't You be my neighbor?"]

**Test:** "It should return the array of numbers as a string"
**Code:** beepBoop(13);
**Expected Output":** "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, 10, Beep!, Boop!, Won't You be my neighbor?"