import dotenv from 'dotenv';
dotenv.config();

const env = {
    app: {
        port: process.env.PORT || 4000,
        client: process.env.CLIENT_URL,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiry: process.env.JWT_EXPIRY,
    },
    mongo: {
        uri: process.env.MONGO_URI,
        dbName: process.env.MONGO_DB_NAME,
    },
};

export default env;
