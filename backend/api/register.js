import bcryptjs from 'bcryptjs';
import User from '../models/userSchema.js';
import connect from '../db/dbconfig';

const register = async (req, res) => {
    try {
        connect();
        const { name, email, password } = req.body;

        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });
        const savedUser = await newUser.save();

        return res.json({ message: 'User registered successfully', success: true, savedUser });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
};

export default register;
