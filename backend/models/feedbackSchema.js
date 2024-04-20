import mongoose from 'mongoose';
const feedbackSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
});
const Feedback = mongoose.models.feedback || mongoose.model('feedback', feedbackSchema);

export default Feedback;
