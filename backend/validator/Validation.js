import { body } from "express-validator";

export const RegisterValid = [
    body("email", "Email Error").isEmail(),
    body("password", "Password Error").isLength({min: 8}),
    body("username", "Username Error").isLength({min: 8, max: 32}),
    body("nickname", "Nickname Error").isLength({min: 4, max: 32}),
    body("avatarURL", "AvatarURL Error").optional().isURL(),
];

export const LoginValid = [
    body("username", "Username Error").isString().isLength({min: 8}),
    body("password", "Password Error").isString().isLength({min: 8}),
];

export const ProfileEditValid = [
    body("nickname", "Nickname Error").isLength({min: 4, max: 32}),
    body("avatarURL", "AvatarURL Error").optional().isURL(),
    body("Bio", "Bio Error").optional().isLength({min: 20, max: 2000}),
    body("social.DiscordLink").optional().isURL(),
    body("social.YouTubeLink").optional().isURL(),
    body("social.TwitterLink").optional().isURL(),
    body("social.InstagrmLink").optional().isURL(),
]

export const NFTPostValid = [
    body("title", "Error HeaderName").isLength({min: 10}),
    body("price", "Price Text").isInt({min: 2}),
    body("ImgURL", "Img error").optional().isString(),
];