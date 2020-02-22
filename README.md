# NDNU Connect: Client
NDNU Connect is a site where students at NDNU can connect with tutors, alumni, and job and internship opportunities.

## Getting Started
Below are instructions on what you need and how to get the project running on your local machine for development and testing purposes.

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

## Running the Tests
To run the tests, simply run the command
```bash
$ npm test
```
These tests ensure:
* Components are rendering without crashing
* States are being updated correctly when functions are called
* Functions return the correct values given a certain input

## Contributing
Please read [CONTRIBUTING.md](https://github.com/NDNUSeniorProj2020/ndnu-connect-client/blob/add-markdown-files/CONTRIBUTING.md) for details on how to contribute to the project.

## Contributors
Please checkout our contributors [here](https://github.com/NDNUSeniorProj2020/ndnu-connect-client/blob/add-markdown-files/CONTRIBUTORS.md)
