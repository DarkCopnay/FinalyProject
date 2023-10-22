import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },

    password: {
        type: String,
        require: true,
    },

    nickname: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true,
        unique: true,
    },
    avatarURL: String,
}, {
    timestamps: true,
});

export default mongoose.model("User", userSchema);