import NGO from '../models/NGOSchema.js';

async function getUser(id) {
    const ngo = await NGO.findOne({ _id: id });
    return ngo;
}

export default getUser;
