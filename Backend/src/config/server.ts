import mongoose from "mongoose";

export const connectDB = async () => {
    const url: string =
        // "mongodb+srv://muhammedfayisthangal:grllDizFwS8rUPeK@cluster0.6ykvkzf.mongodb.net/?retryWrites=true&w=majority";
'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1/'
    try {
        await mongoose.connect(url).then(() => {
            console.log("mongoDB connected");
        });
    } catch (error) {
        console.log(error);
    }
};
