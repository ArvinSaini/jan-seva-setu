import NGO from '../models/NGOSchema.js';
import mongoose from 'mongoose';
import connect from '../db/dbconfig.js';
const ngos = async (req, res) => {
    try {
        connect();
        const ngos = await NGO.find();
        return res.json(ngos);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export default ngos;
