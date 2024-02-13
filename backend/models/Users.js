import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    avatarURL: {
        type: String,
        default: ""
    },

    username: {
        type: String,
        require: true,
        unique: true,
    },

    password: {
        type: String,
        require: true,
    },

    nickname: {
        type: String,
        require: true,
        unique: true,
    },

    email: {
        type: String,
        require: true,
        unique: true,
    },

    Bio: {
        type: String,
        default: ""
    },

    stat: {
        followers: {
            type: Number,
            default: 0,
        },
    },

    permissions: {
        role: {
            type: String,
            default: "User"
        }
    },

    social: {
        DiscordLink: {
            type: String,
            default: "#"
        },
        YouTubeLink: {
            type: String,
            default: "#"
        },
        TwitterLink: {
            type: String,
            default: "#"
        },
        InstagrmLink: {
            type: String,
            default: "#"
        }
    },

    verify: {
        type: Boolean,
        default: false
    },

    // OwnerNFT: {
    //     type: mongoose.Schema.Types.Array,
    //     ref: "NFTpost",
    //     require: true
    // },
}, {
    timestamps: true,
});

export default mongoose.model("User", userSchema);