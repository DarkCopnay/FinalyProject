import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true,
    },

    price: {
        type: Number,
        require: true,
    },
    
    Author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    ImgURL: String,
}, {
    timestamps: true,
});

export default mongoose.model("NFTpost", PostSchema);