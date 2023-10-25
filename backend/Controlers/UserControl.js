import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import { validationResult } from "express-validator";
import Users from "../models/Users.js";

export const register = async (req, res) => {
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
}

export const login = async (req, res) => {
    try {
        //Проверка 
        const userValid = await Users.findOne({ username: req.body.username })

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
        res.status(500).json({
            ErrorMsg: "Could not Login !"
        });
    }
}

export const AuthMe = async (req, res) => {
    try {
        const user = await Users.findOne(res.userId);

        if (!user) {
            return res.status(404).json({
                ErrorMsg: "User not found"
            })
        }
        const {password, ...userData} = user._doc

        res.json({userData,});
    } catch (error) {

        console.log(error);
        res.status(500).json({
            ErrorMsg: "No access",
        })
    }
}