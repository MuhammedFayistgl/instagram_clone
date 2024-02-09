import { model, Schema } from "mongoose";

// Schema
const UserSchema = new Schema(
    {
        user: {
            url: {
                type: String,
                default: "",
            },
            USER_NAME: {
                type: String,
                default: "",
            },
            uid: {
                type: String,
                default: "",
            },
            Followers: {
                type: Number,
                default: 0,
            },
            Following: {
                type: Number,
                default: 0,
            },
            description: {
                type: String,
                default: "",
            },
        },

        STORY: {
            type: Schema.Types.ObjectId,
            ref: "Stories",
        },

        feed: {
            type: Schema.Types.ObjectId,
            ref: "Feed",
        },
        REELS: {
            type: Schema.Types.ObjectId,
            ref: "Reels",
        },
    },
    { timestamps: true }
);

// Default export
export default model("User", UserSchema);
