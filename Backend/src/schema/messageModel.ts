import { Schema, model } from "mongoose";

const messageModel = new Schema(
    {
        roomId: String,
        chats:[{
            type: Schema.Types.ObjectId,
            senderTex:String,
            receiverTex:String,
        }]
    },
    {
        timestamps: true,
    }
);

export default model("Message", messageModel);
