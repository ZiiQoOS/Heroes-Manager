# Heroes Manager
## Context

> The United Nations Super Heroes Fund is an employment agency for heroes , this project is a simple web app to help them manage their HR department.

> This is a Full-Stack engineer position challenge for [إلهَام](https://elham.sa/)

## Table of Contents
* [Main Technologies](#main-technologies)
* [Features](#features)
* [Setup](#setup)
* [Screenshots](#screenshots)


## Main Technologies
- Front-end
  - [Angular](https://angular.io) - v15.1
  - [Angular Material](https://material.angular.io) - v15.1
  - [RxJS](https://rxjs.dev) - v7.8
  - [NgRx](https://ngrx.io) - v15.3
- Back-end
  - [Node.js](https://nodejs.org) - v19.6
  - [Express](https://expressjs.com) - v4.16
  - [Mongo](https://www.mongodb.com) - v4
  - [Mongoose](https://mongoosejs.com) - v6.9
- Build and Deployment
  - [Nginx](https://www.nginx.com/) - v1.22
  - [Docker](https://www.docker.com/) - v4.16

## Features
The ready-to-use features are:
- Create and log into a personal account.
- List all heroes in the HR department.
- Sort heroes by name or powers.
- Search for heroes by name or powers.
- Add and view a new hero.
- Rate heroes.

## Setup
1. To run the project in your local environment, you need to install :
    - Docker 
    - Docker Compose
2. Clone the repository from Github, use command : (you can also download the zip file of the repo)

       git clone https://github.com/ZiiQoOS/Heroes-Manager.git

3. Rename the `api/.env.example` to `.env` and populate the file with your environment's informations. 
    - The ***API_ACCESS_TOKEN*** is just an example for testing purposes, you **MUST** generate your own strong token.
    - Tip : you can use the following native JS function `require('crypto').randomBytes(64).toString('hex')` or any other hashing function.
4. Change to directory ***Heroes-Manager*** and run command : 

       docker-compose up

5. The app is launched on : http://localhost:8181
## Screenshots
- **Login Page**

![Example screenshot](./screenshots/User%20Login.png)
- **Register Page**

![Example screenshot](./screenshots/User%20Register.png)
- **Heroes' List Page**

![Example screenshot](./screenshots/Hero%20List.png)

- **Hero Profile Add Page**  

![Example screenshot](./screenshots/Hero%20Add.png)

- **Hero Profile View Page**

![Example screenshot](./screenshots/Hero%20View.png)