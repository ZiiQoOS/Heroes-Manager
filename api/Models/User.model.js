const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {   // Schema definition
        firstName: { type: String, default: null },
        lastName: { type: String, default: null },
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