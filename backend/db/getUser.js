import User from '../models/userSchema.js';

async function getUser(id) {
    const user = await User.findOne({ _id: id }).select('-password');
    return user;
}

export default getUser;
