// 3rd Party Libraries
const cors = require('cors');
const express = require('express')
const envConfig = require("dotenv").config();
const app = express();

// Middlewares
const auth = require("./Middlewares/auth");

// Routes
const authRoutes = require('./Routes/Auth.routes');
const heroesRoutes = require('./Routes/Heroes.routes');
const ratingsRoutes = require('./Routes/Ratings.routes');
const usersRoutes = require('./Routes/Users.routes');

// Env Variables
const { API_PORT, API_BASE_URL } = process.env;

// App Midllewares
app.use(cors());
app.use(express.json());

// Use app Routes
app.use(API_BASE_URL, authRoutes);
app.use(API_BASE_URL, auth, heroesRoutes);
app.use(API_BASE_URL, auth, ratingsRoutes);
app.use(API_BASE_URL, usersRoutes);


// Launch the app
app.listen(API_PORT, () => {
  console.log(`Example app listening on port ${API_PORT}...`)
})
