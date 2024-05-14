import mongoose from 'mongoose';
import Period from "./PeriodModel.js";
const { Schema } = mongoose;

const ArtistSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    picURL: {
        type: String
    },

    period: {
        type: String
    },

    notableWorks: {
        type: [String],
    },

    featured: {
        type: Boolean,
        default: false
    },

    biography: {
        type: String,
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Aliquam non eros vel ipsum viverra varius nec et est. Aenean venenatis enim nec mi varius, non finibus elit luctus. " +
            "Praesent massa metus, lobortis sit amet ipsum a, imperdiet tincidunt ante. " +
            "Donec quis augue vel lectus volutpat aliquet et sed nisi. "
    }

});

ArtistSchema.pre('save', async function (next) {
    const artist = this;

    const period = await Period.findOne({ name: artist.period });

    if (period) {
        period.representativeArtists.push(artist.name);
        await period.save();
    }
    next();
});

export default mongoose.model("Artist", ArtistSchema);