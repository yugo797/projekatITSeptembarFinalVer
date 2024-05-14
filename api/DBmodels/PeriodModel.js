import mongoose from 'mongoose';
import Artist from "./ArtistModel.js";
const { Schema } = mongoose;

const PeriodSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    span: {
        type: String,
        required: true
    },

    representativeWorks: {
        type: [String]
    },

    representativeArtists: {
        type: [String]
    }

});


export default mongoose.model("Period", PeriodSchema);