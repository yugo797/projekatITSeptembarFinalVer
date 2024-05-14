import ArtistModel from "../DBmodels/ArtistModel.js";

export const createArtist = async (req, resp, next)=>{
    const newArtist = new ArtistModel(req.body);

    try{
        const savedArtist = await newArtist.save();
        resp.status(200).json(savedArtist);
    } catch (err){
        next(err);
    }
};

export const updateArtist = async (req, res, next) => {

    try{
        const updatedArtist = await ArtistModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json(updatedArtist);
    } catch (err){
        next(err);
    }
};

export const getArtist = async(req, res, next)=>{
    try{
        const gottenArtist = await ArtistModel.findById(req.params.id);
        res.status(200).json(gottenArtist);
    } catch (err){
        next(err);
    }
};

export const getAllArtists = async (req, res, next)=>{
    try{
        const allArtists = await ArtistModel.find(req.query);
        res.status(200).json(allArtists);
    } catch (err){
        next(err);
    }
};

export const deleteArtist = async (req, res, next)=>{
    try{
        await ArtistModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Deleted successfully");
    } catch (err){
        next(err);
    }
};

export const addBulkArtist = async (req, res) => {
    try {
        const dataToInsert = req.body;

        // Use insertMany to bulk insert data into the database
        const result = await ArtistModel.insertMany(dataToInsert);

        res.status(201).json({ message: 'Data added successfully', insertedCount: result.length });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

