import mongoose from 'mongoose';

const donateSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    phone: {
        type: Number,
    },
    item: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    pickupAddress: {
        type: Object,
        required: true,
    },
    pickupDateAndTime: {
        type: Date,
        default: Date.now,
    },
});
const Donate = mongoose.models.donate || mongoose.model('donate', donateSchema);

export default Donate;
