# Heroes Manager
## Context

> The United Nations Super Heroes Fund is an employment agency for heroes , this project is a simple web app to help them manage their HR department.

> This is a Full-Stack engineer position challenge in https://elham.sa

## Table of Contents
* [Main Technologies](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)


## Main Technologies
- Front-end
  - [Angular](https://angular.io/) - v15.1
  - [Angular Material](https://material.angular.io/) - v15.1
  - [RxJS](https://rxjs.dev/) - v7.8
  - [NgRx](https://ngrx.io/) - v15.3
- Back-end
  - [Node.js](https://nodejs.org/) - v19.6
  - [Express](https://expressjs.com/) - v4.16
  - [Mongo](https://www.mongodb.com/) - v4
  - [Mongoose](https://expressjs.com/) - v6.9
- Build and Deployment
  - [Nginx](https://www.nginx.com/) - v1.22
  - [Docker](https://www.docker.com/) - v4.16

## Features
The ready-to-use features are:
- Create and log into a personal account.
- List all heroes in the HR department.
- Sort heroes by name or powers.
- Search for heroes by name or powers.
- Add and display a new hero.
- Rate heroes.

## Setup
1. To run the project in your local environment, you need to install :
    - Docker & Docker compose
2. Clone the repository from Github, use command : (you can also download the zip file of the repo)

`git clone https://github.com/ZiiQoOS/Heroes-Manager.git`

3. Rename the `api/.env.example` to `.env` and populate the file with your environment's informations. 
    - The API_ACCESS_TOKEN is just an example, you MUST generate your own token.(you can use the following native Js function `require('crypto').randomBytes(64).toString('hex')` or any other hashing function)
4. Move to the Heroes-Manager folder and run command : 

`docker-compose up`

5. The app is launched on http://localhost:8181
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