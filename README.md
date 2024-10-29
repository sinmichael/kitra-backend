# Kitra Game API README

## Description

Kitra is a game where users can collect treasures in a given latitude and longitude. Every treasure
that is collected will have points based on the monetary value. A treasure may have more than
one money value, it depends on the user’s luck. Kitra users may get the highest money from the
treasure that has been collected.

This backend is built using [NestJS](https://github.com/nestjs/nest), a progressive Node.js framework that provides a robust structure for building efficient, reliable, and scalable server-side applications, which under the hood runs on Express. I chose NestJS for its powerful modular architecture, built-in support for TypeScript, and extensive ecosystem of libraries and tools. It allows for better organization of code and enhances productivity by promoting best practices.

## Improvements Made

- Added **Register** and **Login** endpoints for user authentication.
- User passwords are now securely hashed with a salt before being stored in the database, enhancing security.
- `/treasures` endpoint requires authentication.
  
## Prerequisites
Make sure you have the following installed:

- Node.js (version 14.x or later)
- npm (Node package manager)
- MySQL (make sure it’s running and accessible)

## Getting started

### Install the dependencies

```bash
$ npm install
```

### Build the Project
After installing the dependencies, build the project. This is required if you want to run the migrations using the `npm run migration` command.

```bash
$ npm build
```

### Starting the server

Make sure to configure your MySQL connection settings in the environment variables. Refer to the .env.example file for guidance.

For more details on available scripts and configurations, check the package.json file.

Before running migrations, ensure that the server is started at least once. This step allows the database schema to be automatically built.

Development
```bash
$ npm run start:dev
```

Production mode
```bash
$ npm run start:prod
```

### Run Migrations
After the server has run at least once, ensure that all migrations are applied:
```bash
$ npm run migration
```
Alternatively, if you prefer, an SQL file dump is included in the source: `dump-kitra-202410291921.sql`. You can use this file to set up the database schema manually.

## API Documentation

Once the server is started, the API documentation is generated using Swagger.

The API documentation is generated using Swagger. You can access it at:

- [Swagger UI](http://localhost:3000/api/docs#/)

Additionally, the Swagger JSON format is available at:

- [Swagger JSON](http://localhost:3000/api/docs-json)

#### Endpoints

1. **Find Nearby Treasures**
   - **Endpoint:** `/treasures`
   - **Method:** `GET`
   - **Summary:** Find nearby treasures based on the provided location and filters.
   - **Parameters:**
     - `latitude` (required, number): Latitude for the search location (e.g., 14.552036595352455).
     - `longitude` (required, number): Longitude for the search location (e.g., 121.01696118771324).
     - `distance` (required, string): Search radius in kilometers (1 or 10 only).
     - `prizeValue` (optional, number): Minimum prize value to filter treasures (whole numbers from 10 to 30).
   - **Responses:**
     - `200`: List of nearby treasures found within the specified distance.
     - `401`: Unauthorized.

2. **Register a New User**
   - **Endpoint:** `/auth/register`
   - **Method:** `POST`
   - **Summary:** Register a new user.
   - **Request Body:**
     - `name` (required, string): User name.
     - `age` (required, number): User age.
     - `email` (required, string): User email address (e.g., user@example.com).
     - `password` (required, string): User password (minimum length of 6).
   - **Responses:**
     - `201`: User successfully registered.
     - `400`: Bad request.

3. **Login a User**
   - **Endpoint:** `/auth/login`
   - **Method:** `POST`
   - **Summary:** Login a user.
   - **Request Body:**
     - `email` (required, string): User email address (e.g., user@example.com).
     - `password` (required, string): User password (e.g., password123).
   - **Responses:**
     - `200`: User successfully logged in.
     - `401`: Invalid credentials.

You can also import the Swagger JSON format directly into **Postman** for easy testing and exploration of the API.

## Additional Notes
- The login credentials for the application can be found in the `Serino-Mini-Project-Data.xlsx` file.

## Key Dependencies
Here are some of the important dependencies used in this project:

- NestJS Core Modules: `@nestjs/common`, `@nestjs/core`, `@nestjs/platform-express`
- Database Support: `@nestjs/typeorm`, `mysql2`, `typeorm`
- Authentication: `@nestjs/jwt`, `@nestjs/passport`, `passport`, `passport-jwt`
- Validation and Transformation: `class-validator`, `class-transformer`
- Documentation: `@nestjs/swagger`, `swagger-ui-express`

## To-Do
- Add unit tests for existing features.
- Update documentation with API endpoints.
- Refactor code to improve maintainability.
