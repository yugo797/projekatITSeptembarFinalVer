import UserModel from "../DBmodels/UserModel.js";

export const updateUser = async (req, res, next) => {

    try{
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json(updatedUser);
    } catch (err){
        next(err);
    }
};

export const getUser = async(req, res, next)=>{
    try{
        const gottenUser = await UserModel.findById(req.params.id);
        res.status(200).json(gottenUser);
    } catch (err){
        next(err);
    }
};

export const getAllUsers = async (req, res, next)=>{
    try{
        const allUsers = await UserModel.find();
        res.status(200).json(allUsers);
    } catch (err){
        next(err);
    }
};

export const deleteAUser = async (req, res, next)=>{
    try{
        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Deleted successfully");
    } catch (err){
        next(err);
    }
};
