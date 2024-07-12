import dotenv from "dotenv";
dotenv.config();

const env = {
    app: {
        port: process.env.PORT || 4000
    },
    mongo: {
        uri: process.env.MONGO_URI,
        dbName: process.env.MONGO_DB_NAME
    }
};

export default env;