## Maruweb NestJS starter kit

Maruweb NestJS starter kit source code
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start (launch server)

# watch mode
$ npm run start:dev (serve with hot reload at localhost:3001)

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## How to deploy
- [Deploy NestJS to Nginx](deploy-nestjs-to-nginx.md)
- [Deploy NestJS to Nginx (full)](deploy-nestjs-to-nginx-full.md)
- [Deploy NestJS on Apache](deploy-nestjs-to-apache.md)

## How to use Prisma
- Write database structure in prisma/schema.prisma
- Create first migration 
```bash
prisma migrate dev --name init
```
- Create second migration (ex. added_job_title)
```bash
prisma migrate dev --name added_job_title
```