# habit-app


# Getting Started 
- Run `npm install` and install dependencies from within root directory

### Create Database and run migrations and seeds
- Create a database called habitdb

- In the root directory of the outer habit-app, create a .env file and paste the below into it. Replace username with your postgres username and password with your postgres password:
DB_USER = username
DB_PASS = password

- If you do not already have knex installed globally, run npm install -g knex 

- Run knex migrate:latest

- Run knex seed:run

### Run database and app servers
- Open two terminals 

- Navigate one terminal into root folder and run npm start

- Navigate other terminal into habitapp (React frontend) directory and run npm start 



# Project

## Monday

- Plans technology using, layout, structure. 

- Set up database in postgres with user table and habits table and ran migrations and seeds to input some data

- Set up Express server and initial queries and routes for user table

- Initial setup of React frontend with login and register. Tested connection between backend and frontend by adding new users to usertable via registration form in frontend. 


# User Story 
