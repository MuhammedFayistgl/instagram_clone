import { Router } from "express";
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
        newreel.push(...data.feed)
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
