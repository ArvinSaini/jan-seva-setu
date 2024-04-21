import mongoose from 'mongoose';
const reachOutSchema = new mongoose.Schema({
    ngo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ngo',
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});
const ReachOut = mongoose.models.reachout || mongoose.model('reachout', reachOutSchema);

export default ReachOut;
