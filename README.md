# Heroes Manager
## Context

> The United Nations Super Heroes Fund is an employment agency for heroes , this project is simple web app to help them manage their HR depatment.

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
  - [Docker](https://www.docker.com/) - v4.16

## Features
The ready features are:
- Create and log into a personal account.
- List all heroes in the depatment.
- Sort heroes by name or powers.
- Search for heroes by name or powers.
- Add and display a new hero.
- Rate heroes.
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
## Setup
1. To run the project in your local environment, you need to install :
    - Docker & Docker compose
2. Clone the repository from Github or download the zip file, use command : 

`git clone https://github.com/ZiiQoOS/Heroes-Manager.git`


3. Move to the Heroes-Manager folder and run command : 

`docker-compose up`

4. The app is launched on http://localhost:8181