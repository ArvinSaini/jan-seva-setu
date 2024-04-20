import mongoose from 'mongoose';

async function connect() {
    try {
        const connection = mongoose.connection;
        if (connection.readyState !== 0) {
            return;
        }
        mongoose.connect(process.env.MONGO_URL);

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        });

        connection.on('error', (err) => {
            console.log('MongoDB connection error' + err);
            process.exit();
        });
    } catch (error) {
        console.log(error);
    }
}

export default connect;
