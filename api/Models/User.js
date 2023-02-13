const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {   // Schema definition
        first_name: { type: String, default: null },
        last_name: { type: String, default: null },
        email: { type: String, unique: true },
        password: { type: String },
        token: { type: String },
        creation_date: { type: Date }
    },
    {// Collection name
        collection: 'Users'
    }
);

module.exports = mongoose.model("User", UserSchema);