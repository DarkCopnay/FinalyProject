import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import Users from "../models/Users.js";
import { validationResult } from "express-validator"

export const register = async (req, res) => {
    try {
        const RegisterError = validationResult(req);

        if (!RegisterError.isEmpty()) {
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

export const ProfileView = async (req, res) => {
    try {
        const userID = req.params.id;
        
        Users.findById({
            _id: userID
        }).select("-password")
        .then((profileID) => {
            res.json(profileID);
        })
        .catch((err) => {
            return res.json({
                ErrorMsg: "User not found"
            })
        })

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ErrorMsg: "No access",
        })
    }
}

export const ProfileEdit = async (req, res) => {
    try {
        const ProfileID = req.params.id;
        const ProfileUpdateValid = validationResult(req);

        if (!ProfileUpdateValid.isEmpty()) {
            return res.status(400).json(ProfileUpdateValid.errors);
        }

        await Users.updateOne(
            {
                _id: ProfileID,
            }, 
            {
                nickname: req.body.nickname,
                avatarURL: req.body.avatarURL,
                Bio: req.body.Bio
            }
        )
        .then(() => {
            return res.json({
                Done: "Done Update"
            })
        })
        .catch(() => {
            return res.json({
                ErrorMsg: "Cloudn't update a profile"
            })
        })
    } catch(err) {
        console.log(err);
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