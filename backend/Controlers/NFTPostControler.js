import NFTpostModel from "../models/NFTpostModel.js"

export const getAll = async (req, res) => {
    try {
        const postsNft = await NFTpostModel.find().populate('Author').exec();

        // if (postsNft.length == 0) {
        //     res.json({
        //         EmptyMsg: "Nft's Empty"
        //     })
        // } else {
        //     res.json(postsNft);
        // }

        res.json(postsNft);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ErrorMsg: "Failed to get an NFT posts"
        })
    }
}

export const GetOne = async (req, res) => {
    try {
        const postId = req.params.id;

        NFTpostModel.findById({
            _id: postId
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
            res.status(500).json({
                ErrorMsg: "Failed to retrieve NFT"
            });
        });

        // res.json(randerNFTOnId);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ErrorMsg: "Failed to retrieve the NFT's"
        })
    }
}

export const create = async (req, res) => {
    try {
        const NFTpostDoc = new NFTpostModel({
            title: req.body.title,
            price: req.body.price,
            ImgURL: req.body.ImgURL,
            Author: req.userId,
        })

        const NftPostCreate = await NFTpostDoc.save();

        res.json(NftPostCreate)
    } catch (error) {
        res.status(500).json({
            ErrorMsg: "Couldn't create a post"
        })
    }
}