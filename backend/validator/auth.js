import { body } from "express-validator";

export const RegisterValid = [
    body("email", "Email Error").isEmail(),
    body("password", "Password Error").isLength({min: 5}),
    body("username", "Username Error").isLength({min: 3}),
    body("nickname", "Nickname Error").isLength({min: 3}),
    body("avatarURL", "AvatarURL Error").optional().isURL(),
];