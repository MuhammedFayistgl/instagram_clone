import { Request, Response, Router } from "express";
import userSchema from "../schema/userSchema";

export const Route = Router();

Route.get("/", (req, res) => {
    res.send("What's up doc ?!");
});

Route.post("/upload", async (req, res) => {
    const data = {
        user: {
            url: "https://picsum.photos/500/700",
            USER_NAME: "y_as_er_T_U..",
        },

        STORY: [
            {
                url: "https://picsum.photos/500/700",
                duration: 5000,
                seeMore: "seeMore",
                header: {
                    heading: "y_as_er_T_U..",
                    subheading: "Posted 30m ago",
                    profileImage: "https://picsum.photos/50/50",
                },
            },
            {
                url: "https://picsum.photos/500/700",
                duration: 5000,
                seeMore: "seeMore",
                header: {
                    heading: "Mohit Karekar",
                    subheading: "Posted 30m ago",
                    profileImage: "https://picsum.photos/50/50",
                },
            },
        ],
        feed: [
            {
                FEED_URL: "https://picsum.photos/200/300",
                timestamp: Date.now(),
                comments: [
                    {
                        user: {
                            url: "https://picsum.photos/500/700",
                            USER_NAME: "y_as_er_T_U..",
                        },
                        COMMENT:
                            "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                        timestamp: Date.now(),
                        replays: [
                            {
                                user: {
                                    url: "https://picsum.photos/500/700",
                                    USER_NAME: "y_as_er_T_U..",
                                },
                                REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                timestamp: Date.now(),
                            },
                        ],
                    },
                    {
                        user: {
                            url: "https://picsum.photos/500/700",
                            USER_NAME: "y_as_er_T_U..",
                        },
                        COMMENT:
                            "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                        timestamp: Date.now(),
                        replays: [
                            {
                                user: {
                                    url: "https://picsum.photos/500/700",
                                    USER_NAME: "y_as_er_T_U..",
                                },
                                REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                timestamp: Date.now(),
                            },
                        ],
                    },
                    {
                        user: {
                            url: "https://picsum.photos/500/700",
                            USER_NAME: "y_as_er_T_U..",
                        },
                        COMMENT:
                            "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                        timestamp: Date.now(),
                        replays: [
                            {
                                user: {
                                    url: "https://picsum.photos/500/700",
                                    USER_NAME: "y_as_er_T_U..",
                                },
                                REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                timestamp: Date.now(),
                            },
                        ],
                    },
                ],
            },
            {
                FEED_URL: "https://picsum.photos/200/300",
                timestamp: Date.now(),
                comments: [
                    {
                        user: {
                            url: "https://picsum.photos/500/700",
                            USER_NAME: "y_as_er_T_U..",
                        },
                        COMMENT:
                            "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                        timestamp: Date.now(),
                        replays: [
                            {
                                user: {
                                    url: "https://picsum.photos/500/700",
                                    USER_NAME: "y_as_er_T_U..",
                                },
                                REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                timestamp: Date.now(),
                            },
                        ],
                    },
                    {
                        user: {
                            url: "https://picsum.photos/500/700",
                            USER_NAME: "y_as_er_T_U..",
                        },
                        COMMENT:
                            "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                        timestamp: Date.now(),
                        replays: [
                            {
                                user: {
                                    url: "https://picsum.photos/500/700",
                                    USER_NAME: "y_as_er_T_U..",
                                },
                                REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                timestamp: Date.now(),
                            },
                        ],
                    },
                    {
                        user: {
                            url: "https://picsum.photos/500/700",
                            USER_NAME: "y_as_er_T_U..",
                        },
                        COMMENT:
                            "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                        timestamp: Date.now(),
                        replays: [
                            {
                                user: {
                                    url: "https://picsum.photos/500/700",
                                    USER_NAME: "y_as_er_T_U..",
                                },
                                REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                timestamp: Date.now(),
                            },
                        ],
                    },
                    {
                        user: {
                            url: "https://picsum.photos/500/700",
                            USER_NAME: "y_as_er_T_U..",
                        },
                        COMMENT:
                            "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                        timestamp: Date.now(),
                        replays: [
                            {
                                user: {
                                    url: "https://picsum.photos/500/700",
                                    USER_NAME: "y_as_er_T_U..",
                                },
                                REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                timestamp: Date.now(),
                            },
                        ],
                    },
                    {
                        user: {
                            url: "https://picsum.photos/500/700",
                            USER_NAME: "y_as_er_T_U..",
                        },
                        COMMENT:
                            "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                        timestamp: Date.now(),
                        replays: [
                            {
                                user: {
                                    url: "https://picsum.photos/500/700",
                                    USER_NAME: "y_as_er_T_U..",
                                },
                                REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                timestamp: Date.now(),
                            },
                        ],
                    },
                ],
            },
            {
                FEED_URL: "https://picsum.photos/200/300",
                timestamp: Date.now(),
                comments: [
                    {
                        user: {
                            url: "https://picsum.photos/500/700",
                            USER_NAME: "y_as_er_T_U..",
                        },
                        COMMENT:
                            "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                        timestamp: Date.now(),
                        replays: [
                            {
                                user: {
                                    url: "https://picsum.photos/500/700",
                                    USER_NAME: "y_as_er_T_U..",
                                },
                                REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                timestamp: Date.now(),
                            },
                            {
                                user: {
                                    url: "https://picsum.photos/500/700",
                                    USER_NAME: "y_as_er_T_U..",
                                },
                                REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                timestamp: Date.now(),
                            },
                            {
                                user: {
                                    url: "https://picsum.photos/500/700",
                                    USER_NAME: "y_as_er_T_U..",
                                },
                                REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                timestamp: Date.now(),
                            },
                        ],
                    },
                    {
                        user: {
                            url: "https://picsum.photos/500/700",
                            USER_NAME: "y_as_er_T_U..",
                        },
                        COMMENT:
                            "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                        timestamp: Date.now(),
                        replays: [
                            {
                                user: {
                                    url: "https://picsum.photos/500/700",
                                    USER_NAME: "y_as_er_T_U..",
                                },
                                REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                timestamp: Date.now(),
                            },
                        ],
                    },
                ],
            },
            {
                FEED_URL: "https://picsum.photos/200/300",
                timestamp: Date.now(),
                comments: [
                    {
                        user: {
                            url: "https://picsum.photos/500/700",
                            USER_NAME: "y_as_er_T_U..",
                        },
                        COMMENT:
                            "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                        timestamp: Date.now(),
                        replays: [
                            {
                                user: {
                                    url: "https://picsum.photos/500/700",
                                    USER_NAME: "y_as_er_T_U..",
                                },
                                REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                timestamp: Date.now(),
                            },
                        ],
                    },
                    {
                        user: {
                            url: "https://picsum.photos/500/700",
                            USER_NAME: "y_as_er_T_U..",
                        },
                        COMMENT:
                            "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                        timestamp: Date.now(),
                        replays: [
                            {
                                user: {
                                    url: "https://picsum.photos/500/700",
                                    USER_NAME: "y_as_er_T_U..",
                                },
                                REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                timestamp: Date.now(),
                            },
                        ],
                    },
                    {
                        user: {
                            url: "https://picsum.photos/500/700",
                            USER_NAME: "y_as_er_T_U..",
                        },
                        COMMENT:
                            "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                        timestamp: Date.now(),
                        replays: [
                            {
                                user: {
                                    url: "https://picsum.photos/500/700",
                                    USER_NAME: "y_as_er_T_U..",
                                },
                                REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                timestamp: Date.now(),
                            },
                        ],
                    },
                ],
            },
        ],

        REELS: [
            {
                reelInfo: {
                    url: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
                    description: "this is tha best reels",
                    postedBy: {
                        avatar: "https://picsum.photos/200/300",
                        name: "y_as_er_T_U..",
                    },
                    likes: {
                        count: 55,
                    },
                    dislikes: {
                        count: 5,
                    },
                    comments: {
                        count: 22,
                    },
                    shares: {
                        count: 55,
                    },
                },
            },
        ],
    };

    try {
        await new userSchema(data).save();
        res.send("data save");
    } catch (error) {
        console.log(error);
    }
});

