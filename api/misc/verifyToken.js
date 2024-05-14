import jwt from "jsonwebtoken";
import {createEr} from "./errHandler.js";

export const verifyToken = (req, res, next) => {

    const token = req.cookies.access_token;
    if(!token) return next(createEr(401, "not authenticated"));

    jwt.verify(token, process.env.JWT, (err, user)=>{
        if (err) {
            return next(createEr(403, "invalid token"));
        }
        req.user = user;
        next();
    });
};
export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.autorizovan){
            next();
        }
        else {
            return next(createEr(403, "not authorised"));
        }
    });
}

export const verifyAdmin = (req, res, next) => {

    verifyToken(req, res, next, () => {
        if (req.user.autorizovan) {
            next();
        }
        else {
            return next(createEr(403, "not admin"));
        }
    });
};