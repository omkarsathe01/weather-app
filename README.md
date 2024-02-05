# Simple Weather App Project

This project displays the weather information of the queried City and Country.

## Table of Contents
- [Introduction](#introduction)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
  1. [Git Setup](#1-git-setup)
  2. [Start Front-end](#2-start-front-end)
  3. [Start Back-end](#3-start-back-end)
- [Features](#features)
- [Future Improvements](#future-improvements)
- [Licensing](#licensing)
- [Contact me!](#contact-me)

## Introduction

The main aim of this project is to get a basic, concise and hands on understanding of the concepts in ReactJS and NodeJS.
The poject contains one page with two input fields for entering the desired City and Country. Along with a button titled "Get Weather" when clicked gives the detailed weather information.
The following information is shown:

* Today's Date in the format Day, Month DD, YYYY
* Location in the format City, Country [Latitude, Longitude]
* Temperature in the format Temperature (Minimum Temperature - Maximum Temperature)
* Humidity
* Sunrise
* Sunset 
* Humidity detailed
* Cloudes in percentage

The project internally uses OpenWeatherMap API's, more about them [here](https://openweathermap.org/).
The demo slides are accessible [here](https://docs.google.com/presentation/d/1D2vT9Auqw7QoX1Xb8bhL85gwstsHUh_BKEnwiKVTQN0/edit?usp=sharing).

## Screenshots

![Empty Weather App Welcome Page](https://drive.google.com/uc?id=1-sO49H24xNKaEjkl2yOhDa7PtTMRaAAA)

![Weather App showing Weather Information of Pune city](https://drive.google.com/uc?id=15TIyM8SchGKi8Aeq4np4hZrKlucgzV5x)

![Weather App showing Weather Information of Delhi city and India Country](https://drive.google.com/uc?id=1InrSFjlj1aS4LteaEZikn1kn1-SWBbY4)

## Getting Started

This is not a live project so for setting up one has to take a pull and then start the project. 
[Note: If you know about git, node, and npm and have them installed on your local machine then directly jump to steps 1.6, 2.2, 2.3, 3.2, and 3.3]
The detailed steps are given below:

### 1. Git Setup

1. Make sure git is installed on your local machine by using `git version` or `git --version` command, if not refer to this article [Install Git - GitHub](https://github.com/git-guides/install-git) or official documentation [Getting Started - Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

2. Go to your coding folder where all your codes / projects are stored. 

3. If you dont have proper folder structure then for now follow the below command inside terminal `mkdir "C:/coding/"` then navigate to the folder `cd "C:/coding/"`.

4. Create a new folder titled weather-app `mkdir weather-app` and navigate to that folder `cd weather-app`.

5. Initialize empty git repository `git init`.

6. Take a pull.
```bash
git pull https://github.com/omkarsathe01/weather-app.git
```

7. Congratulations you have successfully completed your first step!

### 2. Start Front-end

1. For second and third step it's important to make sure node and npm is installed on your local machine by using `node --version` and `npm --version` command, if not refer to this official documentation [Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

2. Install the required dependencies for Front-end using `npm run build:fe` command.

3. Run Front-end using `npm run start:fe` command.

4. Your Front-end is running on http://localhost:3000.

5. Congratulations you have successfully completed your second step!

### 3. Start Back-end

1. Open another terminal.

2. Install the required dependencies for Back-end using `npm run build:be` command.

3. Run Back-end using `npm run start:be` command.

4. Your Back-end is running on http://localhost:8080.

5. Congratulations you have successfully completed your last step!

Tada! It's all done. Do search the weather information.
Happy Coding!

## Features

* Seperate Front-end and Back-end services.

* Well structured, documented and maintainable code.

* Good User Interface and User Experience on desktop and easy to use.

## Future Improvements

All the points listed here are planned for next phase and if you have any feedback / suggestions / inputs feel free to [get in touch with me!](#contact-me)

* As the name suggests this is the simple project means more advanced concepts are not implemented here.

* API documentation (Swagger / Google Docs).

* Authentication and Authorization can be implemented.

* In the current implementation API secrets are getting directly exposed.

* Proper request and response validation.

* Error handling on Front-end side.

* Responsive webpage.

* Additionally welcome page and error page can also be implemented.

## Licensing

This is open source project means it can be modified, used commercially, and distributed, however giving small credit will be appreciated.

The Front-end of the project is inspired by [Code for Interview - YouTube](https://youtu.be/T62wID3JCUE?si=KQfUiuFh-tE3NZh7)

## Contact me!
Let's chit-chat while having a cup of coffee at [omkarsathe.pers\@gmail.com](mailto:omkarsathe.pers@gmail.com?subject=Feedback%20about%20Simple%20Weather%20App!&body=Please%20share%20your%20feedback%20below:%0A%0A-------------------------------------%0A%0A[Your%20Reply%20Here]%0A%0A--------------------------------------%0A%0AGitHub%20Repository:%20https://github.com/omkarsathe01/weather-app).
