import mongoose from 'mongoose';
import Artist from "./ArtistModel.js";
import Period from "./PeriodModel.js"
const { Schema } = mongoose;

const WorkSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    author: {
        type: String,
        default: "unknown"
    },

    period: {
        type: String
    },

    picsURLs: {
        type: [String],
        required: true
    },

    featured: {
        type: Boolean,
        default: false
    },

    description: {
        type: String,
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Aliquam non eros vel ipsum viverra varius nec et est. Aenean venenatis enim nec mi varius, non finibus elit luctus. " +
            "Praesent massa metus, lobortis sit amet ipsum a, imperdiet tincidunt ante. " +
            "Donec quis augue vel lectus volutpat aliquet et sed nisi. "
    }

});

WorkSchema.pre('save', async function (next) {
    const work = this;

    const artist = await Artist.findOne({ name: work.author });
    const period = await Period.findOne({ name: work.period });

    if (artist) {
        artist.notableWorks.push(...work.picsURLs);
        await artist.save();
    }
    if (period){
        period.representativeWorks.push(...work.picsURLs);
        await period.save();
    }

    next();
});

export default mongoose.model("Artwork", WorkSchema);