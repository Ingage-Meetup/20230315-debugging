# Code Debugging Excercises
Continuing on last month's [Code Reading](https://github.com/Ingage-Meetup/20230115-reading-code) theme of building skills we need to read and understand codebases, this month we will take a look at some existing code that is failing for one reason or another. There are existing unit tests on the different examples, and in some examples, some tests work while others fail, and in other examples, all tests are failing. Your job is to work through these examples, using a combination of code analysis and tools like a debugger, to get the unit tests to pass. There are 10 total examples, with the first being the easiest and the tenth being the hardest.

## The Examples
In order to make this a little easier on the meeting organizers, we decided to again break our rule of being "platform agnostic". We chose to do this month's exercises in JavaScript, partly because many people already have npm and node installed, so this is easy to get up and running, but also because it would take a lot of time to get comparable examples setup in different languages. We also need to give credit to github user HarshCasper, who published a [repository of code examples](https://github.com/DSC-SIST/D-Bug/tree/main/JavaScript) that we borrowed from for this meeting.

## Installation Requirements
If you do not have node and npm installed or available, you will need to install that on your system. These should work with any recent version of node, but you can install the latest LTS from [here](https://nodejs.org/en/download/). Once you have node and npm available, simply run `npm i` in this directory to install the required node modules, and then you can run a command like `npm run example1` to run the tests for the first example, `npm run example2` to run the tests for the second example, and so on.

## The Rules
Wait, rules? Yes, there are a few, mainly to keep us focused on the point of this meeting - to analyze and debug existing code.

1. Before doing anything in an example, make sure you understand the desired outcome
    * Take a few minutes to read the example's description, then run the unit tests to observe the problem(s)
2. Try to determine the problem without using your computer
    * After you see the problem, like last month, take some time to walk through the code (in your head, on paper, etc) to see if you can spot the error(s)
    * If you think you've found it, make your updates and re-run the tests - if they pass, then move on to the next example. If they still fail, then continue in the example.
3. Debug the problem
    * Use whatever tools you are comfortable with, but we'd encourage you to get to know your IDE's debugger, rather than sprinkling `console.log` statements in the code
4. Do not read the description and immediately begin writing a new solution (or Google a solution...)
    * You may read the description on some of these and think, "I've done that 100 times before, I can just write that myself!". The point of this exercise is to find the bug(s) in the existing codebase and fix them, not to simply see a problem description and solve it.
5. Do not use external libraries to fix the code
    * You may read the description on some of these examples and think, "Oh, I can just use XYZ npm package to do that!". Sure, there are lots of packages out there, but again, the point of this exercise is to find the bug(s) in the existing code and fix them. While these are contrived examples, part of this exercise is to understand an existing codebase and then be able to work within it.
