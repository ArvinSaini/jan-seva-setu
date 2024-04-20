import NGO from '../models/NGOSchema.js';
const ngos = async (req, res) => {
    try {
        const ngos = await NGO.find();
        return res.json(ngos);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export default ngos;
