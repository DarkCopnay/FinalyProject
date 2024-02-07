import NFTpostModel from "../models/NFTpostModel.js"
import { validationResult } from "express-validator";

export const getAll = async (req, res) => {
    try {
        const postsNft = await NFTpostModel.find().populate("Author").exec();

        if (postsNft.length === 0 ) {
            return res.status(404).json({
                ErrorMsg: "NFTs not found"
            })
        } else {
            res.json(postsNft);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ErrorMsg: "Failed to get an NFT posts"
        })
    }
}

export const GetOne = async (req, res) => {
    try {
        const NFTId = req.params.id;

        NFTpostModel.findById({
            _id: NFTId
        })

        .then((doc) => {
            if (!doc) {
                return res.status(404).json({
                    ErrorMsg: "NFT not found"
                });
            } else {
                res.json(doc);
            }
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({
                ErrorMsg: "Failed to retrieve NFT"
            });
        });

        // res.json(randerNFTOnId);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ErrorMsg: "Failed to retrieve the NFT's"
        })
    }
}

export const remove = async (req, res) => {
    try {
        const NFTid = req.params.id;

        NFTpostModel.findByIdAndDelete(NFTid)
        .then((doc) => {
            if (!doc) {
                return res.status(404).json({
                    ErrorMsg: "NFT not find"
                })
            } else {
                res.json({
                    comp: true
                })
            }
        })

        .catch((err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    ErrorMsg: "Failed to delete NFT"
                })
            }
        })
    } catch(error) {
        console.log(error);
        res.status(500).json({
            ErrorMsg: "Couldn't find the NFT"
        })
    }
}

export const create = async (req, res) => {
    try {
        const error = validationResult(req);
        
        const NFTpostDoc = new NFTpostModel({
            title: req.body.title,
            price: req.body.price,
            ImgURL: req.body.ImgURL,
            Author: req.userId,
        })
        
        if (!error.isEmpty()) {
            return res.status(400).json(error.array())
        } else {
            res.json(await NFTpostDoc.save())
        }

    } catch (error) {
        res.status(500).json({
            ErrorMsg: "Couldn't create a post"
        })
    }
}

export const update = async (req, res) => {
    try {
        const NFTId = req.params.id;

        await NFTpostModel.updateOne(
            {
                _id: NFTId,
            },
            {
                title: req.body.title,
                price: req.body.price,
                Author: req.userId
            }
        )
        .then(() => {
            return res.json({
                complete: "Update complete"
            })
        })

        .catch(() => {
            return res.status(500).json({
                ErrorMsg: "Couldn't update a post"
            })
        })

    } catch(error) {
        res.status(500).json({
            ErrorMsg: "Couldn't update a post"
        })
    }
}