import PeriodModel from "../DBmodels/PeriodModel.js";

export const addBulkPeriod = async (req, res) => {
    try {
        const dataToInsert = req.body;

        // Use insertMany to bulk insert data into the database
        const result = await PeriodModel.insertMany(dataToInsert);

        res.status(201).json({ message: 'Data added successfully', insertedCount: result.length });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

export const createPeriod = async (req, resp, next)=>{
    const newPeriod = new PeriodModel(req.body);

    try{
        const savedPeriod = await newPeriod.save();
        resp.status(200).json(savedPeriod);
    } catch (err){
        next(err);
    }
};

export const updatePeriod = async (req, res, next) => {

    try{
        const updatedPeriod = await PeriodModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json(updatedPeriod);
    } catch (err){
        next(err);
    }
};

export const getPeriod = async(req, res, next)=>{
    try{
        const gottenPeriod = await PeriodModel.findById(req.params.id);
        res.status(200).json(gottenPeriod);
    } catch (err){
        next(err);
    }
};

export const getAllPeriods = async (req, res, next)=>{
    try{
        const allPeriods = await PeriodModel.find(req.query);
        res.status(200).json(allPeriods);
    } catch (err){
        next(err);
    }
};

export const deletePeriod = async (req, res, next)=>{
    try{
        await PeriodModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Deleted successfully");
    } catch (err){
        next(err);
    }
};
