TODO: update build status and gitter to this repo
[![Build Status](https://travis-ci.org/JumpingRock/LeagueAnalyzer-Angular2.svg?branch=master)](https://travis-ci.org/JumpingRock/LeagueAnalyzer-Angular2)
[![Gitter](https://badges.gitter.im/moizKachwala/Angular2-express-mongo-gulp-node-typescript.svg)](https://gitter.im/moizKachwala/Angular2-express-mongo-gulp-node-typescript?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

--- 

[![Dependency Status](https://david-dm.org/JumpingRock/LeagueAnalyzer-Angular2.svg)](https://david-dm.org/JumpingRock/LeagueAnalyzer-Angular2)
[![devDependency Status](https://david-dm.org/JumpingRock/LeagueAnalyzer-Angular2/dev-status.svg)](https://david-dm.org/JumpingRock/LeagueAnalyzer-Angular2#info=devDependencies)

----
### LeagueOfLegends-Analyzer

----
## FEATURES FOR THE SITE

1. Current - search your profile. display season 7 stats
2. next find best item you had

## Frontend
- (DONE) Input box for summoner name
- Display basic data
  - (DONE)Angular component calls -> Node/Express API calls Java API -> Return data
  - Work on backend now
      - Start with match history call for ranked "/api/lol/{region}/v2.2/matchlist/by-summoner/{summonerId}""
- List of items used in Ranked - Percentage usage of items


## Backend
- Java rest controller to get info for summoner - Later add rest controllers for more info
- Java code to populate db when rest controller is called


## High Level Structure
frontend - angular2 typescript
middle - nodejs/express
backend - mongoDb (java aggregate analyzer for data)



















# Angular2 with Gulp, Typescript, and Express Server

###Complete Tutorial [https://moizkachwala.github.io/angular2-express-gulp-node/](https://moizkachwala.github.io/angular2-express-gulp-node/)

##Introduction

Basic Angular seed application created with Quick start application given on angular website.It uses Typescript language and also added support for Express server.

## Steps to Run
```sh
    npm install
    npm build
    npm start
```

## Project Structure

```
angular2-express
      |-- node_modules
      |-- client
           |-- app
                |-- app.component.ts
                |-- main.ts
           |-- typings
           |-- index.html
           |-- tsconfig.json
           |-- typings.json
      |-- server
           |-- typings
           |-- server.ts
           |-- tsconfig.json
           |-- typings.json
      gulpfile.ts
      package.json
      tsconfig.json
      tslint.json
```

## Dependencies

1. Angular 2
2. TypeScript
3. Gulp
4. ExpressJS
5. NodeJS
6. Nodemon
7. TsLint


