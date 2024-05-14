import express from "express";
import {
    addBulkWorks,
    createArtwork,
    deleteArtwork,
    getAllWorks,
    getArtwork, getByPeriod,
    updateArtwork
} from "../controlers/worksCont.js";

/*
create   /post
update
delete
get getall
*/
const router = express.Router();

//bulk
router.post("/bulkWorks", addBulkWorks)
//post/create
router.post("/", createArtwork);
//update
router.put("/:id", updateArtwork);
//get
router.get("/find/:id", getArtwork);
//get all
router.get("/", getAllWorks);

//get by query
router.get("/byPeriod/:period", getByPeriod);

//del
router.delete("/:id", deleteArtwork);

export default router;