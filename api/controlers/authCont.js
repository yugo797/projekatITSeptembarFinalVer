import UserModel from "../DBmodels/UserModel.js";
import bcrypt from "bcryptjs";
import {createEr} from "../misc/errHandler.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
    try {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new UserModel({
           username: req.body.username,
           email: req.body.email,
           password: hash
        });
        await newUser.save();
        res.status(201).send("created user");
    }
    catch (err){
        next(err);
    }
};

export const login = async (req, res, next) => {
    try {
        const user = await UserModel.findOne({
            username:req.body.username
        });
        if(!user) return next(createEr(404, "No such user here"))

        const isPassCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPassCorrect) return next(createEr(400, "Wrong password"))

        const token = jwt.sign({id: user._id, autorizovan: user.autorizovan}, process.env.JWT);

        const {password, autorizovan, ...restOfData} = user._doc;

        res.cookie("access_token", token, {
            httpOnly:true,
        }).status(200).json({details:{...restOfData}, autorizovan});
    }
    catch (err){
        next(err);
    }
};