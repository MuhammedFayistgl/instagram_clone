import { Schema, model } from "mongoose";

const reelsModel = new Schema(
    {
        REELS: [
            {
                reelInfo: {
                    url: String,
                    description: String,
                    postedBy: {
                        avatar: String,
                        name: String,
                    },
                    likes: {
                        count: Number,
                    },
                    dislikes: {
                        count: Number,
                    },
                    comments: {
                        count: Number,
                    },
                    shares: {
                        count: Number,
                    },
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

export default model("Reels", reelsModel);
