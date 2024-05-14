import express from "express";
import {
    addBulkArtist,
    createArtist,
    deleteArtist,
    getAllArtists,
    getArtist,
    updateArtist
} from "../controlers/artistCont.js";

const router = express.Router();

//bulk insert
router.post("/bulkArt", addBulkArtist);

//post/create
router.post("/", createArtist);
//update
router.put("/:id", updateArtist);
//get
router.get("/find/:id", getArtist);
//get all
router.get("/", getAllArtists);
//del
router.delete("/:id", deleteArtist);

export default router;