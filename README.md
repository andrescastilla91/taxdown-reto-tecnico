# TaxDown Challenge App

This project was created to meet the Taxdown challenge based on the Frontend Senior position, using Javascript-based technology with the use of the React library; implementing the use of Redux as store and Redux Saga as middleware. With route protection in login use. Dynamic forms with the use of React Hook Form based on parameters obtained according to the request to API.

The application allows connection to a fake api through asynchronous requests using Axios as a Http client and obtaining the information from the database.

Style designs were used with predefined css and Javascript according to templates implementing the Bootstrap library

*Host your own cloud at home*

#### Table of Contents
- [Development Setup](#development-setup)
  - [Local setup (Linux & Windows)](#local-setup-linux--windows)
  - [Run locally](#run-locally)
    - [Server](#server)
    - [Server Database](#server-database)


## Development Setup

First, clone the repo and cd into the project:
```bash
git clone https://github.com/andrescastilla91/taxdown-reto-tecnico.git
cd taxdown-reto-tecnico

```

### Local setup (Linux & Windows)
Install dependencies:
```bash
npm install

```

### Run locally

### Available Scripts 

In the project directory, you can run:

#### Server

```bash
npm start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


#### Server Database

Open another terminal and go to the project directory and run the following command.

```bash
npm run db-server
```

Runs the server database in the development mode.\

In the console of the terminal you will be able to know the routes enabled to make requests to the api and obtain the information from the database

Open [http://localhost:3005/users](http://localhost:3005/users) to test database connection, and know the data of registered users.


