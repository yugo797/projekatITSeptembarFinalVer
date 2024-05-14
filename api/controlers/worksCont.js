import ArtworkModel from "../DBmodels/ArtworkModel.js";

export const addBulkWorks = async (req, res) => {
    try {
        const dataToInsert = req.body;

        const result = await ArtworkModel.insertMany(dataToInsert);

        res.status(201).json({ message: 'Data added successfully', insertedCount: result.length });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
export const createArtwork = async (req, resp, next)=>{
    const newArtwork = new ArtworkModel(req.body);

    try{
        const savedArtwork = await newArtwork.save();
        resp.status(200).json(savedArtwork);
    } catch (err){
        next(err);
    }
};

export const updateArtwork = async (req, res, next) => {

    try{
        const updatedArtwork = await ArtworkModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json(updatedArtwork);
    } catch (err){
        next(err);
    }
};

export const getArtwork = async(req, res, next)=>{
    try{
        const gottenWork = await ArtworkModel.findById(req.params.id);
        res.status(200).json(gottenWork);
    } catch (err){
        next(err);
    }
};

export const getAllWorks = async (req, res, next)=>{
    try{
        const allWorks = await ArtworkModel.find(req.query);
        res.status(200).json(allWorks);
    } catch (err){
        next(err);
    }
};

export const getByPeriod = async (req, res, next) => {

    const periods = req.params.period;

    try{
        const worksList = await ArtworkModel.find({period:periods});
        if (!worksList || worksList.length === 0) {
            return res.status(404).json({ message: 'No artworks found for the specified category.' });
        }
        res.status(200).json(worksList);
    }catch(err){
        next(err);
    }
};

export const deleteArtwork = async (req, res, next)=>{
    try{
        await ArtworkModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Deleted successfully");
    } catch (err){
        next(err);
    }
};
