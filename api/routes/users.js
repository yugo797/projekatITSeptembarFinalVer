import express from "express";
import {deleteAUser, getAllUsers, getUser, updateUser} from "../controlers/usersCont.js";
import {verifyAdmin, verifyToken, verifyUser} from "../misc/verifyToken.js";

const router = express.Router();
/*
router.get("/checkAuth", verifyToken, (req, res, next)=>{
    res.send("user logged in successfully");
});

router.get("/checkUser/:id", verifyUser, (req, res, next)=>{
    res.send("ur logged in");
});
router.get("/checkAdmin/:id", verifyAdmin, (req, res, next)=>{
    if(req.user.autorizovan) res.send("is admin yeah");
    else res.status(403).send("not admin");
});
*/
//update
router.put("/:id",verifyUser, updateUser);
//get
router.get("/:id", verifyUser, getUser);
//get all
router.get("/",verifyAdmin, getAllUsers);
//del
router.delete("/:id",verifyAdmin, deleteAUser);
export default router;