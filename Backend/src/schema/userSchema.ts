import { model, Schema } from "mongoose";

// Schema
const UserSchema = new Schema(
    {
        user: {
            url: String,
            USER_NAME: String,
        },

        STORY: [
            {
                url: String,
                duration: Number,
                seeMore: String,
                header: {
                    heading: String,
                    subheading: String,
                    profileImage: String,
                },
            },
        ],

        feed: [
            {
                FEED_URL: String,
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
    { timestamps: true }
);

// Default export
export default model("User", UserSchema);
