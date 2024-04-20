import jwt from 'jsonwebtoken';
import User from '../models/userSchema.js';
import bcryptjs from 'bcryptjs';

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ error: 'User does not exist' });
        }

        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        const tokenData = {
            id: user._id,
            name: user.name,
            email: user.email,
        };

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: '1d' });

        const response = res.cookie('token', token).json({
            message: 'Login successful',
            success: true,
            token,
        });

        return response;
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export default login;
