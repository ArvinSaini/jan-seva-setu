import jwt from 'jsonwebtoken';

const getDataFromToken = (token) => {
    try {
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);

        return decodedToken.id;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default getDataFromToken;
