# Kitra Game API README

## Description

Kitra is a game where users can collect treasures in a given latitude and longitude. Every treasure
that is collected will have points based on the monetary value. A treasure may have more than
one money value, it depends on the user’s luck. Kitra users may get the highest money from the
treasure that has been collected.

This backend is built using [NestJS](https://github.com/nestjs/nest), a progressive Node.js framework that provides a robust structure for building efficient, reliable, and scalable server-side applications, which under the hood runs on Express. I chose NestJS for its powerful modular architecture, built-in support for TypeScript, and extensive ecosystem of libraries and tools. It allows for better organization of code and enhances productivity by promoting best practices.

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

You can access it at:
[Swagger UI](http://localhost:3000/api/docs)

You can also import the Swagger JSON format directly into Postman for easy testing and exploration of the API.

The Swagger JSON format is available at:
[Swagger JSON](http://localhost:3000/api/docs-json)

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
