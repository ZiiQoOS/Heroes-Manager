const User = require("../Models/User.model");


class UsersService {

    static async findUsers() {
        const users = await User.find();
        return users;
    }

    static async findUserById(userId) {
        const user = await User.findById(userId);
        return users;
    }

}

module.exports = UsersService;