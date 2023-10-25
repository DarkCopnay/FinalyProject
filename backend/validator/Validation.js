import { body } from "express-validator";

export const RegisterValid = [
    body("email", "Email Error").isEmail(),
    body("password", "Password Error").isLength({min: 5}),
    body("username", "Username Error").isLength({min: 3}),
    body("nickname", "Nickname Error").isLength({min: 3}),
    body("avatarURL", "AvatarURL Error").optional().isURL(),
];

export const LoginValid = [
    body("username", "Username Error").isLength({min: 3}),
    body("password", "Password Error").isLength({min: 5}),
];

export const NFTPostValid = [
    body("title", "Error HeaderName").isLength({min: 10}),
    body("price", "Price Text").isInt({min: 2}),
    body("ImgURL", "Img error").optional().isString(),
];