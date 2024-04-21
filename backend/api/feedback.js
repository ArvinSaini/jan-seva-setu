import Feedback from '../models/feedbackSchema.js';
import connect from '../db/dbconfig';

const feedback = async (req, res) => {
    try {
        connect();
        const { message } = req.body;
        if (!message) {
            return res.status(400).json({ error: 'Please fill all the fields' });
        }
        const newFeedback = new Feedback({
            message,
        });
        const savedFeedback = await newFeedback.save();

        return res.json({ message: 'Feedback submitted successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export default feedback;
