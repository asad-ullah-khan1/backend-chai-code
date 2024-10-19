import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});

const app = express();


connectDB();

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log("Connected to MongoDB");

//         app.on("error", (error) => {
//             console.log('Application Error:', error);
//             throw error;
//         });

//         const port = process.env.PORT || 3000;
//         app.listen(port, () => {
//             console.log('App is listening on Port', port);
//         });
//     } catch (error) {
//         console.log('Error:', error);
//         throw error;
//     }
// })();
