import { Schema, model } from "mongoose";

const chatModel = new Schema(
    {
        id: { type: Schema.Types.ObjectId },
        senderId: String,
        receiverId: String,
        roomId: String,
    },
    {
        timestamps: true,
    }
);

export const Chat = model("chats", chatModel);
