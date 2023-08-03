import "./config/config.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import "./model/index.js";

import {userRouter} from "./user/routes.js"
import {Inventory} from "./model/InventarModel.js"
import {User} from "./user/UserModel.js"
import {v2 as cloudinary} from 'cloudinary';
          
// cloudinary.config({ 
//   cloud_name: 'dqjog4rue', 
//   api_key: '976473871432195', 
//   api_secret: 'akSg3BKvBdgWf_1rVxU0jKcLiK8' 
// });

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUDNAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const app = express();
const PORT = 3001;
const upload = multer({storage: multer.memoryStorage()})


app.use(express.json());
// app.use(morgan("dev"));
app.use(cors());
app.use("/api", userRouter)
app.use(cookieParser());

app.get("/api/inventar", async (req, res) => {
    const data = await Inventory.find()
    res.send(data)
})

app.get("/api/inventar/:id", async (req, res) => {
    const id = req.params.id;
    const data = await Inventory.findById(id);
    res.send(data)
})

app.post("/api/inventar/image", upload.single("image"), async (req, res) => {
    try {
        cloudinary.uploader.upload_stream({resource_type: "image", folder: "Inventory"}, async (err, result) => {
            console.log(result, err);
            const response = await Inventory.create({...req.body, image: {url: result.secure_url, imageId: result.public_id}
            })
            res.send(response)
        }).end(req.file.buffer)
    } catch (err) {
        console.log(err);
        res.status(500).send("error")
    }
})

app.put("/api/inventar/:id", upload.single("image"), async (req, res) => {
    try {
        const id = req.params.id;
        if (req.file) {
            cloudinary.uploader.upload_stream({resource_type: "image", folder: "Inventory"}, async (err, result) => {
                const response = await Inventory.findByIdAndUpdate(id, {...req.body, image: {url: result.secure_url, imageId: result.public_id},
                })
                cloudinary.uploader.destroy(response.image?.imageId, (err) => {
                    console.log(err);
                })
                res.send(response)
            }).end(req.file.buffer)
        } else {
            const updateInventory = await Inventory.findByIdAndUpdate(id, req.body)
            res.send(updateInventory)
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500).send(err)
    }
})

app.delete("/api/inventar/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deleteInventory = await Inventory.findOneAndDelete(id);
        cloudinary.uploader.destroy(deleteInventory.image?.imageId, (err) => {
            console.log(err);
            res.send(deleteInventory)
        })
    } catch (err) {
        console.log(err);
        res.send("Error")
    }
})

// !User ===========

app.post("/api/user/image", upload.single("image"), async (req, res) => {
    try {
        cloudinary.uploader.upload_stream({resource_type: "image", folder: "UserFolder"}, async (err, result) => {
            console.log(result, err);
            const response = await User.create({...req.body, image: {url: result.secure_url, imageId: result.public_id}
            })
            res.send(response)
        }).end(req.file.buffer)
    } catch (err) {
        console.log(err);
        res.status(500).send("error")
    }
})

// app.get("/api/user", async (req, res) => {
//     const data = await User.find()
//     res.send(data)
// })

app.get("/api/user/:id", async (req, res) => {
    const {id} = req.params;
    console.log(id);
    const data = await User.findById(id);
    res.send(data)
})

app.put("/api/user/:id", upload.single("image"), async (req, res) => {
    try {
        const id = req.params.id;
        if (req.file) {
            cloudinary.uploader.upload_stream({resource_type: "image", folder: "UserFolder"}, async (err, result) => {
                const response = await User.findByIdAndUpdate(id, {...req.body, image: {url: result.secure_url, imageId: result.public_id},
                })
                cloudinary.uploader.destroy(response.image?.imageId, (err) => {
                    console.log(err);
                })
                res.send(response)
            }).end(req.file.buffer)
        } else {
            const updateUser = await User.findByIdAndUpdate(id, req.body)
            res.send(updateUser)
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500).send(err)
    }
})

app.delete("/api/user/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deleteProfile = await User.findOneAndDelete(id);
        cloudinary.uploader.destroy(deleteProfile.image?.imageId, (err) => {
            console.log(err);
            res.send(deleteProfile)
        })
    } catch (err) {
        console.log(err);
        res.send("Error")
    }
})










app.listen(PORT, () => {
    console.log(`Server lääuuft ${PORT}`);
})