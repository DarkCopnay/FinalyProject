import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import Users from "../models/Users.js";
import { validationResult } from "express-validator"

export const register = async (req, res) => {
    try {
        const error = validationResult(req);

        if (!error.isEmpty()) {
            return res.status(400).json(error.array());
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
                ErrorMsg: "Invalid login or password"
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

export const Profile = async (req, res) => {
    try {
        const userID = req.params.id;
        
        Users.findById({
            _id: userID
        })
        .then((profileID) => {
            if (!profileID) {
                return res.status(404).json({
                    ErrorMsg: "User not found"
                })
            } else {
                const {password, ...userData} = profileID._doc;
                res.json({
                    ...userData
                });
            }
        })

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ErrorMsg: "No access",
        })
    }
}

export const Ranks = async (req, res) => {
    try {
        const UserList = await Users.find().select('nickname');

        res.json(UserList);

    } catch (err) {
        console.log(err)
        res.status(404).json({
            ErrorMsg: "Users not found"
        })
    }
}

export const UsersDataList = async (req, res) => {
    try {
        const DataUser = await Users.find().select('username nickname email');
        
        res.json(DataUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            ErrorMsg: "Users is Empty"
        })
    }
}