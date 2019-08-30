# FreeMentor
[![Build Status](https://travis-ci.org/ruhimbazabertin/FreeMentor.svg?branch=develop)](https://travis-ci.org/ruhimbazabertin/FreeMentor)
[![Coverage Status](https://coveralls.io/repos/github/ruhimbazabertin/FreeMentor/badge.svg?branch=develop)](https://coveralls.io/github/ruhimbazabertin/FreeMentor?branch=develop)


# Titlte

## subTitle

* list of things


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
| GET         | /api/v1/sessions                                               | Get all mentorship session requests  |
| POST        | /api/v1/sessions/:sessionId/review                             | Review a finished mentorship session |
| DELETE      | /api/v1/sessions/:sessionId/review                             | Delete inappropriate session review. |
