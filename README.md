<h1 align="center">
  Simple Node Fastify API using Knex
</h1>

<p align="center">
  <a href="#description">Description</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requirements">Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#usage">Usage</a>
</p>
<br />
<p align="center">
  <img src="https://img.shields.io/static/v1?label=license&message=MIT" alt="License">
  <img src="https://img.shields.io/github/repo-size/Lissone/node-fastify-knex" alt="Repo size" />
  <img src="https://img.shields.io/github/languages/top/Lissone/node-fastify-knex" alt="Top lang" />
  <img src="https://img.shields.io/github/stars/Lissone/node-fastify-knex" alt="Stars repo" />
  <img src="https://img.shields.io/github/forks/Lissone/node-fastify-knex" alt="Forks repo" />
  <img src="https://img.shields.io/github/issues-pr/Lissone/node-fastify-knex" alt="Pull requests" >
  <img src="https://img.shields.io/github/last-commit/Lissone/node-fastify-knex" alt="Last commit" />
</p>

<p align="center">
  <a href="https://github.com/Lissone/node-fastify-knex/issues">Report bug</a>
  ·
  <a href="https://github.com/Lissone/node-fastify-knex/issues">Request feature</a>
</p>

<br />

## Description

This project was developed with the goal of exploring and learning how to use the Fastify library for creating APIs with Node.js, as well as getting familiar with Knex as a query builder to interact with databases. I also took the opportunity to practice and solidify my knowledge in testing.

### Functional Requirements

- [x] The user must be able to create a new transaction;
- [x] The user must be able to get a summary of their account;
- [x] The user must be able to list all transactions that have occurred;
- [x] The user must be able to view a single transaction.

###  Business Rules

- [x] The transaction can be of the credit type, which will add to the total amount, or debit, which will subtract;
- [x] It must be possible to identify the user among the requests;
- [x] The user can only view transactions they have created.

### About Tests

- Unit: unit of your application;
- Integration: communication between two or more units;
- E2E: simulate a user operating in our application.

Test pyramid: E2E does not depend on any technology, nor on architecture.

## Requirements

- [Npm](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/)
- [Nodejs](https://nodejs.org/en/)

## Technologies

- Nodejs
- Typescript
- Fastify
- Knex
- Sqlite3
- Zod
- Vitest
- Supertest
- Eslint
  - @rockeseat/eslint-config
- Prettier

## Usage

You can clone it on your pc using the command:

```bash
git clone https://github.com/Lissone/node-fastify-knex.git
cd node-fastify-knex
```

### Run migrations

You need to run a knex script command to run all current migrations:

```bash
npm run knex -- migrate:latest
```

About more knex commands:

```bash
# List knex help
npm run knex -- -help
# Create a migration
npm run knex -- migrate:make <name_migration>
```

### Add environment variables

```bash
# .\.env

NODE_ENV=development
DATABASE_URL="./db/app.db"
```

### Install dependencies

```bash
yarn
#or
npm install
```

### Run project

```bash
yarn start:dev
#or
npm run start:dev
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

<hr />