const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

const User = require("../Models/User.model");
const dbConnect = require("../database").connect();
const envConfig = require("dotenv").config();

const { ACCESS_TOKEN_KEY } = process.env;


exports.register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!(email && password && firstName && lastName)) {
      res.status(400).send("All input is required");
      return;
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(),
      password: encryptedPassword,
      creation_date: Date.now()
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      ACCESS_TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    next(next);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        ACCESS_TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;

      res.status(200).json(user);
    }
    else {
      res.status(401).json({
        code: "MSG_401",
        message: "Invalid Credentials"
      });
    }
  } catch (err) {
    console.log(err);
    next(err)
  }
};


exports.verifyToken = async (req, res, next) => {
  const token = req.body.token;
  jwt.verify(token, ACCESS_TOKEN_KEY, async (err, decoded) => {
    const user = decoded?.user_id ? await User.findById(decoded.user_id) : null;
    if (err) {
      return res.status(400).json({
        err
      });
    }
    else return res.status(200).json({
      user
    });
  });
};