Route.get("/instagram-random-feed", async (req, res) => {
    //  eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newreel: any = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const randomFeeds = (await userSchema.find()).forEach((data) =>
        newreel.push({ feeds: [...data.feed], user: data.user })
    );
    res.send(newreel);
});

Route.get("/instagram-random-story", async (req, res) => {
    const instaRandomFeed = await userSchema.find();

    const feed = instaRandomFeed.filter((feed) => feed.STORY);
    res.send(feed);
});
Route.get("/instagram-random-reel", async (req, res) => {
    const instaRandomFeed = await userSchema.find();

    const REELS = instaRandomFeed.filter((feed) => feed.REELS);
    res.send(REELS);
});
Route.get("/instagram-user-profile-details", async (req, res) => {
    try {
        const uid = req?.headers?.authorization?.split(" ")[1];
        const userinformation = await userSchema.findOne({
            "user.uid": { $in: uid },
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const newArray: any = [];
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const data = userinformation?.feed.forEach((data) =>
            newArray.push(data.FEED_URL)
        );
        const userProfileData = [
            {
                user: userinformation?.user,
                feeds: newArray,
            },
        ];
        res.send(userProfileData);
    } catch (error) {
        res.send(error);
    }
});
//  post
Route.post("/create-User-with-userName", async (req) => {
    const { uid, UserName } = req.body;
    await userSchema.findOneAndUpdate({
        user: {
            USER_NAME: UserName,
            uid: uid,
        },
    });
});

Route.post(
    "/instagram-user-like",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (req: Request, res: Response) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { Like, targetID } = req.body;
        // const TargetLikeObj = await userSchema.updateOne({ "feed._id": { $eq: targetID }},{$set:{'feed.Like': Like  }})
        // const countLike = await userSchema.findOneAndUpdate(
        //     {
        //         feed: [{ _id: { $eq: targetID } }],
        //     },
        //     { $inc: {"Like": 1 } },
        //     { upsert: true, new: true }
        // );
        const uid = req?.headers?.authorization?.split(" ")[1];
        // const countLike = await userSchema.updateOne(
        //     {
        //         "feed.FEED_URL":
        //             "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        //     },
        //     { $inc: { "feed.$.Like": ';lkjfdglkdj' } },
            
        // );

        console.log("Unlike, targetID", Like, targetID);
        // console.log("countLike", countLike);
    }
);
Route.post(
    "/instagram-user-Unlike",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (req: Request, res: Response) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { Like, targetID } = req.body;
        // const countLike = await userSchema.findOneAndUpdate(
        //     {
        //         feed: [{ _id: { $eq: targetID } }],
        //     },
        //     { $inc: {"Like": -1 } },
        //     { upsert: true, new: true }
        // { "feed._id": { $eq: targetID } },
        // { $inc: { "Like": -1 } },
        // );

        // console.log("Unlike, targetID", Like, targetID);
        // console.log("countUnlike", countLike);
    }
);
