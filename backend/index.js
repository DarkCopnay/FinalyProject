import express from "express";
import mongoose from "mongoose";
import { RegisterValid, LoginValid, NFTPostValid } from "./validator/Validation.js";
import CheckAuth from "./utils/CheckAuth.js";
import * as UserControl from './Controlers/UserControl.js';
import * as NFTPostControler from './Controlers/NFTPostControler.js'

mongoose.connect(
    'mongodb+srv://nftmarketplace:2010665KEEek@cluster0.yh04arc.mongodb.net/nftmarket?retryWrites=true&w=majority'
)
.then(() => {console.log("DB: connect")})
.catch((err) => {console.log("DB: error connect", err)});

const app = express();

app.use(express.json())

app.post('/register', RegisterValid, UserControl.register)
app.post('/login', UserControl.login)
app.get('/login/me', CheckAuth, UserControl.AuthMe)

app.get('/nfts', NFTPostControler.getAll);
app.get('/nfts/nft/:id', NFTPostControler.GetOne)
app.post('/nfts/create', CheckAuth, NFTPostValid, NFTPostControler.create);


app.listen(4444, (err) => {
    if (err) {
        return (console.log("Error"))
    }

    console.log('Server: OK');
})