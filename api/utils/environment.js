import dotenv from "dotenv";
dotenv.config();

const env = {
    app: {
        port: process.env.PORT || 4000
    },
};

export default env;