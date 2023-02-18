const UsersService = require('../Services/Users.Service');


exports.getUsers = async (req, res, next) => {
    try {
      const users = await UsersService.findUsers();
      res.status(200).send(users);
    } catch (err) {
      next(err);
    }
  };

  
exports.getUserById = async (req, res, next) => {
  try {
    const users = await UsersService.findUserById();
    res.status(200).send(users);
  } catch (err) {
    next(err);
  }
};