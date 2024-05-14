import express from "express";
import {
    addBulkPeriod,
    createPeriod,
    deletePeriod,
    getAllPeriods,
    getPeriod,
    updatePeriod
} from "../controlers/periodCont.js";

const router = express.Router();

router.post("/bulkPeriod", addBulkPeriod);

//post/create
router.post("/", createPeriod);
//update
router.put("/:id", updatePeriod);
//get
router.get("/find/:id", getPeriod);
//get all
router.get("/", getAllPeriods);
//del
router.delete("/:id", deletePeriod);

export default router;