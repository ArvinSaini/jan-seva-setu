import mongoose from 'mongoose';

const NGOSchema = new mongoose.Schema({
    ngoName: {
        type: String,
        required: true,
        unique: true,
    },
    ngoAddress: {
        type: Object,
        required: true,
    },
    ngoPhone: {
        type: Number,
        required: true,
        unique: true,
    },
    ngoCategory: String,
    ngoDescription: {
        type: String,
        required: true,
    },
});

const NGO = mongoose.models.ngo || mongoose.model('ngo', NGOSchema);

export default NGO;
