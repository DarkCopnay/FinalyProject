import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import { validationResult } from "express-validator";

import { RegisterValid } from "./validator/auth.js";
import Users from './models/Users.js'

mongoose.connect(
    'mongodb+srv://nftmarketplace:2010665KEEek@cluster0.yh04arc.mongodb.net/nftmarket?retryWrites=true&w=majority'
)
.then(() => {console.log("DB: connect")})
.catch((err) => {console.log("DB: error connect", err)});


const app = express();
app.use(express.json())

app.post('/login', async (req, res) => {
    try {
        const userValid = await Users.findOne({
            email: req.body.email
        })

        if (!userValid) {
            return (res.status(404).json({
                ErrorMsg: "User not found"
            }))
        }

        const isPassValid = await bcrypt.compare(req.body.password, userValid._doc.password);

        if (!isPassValid) {
            return res.status(404).json({
                ErrorMsg: "Invalid login or password"
            }); 
        }

        const token = jwt.sign({
            _id: userValid._id,
        }, "keysecret", {expiresIn: "30d"});

        const {password, ...userData} = userValid._doc

        res.json({
            ...userData,
            token,
        });

    } catch (err) {
        console.log(err)
        res.status(400).json({
            ErrorMsg: "Could not Login !"
        });
    }
})

app.post('/register', RegisterValid, async (req, res) => {
    try {
        const validError = validationResult(req);

        if (!validError.isEmpty()) {
            return res.status(400).json(validError.array())
        }

        const passwordValid = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(passwordValid, salt);

        const doc = new Users({
            email: req.body.email,
            nickname: req.body.nickname,
            username: req.body.username,
            avatarURL: req.body.avatarURL,
            password: hash
        });

        const user = await doc.save();

        const token = jwt.sign({
            _id: user._id,
        }, "keysecret", {expiresIn: "30d"});

        const {password, ...userData} = user._doc

        res.json({
            ...userData,
            token,
        });

    } catch (err) {

        console.log(err)
        res.status(500).json({
            ErrorMsg: "Could not register !"
        });
    }
});

app.listen(4444, (err) => {
    if (err) {
        return (console.log("Error"))
    }

    console.log('Server: OK');
})