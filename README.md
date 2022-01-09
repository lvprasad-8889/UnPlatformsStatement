# unPlatformsScreener
This is a submission for unPlatforms screener round one.

## Table of Contents1
1. [Software Requirements](#software-requirements)
2. [Dependencies](#dependencies)
3. [Running the Solution](#running-the-solution)
	- [Configuring Sequelize](#configuring-sequelize)
	- [Initialising the Express server](#Initialising-the-express-server)
	- [Initilaising the React Application](#Initialising-the-react-application)
4. [Additional Features](#bonus-features)
	- [Comments](#comments)
	- [View User Profile](#multiple-posts)
5. [Future Scope](#future-scope)
	- [Liked Posts](#liked-posts)
	- [Saved Posts](#saved-posts)
	- [Hide User Profile](#hide-user-profile)
## Software Requirements
To run the application, the following  are required:
- MySQL Community - [Download MySQL installer](https://dev.mysql.com/downloads/installer/ "Download MySQL installer")
- Node.js - [Download Node.js](https://nodejs.org/en/)

## Dependencies
For setting up dependencies in the frontend (React, React Redux, ...):
- In the terminal, change directory to `myapp` folder
- Run `npm install`

For setting up dependencies in the backend (Express, Sequelize, ...):
- In the terminal, change directory to `Server` folder
- Run `npm install`

## Running the Solution
### Configuring Sequelize
The contents of `Server\config\config.json` file would be something like this:
```
{
  "development": {
    "username": "root",
    "password": "root",
    "database": "postdatabase",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
Since we would be running the server in development mode; in the `development` object :
- set `username` to the username of your MySQL.
- set `password` to the password of your MySQL .
- set `database` to the name of your database in the MySQL .

In the database, we need not to create the table or any entries to it, sequelize
will take care of creating table if table doesn't exist on the first run of the server

Although, if you already have a table named `Posttables` in your database even before you run this application, make sure you drop the table to prevent conflicts due to different table structure.

### Starting the Express Server
**Note: Express server must be run before running the React application**

- Open a new terminal, and then change the directory to `Server`.
- Run `nodemon Server` to start the Express server.

### Starting the React Application
- Open another terminal, and then change the directory to `myapp`.
- Run `npm start` to start the React application.

## Additional Features
### Comments
The application also has the feauture to post comments, which are then stored as JSON array in the entry/row in the database.
### View User Profile
When you  click on user profile, a modal appears which dsiplays the user. profile picture in  full resolution

## Future Scope
###Liked Posts
All the post that have been liked can be put into  a different section.
###Saved Posts
Upon clicking a save post button the post can be save to users library.
###Hide User Profile
If a user sets his/her profile to private other users cannot view certain details of the user and the  user's profile picture in full resolution
