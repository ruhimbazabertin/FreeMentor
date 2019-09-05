# FreeMentor
[![Build Status](https://travis-ci.org/ruhimbazabertin/FreeMentor.svg?branch=develop)](https://travis-ci.org/ruhimbazabertin/FreeMentor)
[![Coverage Status](https://coveralls.io/repos/github/ruhimbazabertin/FreeMentor/badge.svg?branch=develop)](https://coveralls.io/github/ruhimbazabertin/FreeMentor?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/7eb3a0bd6d4a7c9a445c/maintainability)](https://codeclimate.com/github/ruhimbazabertin/FreeMentor/maintainability)

Free Mentors is a social initiative where accomplished professionals become role models to young people to provide free mentorship sessions.

## User Interface (UI)

* HTML
* CSS
* JAVASCRIPT

## UI Link Example
[gh-pages](https://ruhimbazabertin.github.io/FreeMentor/UI/index.html)

## API ENDPOINTS


| Method      | Path                                                           | Description                          |
|-------------|----------------------------------------------------------------|--------------------------------------|
| POST        | /api/v1/auth/signup                                            | Create User Account                  |
| POST        | /api/v1/auth/signin                                            | User login                           |
| PATCH       | /api/v1/user/:userId                                           | Change a user to a mentor            |
| GET         | /api/v1/mentors                                                | Get all mentors                      |
| GET         | /api/v1/mentors/:mentorId                                      | Get a specific mentor                |
| POST        | /api/v1/sessions                                               | Create a mentorship session request  |
| PATCH       | /api/v1/sessions/:sessionId/accept                             | A mentor accepts a session request   |
| PATCH       | /api/v1/sessions/:sessionId/reject                             | A mentor rejects a session request   |



## TOOLS USED

## LANGUAGE

 JAVASCRIPT 
 
 ## SERVER ENVIRONMENT
 
 *NodeJS* (run time Environment for running JS codes)
 
 ## FRAMEWORK
 
 *Express* (used for building fast APIs)
 
 ## TESTING FRAMEWORK
 
 *Mocha* and *Chai*
 
 ## STYLE GUIDE
 
 *Airbnb*
 
 ## CONTINUOUS INTEGRATION
 
 travis ci
 
 ## TEST COVERAGE
 
 nyc
 
 ## GIT BADGE
 
 coveralls
 
 ## DEPLOYMENT
 
 heroku
 
 ## HEROKU LINK EXAMPLE
 [foo]: http://freementorcycle10.herokuapp.com
 ## SWAGGER DOCUMENTATION
 API docs
 # Getting started
 
 These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
 
 # prerequisites
 
 To install the software on your local machine, you need first to clone the repository or download the zip file and once this is set up you are going to need this packages. [NodeJS]
 
  [Node Package Installer - NPM] this usually comes with Node or YARN in case NPM doesn't work.
  
  # Installing
  
  The installation of this application is fairly straightforward, After cloning this repository to your local machine,CD into the package folder using your terminal and run the following
  
  > npm install
  
  It will install the node_modules which will help you run the project on your local machine.
  
  # Run the server
  
  > npm start
  
  # Run the test
  
  > npm test
  
   version 1.0.0
   
   # Contributor
   
   Ruhimbaza Bertin ruhimbazab@gmail.com
   
   # License & copyright
   
   copyright (c) Ruhimbaza Bertin, Software developer
 
 
 

