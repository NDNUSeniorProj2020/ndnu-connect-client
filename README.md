<img src="https://github.com/NDNUSeniorProj2020/ndnu-connect/blob/master/ndnu-connect-backend/ndnuconnect/static/images/NDNU.png" width=1000><br>
# NDNU Connect
NDNU Connect is a React-Django web application that allows past and present students of Notre Dame de Namur University (NDNU) to connect and help each other in their academic journeys and present career opportunities. These are achieved through the **Tutor**, **Job | Internship**, **Open Forum**, and **Alumni** applications.
### Why we made NDNU Connect
We made this app to help NDNU students connect with one another and serve as a medium for them to help each other through. We wanted to go beyond just serving current students because those of us working on this are soon-to-be alumni. By including an alumni aspect and a job page, the resources are open to all users so that users can connect with professionals who have graduated from NDNU.
## <img src="https://github.com/NDNUSeniorProj2020/ndnu-connect-client/blob/master/public/NDNU-Avatar-200x200.png" width=25> Applications
### Tutor
This application will match students and tutors with one another. Students and tutors will be able to create and view profiles that will display their schedules, subjects, locations, and prices. Students will also be able to rate their experience with tutor. Students and tutors will be able to find suitable tutors/students by searching for the ideal arrangement and being able to contact each other through their email addresses on their profiles.

**Tutor User Stories**
* [x] As a tutor, I would want to be able to see which students are looking for group tuition so that I can have them join my tuition group.
* [x] As a student, I want to be able to search for free tutors so that I can save money while learning.

### Job | Internship
This application allows users to post and view job opportunities. Users can post jobs that they can refer for, making this application much more effective at helping NDNU students and alumni find employment. Those searching for opportunities will be able to view the referrers' email to ask for help preparing for the prospect.

**Job | Internship User Stories**
* [x] As a new graduate, I want to be able to find job postings that have referrals so that I can at least get an interview instead of being rejected outright.

### Alumni
This application will allow past students to connect with each other by showing their graduation, year, and major.

**Alumni User Stories**
* [x] As an NDNU alumni, I want to be able to find other alumni so that I can catch up with old classmates.

### Open Forum
This application, as the name implies, is an open forum for users to share. This applicatation will be a future development. 

**Open Forum User Stories**
* [x] As an event organizer, I want to be able to create a post about an event so that other users can discuss and RSVP to that event.
* [ ] As someone with numerous posts, I want to be able to easily search through posts so that I can quickly read and respond to comments.

## Frontend
This repository contains the frontend for the project.

### Technologies Used

 
- <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width=25> **React** - We chose react as it allows for creation of interactive user interfaces.React is a JavaScript library for building user interfaces.<br> 

- <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" width=25> **npm** - We used npm as it allowed for easy management of packages that are required. It is also the default package manager for the JavaScript runtime environment Node.js, mentioned above.<br>

- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLg6PWSRo3AcsKJvPdoKpKM-1S3XZ4ZrPmNlgFk8eIUu0cbiM6&usqp=CAU" width=25> **Jest.io** - We chose Jest.io due to its a focus on simplicity. It is used as a JavaScript Testing Framework.<br>


- **Enzyme** We chose enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.


## Setup

### Prerequisites

This is a React application and needs Node.js to run. Below are links on how to install Node.js depending on your operating system.
### Installing Node.js via NVM (Preferred for Unix/MacOS/Linux)

* [via Homebrew (MacOS)](https://medium.com/@jamesauble/install-nvm-on-mac-with-brew-adb921fb92cc)
* [via curl (Unix, MacOS, and Linux)](https://itnext.io/nvm-the-easiest-way-to-switch-node-js-environments-on-your-machine-in-a-flash-17babb7d5f1b)

### Installing Node.js on Windows

* [Instructions here](https://www.guru99.com/download-install-node-js.html)

### Installing

Here are the steps to get the project on your machine and installing the dependencies needed:

```bash
# Step 1. Clone the project
$ git clone https://github.com/NDNUSeniorProj2020/ndnu-connect-client.git


# Step 2. cd into ndnu-connect-client and run npm install or npm i to install dependencies
$ cd ndnu-connect-client/
$ npm install
```

## Running the Application

Once you have installed Node.js, cloned the project, and installed the dependencies, you can start the application by running the command

```bash
$ npm start
```

**NOTE**: You need to have the [backend service](https://github.com/NDNUSeniorProj2020/ndnu-connect) running if you want to make working API calls. Also, make sure you are in the `ndnu-connect-client` directory in order for `npm start` to work.

## Setup and Run the Backend

Follow the instructions in [BACKEND-SETUP.md](BACKEND-SETUP.md)

## Running the Tests

To run the tests, simply run the command

```bash
$ npm test
```

These tests ensure:

* Components are rendering without crashing
* States are being updated correctly when functions are called
* Functions return the correct values given a certain input

### Contributors:
* [Christian Lapinig](https://github.com/ChristianLapinig)
* [Eric Cai](https://github.com/ericcai001x)
* [Leo Samuelson](https://github.com/leoskips34)
* [Dami Bolarinwa](https://github.com/Dbolarinwa)
* [Jorge Salas](https://github.com/jorgesv16)
