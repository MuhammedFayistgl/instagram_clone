import { Schema, model } from "mongoose";

const feedModel = new Schema(
    {
        feed: [
            {
                FEED_URL: String,
                _id: String,
                timestamp: String,
                comments: [
                    {
                        user: { url: String, USER_NAME: String },

                        COMMENT: String,
                        timestamp: String,

                        replays: [
                            {
                                user: {
                                    url: String,
                                    USER_NAME: String,
                                },
                                REPLY: String,
                                timestamp: String,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        timestamps: true,
    }
);

export default model("Feed", feedModel);
