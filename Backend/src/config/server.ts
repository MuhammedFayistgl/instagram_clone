import mongoose from "mongoose";

export const connectDB = async () => {
    const url: string =
        "mongodb+srv://muhammedfayisthangal:grllDizFwS8rUPeK@cluster0.6ykvkzf.mongodb.net/?retryWrites=true&w=majority";

    try {
        await mongoose.connect(url).then(() => {
            console.log("mongoDB connected");
        });
    } catch (error) {
        console.log(error);
    }
};
