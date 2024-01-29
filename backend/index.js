import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from 'cors'

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

const storage = multer.diskStorage({
    destination: (_, __, disk) => {
        disk(null, './src/assets/upload')
    },
    filename: (_, file, disk) => {
        disk(null, file.originalname);
    },
})

const upload = multer( {storage} )

app.use(express.json())

app.use(cors());
app.use('/src/assets', express.static('upload'))

app.post('/register', RegisterValid, UserControl.register)
app.post('/login', LoginValid, UserControl.login)
app.get('/profile/:id', UserControl.ProfileView);
// app.post('/profile/:id/edit')
app.get('/users', UserControl.UsersDataList);
app.get('/ranks', UserControl.Ranks);

app.post('/upload', CheckAuth, upload.single('image'), async (req, res) => {
    res.json({
        url: `/src/assets/upload/${req.file.originalname}`,
    })
})

app.get('/market', NFTPostControler.getAll);
app.get('/market/nft/:id', NFTPostControler.GetOne)
app.post('/market/create', CheckAuth, NFTPostValid, NFTPostControler.create);
app.patch("/market/nft/:id/edit", CheckAuth, NFTPostControler.update)
app.delete('/market/nft/:id', CheckAuth, NFTPostControler.remove)


app.listen(4444, (err) => {
    if (err) {
        return (console.log("Error"))
    }

    console.log('Server: OK');
})