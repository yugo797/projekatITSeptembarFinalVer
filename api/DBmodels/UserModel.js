import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    autorizovan:{
        type: Boolean,
        default: false
    }
},
    {timestamps: true},
);

export default mongoose.model("User", UserSchema);