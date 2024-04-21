import getDataFromToken from '../db/getDataFromToken.js';
import getUser from '../db/getUser.js';
import Donate from '../models/donationSchema.js';
import connect from '../db/dbconfig';

const donate = async (req, res) => {
    try {
        connect();
        const { name, phone, pickupAddress, item, quantity, description, pickupDateAndTime } = req.body;
        const token = req.headers.authorization.split(' ')[1];
        const data = await getDataFromToken(token);
        const user = await getUser(data);
        const newDonation = new Donate({
            user,
            name,
            phone,
            pickupAddress,
            item,
            quantity,
            description,
            pickupDateAndTime,
        });
        const savedDonation = await newDonation.save();
        return res.json({ message: 'Donation successful', success: true, savedDonation });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export default donate;
