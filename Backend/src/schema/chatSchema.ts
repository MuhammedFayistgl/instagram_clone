import { Schema, model } from "mongoose";

const chatModel = new Schema(
    {
        chatName: {
            type: String,
            trim: true,
        },
        isGroupChat: {
            type: Boolean,
            default: false,
        },
        users:[{
            type: Schema.Types.ObjectId,
            ref: "User",
        }],
        latestMessage: {
            type: Schema.Types.ObjectId,
            ref: "Message",
        },
        groupAdmin: {
            type: Schema.Types.ObjectId,
            ref: "User",
        }
    },
    {
        timestamps: true,
    }
);

export default model("Chat", chatModel);
