import express from "express";

// import { Chat } from "../schema/chatModel";

const route = express.Router();

route.post("/create-single-chat", async ( ) => {
    // const { senderId, receiverId, content, roomId } = req.body;

    // const isChat = await Chat.aggregate([
    //     {
    //         $match: {
    //             $and: [
    //                 {
    //                     senderId: {
    //                         $eq:senderId,
    //                     },
    //                 },
    //                 {
    //                     receiverId: {
    //                         $eq:receiverId,
    //                     },
    //                 },
    //             ],
    //         },
    //     }
    // ]);

    // if (isChat.length === 0) {
    //     const responseData = await new Chat({
    //         senderId,
    //         receiverId,
    //         content,
    //         roomId,
    //     }).save();
    //     console.log(responseData);
    // }

    // console.log("isChat", isChat);

    // const responseData = await new Chat({
    //     senderId, receiver, content, roomId
    // }).save();

    // console.log(responseData);
    //

    // const receiver = await userSchema.aggregate([
    //     {
    //         $match: {
    //             "user.uid": "dziW1YPO1iW0brFpoXgEa6cVLMH3",
    //         },
    //     },
    //     {
    //         $project: {
    //             receiver: "$user.uid",
    //         },
    //     },
    // ]);
    // await new chatSchema({
    //     chatName: "sender",
    //     isGroupChat: false,
    //     users:receiver
    // }).save();

    // let isChat = await chatSchema
    //     .find({
    //         isGroupChat: false,
    //         $and: [{ users: { $elemMatch: { $eq: receiverID } } }, { users: { $elemMatch: { $eq: uid } } }],
    //     })
    //     .populate("users")
    //     .populate("latestMessage");

    // isChat = await userSchema.populate(isChat, {
    //     path: "latestMessage.sender",
    //     select: " url USER_NAME uid",
    // });
    // if (isChat.length > 0) {
    //     res.send(isChat[0]);
    // } else {
    //     const chatData = {
    //         chatName: "sender",
    //         isGroupChat: false,
    //         users: [uid, receiverID],
    //     };
    //     try {
    //         const createdChat = await chatSchema.create(chatData);
    //         const FullChat = await chatSchema.findOne({ _id: createdChat._id }).populate("users");
    //         res.status(200).send(FullChat);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
});

export default route;
