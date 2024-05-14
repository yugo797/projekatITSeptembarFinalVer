import express from "express";
import {login, register} from "../controlers/authCont.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;