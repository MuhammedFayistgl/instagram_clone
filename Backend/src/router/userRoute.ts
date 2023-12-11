import { Request, Response, Router } from "express";
import userSchema from "../schema/userSchema";

const Route = Router();

Route.get("/", (req, res) => {
    res.send("What's up doc ?!");
});
Route.get("/all-data", async (req, res) => {
    const allData = await userSchema.find();
    res.send(allData).json();
});

Route.post("/upload", async (req, res) => {
    // const data = {
    //     user: {
    //         url: "https://picsum.photos/500/700",
    //         USER_NAME: "y_as_er_T_U..",
    //     },

    //     STORY: [
    //         {
    //             url: "https://picsum.photos/500/700",
    //             duration: 5000,
    //             seeMore: "seeMore",
    //             header: {
    //                 heading: "y_as_er_T_U..",
    //                 subheading: "Posted 30m ago",
    //                 profileImage: "https://picsum.photos/50/50",
    //             },
    //         },
    //         {
    //             url: "https://picsum.photos/500/700",
    //             duration: 5000,
    //             seeMore: "seeMore",
    //             header: {
    //                 heading: "Monit Karekar",
    //                 subheading: "Posted 30m ago",
    //                 profileImage: "https://picsum.photos/50/50",
    //             },
    //         },
    //     ],
    //     feed: [
    //         {
    //             FEED_URL: "https://picsum.photos/200/300",
    //             timestamp: Date.now(),
    //             comments: [
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //         {
    //             FEED_URL: "https://picsum.photos/200/300",
    //             timestamp: Date.now(),
    //             comments: [
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //         {
    //             FEED_URL: "https://picsum.photos/200/300",
    //             timestamp: Date.now(),
    //             comments: [
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //         {
    //             FEED_URL: "https://picsum.photos/200/300",
    //             timestamp: Date.now(),
    //             comments: [
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //     ],

    //     REELS: [
    //         {
    //             reelInfo: {
    //                 url: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    //                 description: "this is tha best reels",
    //                 postedBy: {
    //                     avatar: "https://picsum.photos/200/300",
    //                     name: "y_as_er_T_U..",
    //                 },
    //                 likes: {
    //                     count: 55,
    //                 },
    //                 dislikes: {
    //                     count: 5,
    //                 },
    //                 comments: {
    //                     count: 22,
    //                 },
    //                 shares: {
    //                     count: 55,
    //                 },
    //             },
    //         },
    //     ],
    // };
    const data = [
        {
            user: {
                USER_NAME: "fayis__elm",
                uid: "dziW1YPO1iW0brFpoXgEa6cVLMH3",
                Followers: "500",
                Following: "600",
                description: "fullstack developer",
                url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
            },

            STORY: [
                {
                    header: {
                        heading: "y_as_er_T_U..",
                        subheading: "Posted 30m ago",
                        profileImage: "https://picsum.photos/50/50",
                    },
                    url: "https://picsum.photos/500/700",
                    duration: 5000,
                    seeMore: "seeMore",
                },
                {
                    header: {
                        heading: "Mohit Karekar",
                        subheading: "Posted 30m ago",
                        profileImage: "https://picsum.photos/50/50",
                    },
                    url: "https://picsum.photos/500/700",
                    duration: 5000,
                    seeMore: "seeMore",
                },
            ],
            feed: [
                {
                    FEED_URL:
                        "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",

                    comments: [
                        {
                            user: {
                                url: "https://picsum.photos/500/700",
                                USER_NAME: "y_as_er_T_U..",
                            },
                            COMMENT:
                                "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",

                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
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

                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
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

                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                },
                            ],
                        },
                    ],

                    Like: [""],
                },
                {
                    FEED_URL:
                        "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",

                    comments: [
                        {
                            user: {
                                url: "https://picsum.photos/500/700",
                                USER_NAME: "y_as_er_T_U..",
                            },
                            COMMENT:
                                "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",

                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
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
                            timestamp: "1699430228768",
                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
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

                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
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

                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
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

                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                },
                            ],
                        },
                    ],

                    Like: [""],
                },
                {
                    FEED_URL:
                        "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
                    timestamp: "1699430228768",
                    comments: [
                        {
                            user: {
                                url: "https://picsum.photos/500/700",
                                USER_NAME: "y_as_er_T_U..",
                            },
                            COMMENT:
                                "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                            timestamp: "1699430228768",
                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                },
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                },
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
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

                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                },
                            ],
                        },
                    ],

                    Like: [""],
                },
                {
                    FEED_URL:
                        "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",

                    comments: [
                        {
                            user: {
                                url: "https://picsum.photos/500/700",
                                USER_NAME: "y_as_er_T_U..",
                            },
                            COMMENT:
                                "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",

                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",

                                    _id: "654b3f54090f8f1f2ffe2fa5",
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

                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
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

                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                },
                            ],
                        },
                    ],

                    Like: [""],
                },
            ],
            REELS: [
                {
                    reelInfo: {
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
                        url: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
                        description: "this is tha best reels",
                    },
                    _id: "654b3f54090f8f1f2ffe2faa",
                },
            ],
        },
    ];

    const DBdata = await userSchema.insertMany(data);
    res.send(DBdata);
});

Route.get("/instagram-random-feed", async (req, res) => {

  const data = await  userSchema
        .find()
        .then((doc) => doc.map((user) => { return {user:user.user, feed:user.feed}})).then((doc)=> doc.reverse())

    res.send(data);
});

Route.get("/instagram-random-story", async (req, res) => {
    const instaRandomFeed = await userSchema.find();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const array: any = [];
    instaRandomFeed.filter((feed, index) => {
        array.push({
            user: feed?.user?.uid,
            STORY: [
                {
                    header: {
                        heading: feed?.user?.USER_NAME,
                        subheading:
                            feed?.STORY[index]?.header?.subheading,
                        profileImage: feed?.user?.url,
                    },
                    url: feed?.STORY[index]?.url,
                    duration: feed?.STORY[index]?.duration,
                    seeMore: feed?.STORY[index]?.seeMore,
                    _id: feed?.STORY[index]?._id,
                },
            ],
        });
    });
    // console.log(array);

    res.send(array);
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
Route.get("/instagram-user", async (req, res) => {
    //  eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newreel: any = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const randomFeeds = (await userSchema.find()).forEach((data) =>
        newreel.push({ user: data.user })
    );
    res.send(newreel);
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
        // const uid = req?.headers?.authorization?.split(" ")[1];
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

Route.get("/get-my-username", async (req, res) => {
    const uid = req?.headers?.authorization?.split(" ")[1];
    const userName = await userSchema
        .findOne({
            "user.uid": { $in: uid },
        })
        .then((doc) => doc?.user?.USER_NAME);

    res.send(userName);
});
export default Route;
