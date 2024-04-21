import getDataFromToken from '../db/getDataFromToken.js';
import getNGO from '../db/getNGO.js';
import Donate from '../models/donationSchema.js';
import connect from '../db/dbconfig';
import ReachOut from '../models/reachOutSchema.js';

const reachout = async (req, res) => {
    try {
        connect();
        const { id, address, message } = req.body;
        const data = await getDataFromToken(req.cookies.token);
        const ngo = await getNGO(id);
        const user = await getUser(data);
        const newReachOut = new ReachOut({
            ngo,
            user,
            address,
            message,
        });

        const savedReachOut = await newReachOut.save();
        return res.json({ message: 'ReachOut successful', success: true, savedReachOut });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export default reachout;
