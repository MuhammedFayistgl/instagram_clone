/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, Router } from "express";
import userSchema from "../schema/userSchema";
import mongoose from "mongoose";
import moment from "moment";
import { getUID } from "../utils/userUtility";
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
                    FEED_URL: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",

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
                    FEED_URL: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",

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
                    FEED_URL: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
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
                    FEED_URL: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",

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
    await userSchema
        .aggregate([
            {
                $project: {
                    feed: "$feed",
                    user: "$user",
                    _id: 0,
                },
            },
        ])
        .then((array) => res.send(array));
});

Route.get("/instagram-random-story", async (req, res) => {
    await userSchema
        .aggregate([
            {
                $project: {
                    header: {
                        heading: "$user.USER_NAME",
                        subheading: moment(new Date()).fromNow(),
                        profileImage: "$user.url",
                    },
                    url: "$Stories",
                    duration: "$STORY.duration",
                    seeMore: "seeMore",
                    _id: new mongoose.Types.ObjectId(),
                },
            },
        ])
        .then((array) => res.send(array));
});
Route.get("/instagram-random-story-only-status-view", async (req, res) => {
    try {
        const array = await userSchema.aggregate([
            {
                $project: {
                    name: "$user.USER_NAME",
                    uid: "$user.uid",
                    url: "$user.url",
                    _id: "$_id",
                },
            },
        ]);

        res.send(array);
    } catch (error) {
        console.log(error);
    }
});
Route.post("/instagram-random-story-only-status-with-id", async (req: Request, res: Response) => {
    const { id } = req.body;
    const array = await userSchema.aggregate([
        {
            $match: {
                "user.uid": id,
            },
        },
        {
            $project: {
                header: {
                    heading: "$user.USER_NAME",
                    subheading: moment(new Date()).fromNow(),
                    profileImage: "$user.url",
                },
                url: "$Stories",
                duration: "$STORY.duration",
                seeMore: "seeMore",
                _id: new mongoose.Types.ObjectId(),
            },
        },
    ]);
    res.send(array);
});

Route.get("/instagram-random-reel", async (req, res) => {
    const instaRandomFeed = await userSchema.find();

    const REELS = instaRandomFeed.filter((feed) => feed.REELS);
    res.send(REELS);
});
Route.get("/instagram-user-on-feeds", async (req, res) => {
    const tokenHeader = req.headers["authorization"];
    const uid = tokenHeader && tokenHeader.split(" ")[1];
    if (!uid) return res.sendStatus(401).json("uid not found");
    try {
        const userinformation = await userSchema.aggregate([
            {
                $match: {
                    "user.uid": uid,
                },
            },
            {
                $project: {
                    feeds: "$feed.FEED_URL",
                    _id: 0,
                },
            },
        ]);
        const data = userinformation.map((data) => data.feeds).flat(1);
        res.send(data);
    } catch (error) {
        res.send(error);
    }
});
Route.get("/instagram-user", async (req, res) => {
    const tokenHeader = req.headers["authorization"];
    const uid = tokenHeader && tokenHeader.split(" ")[1];
    if (!uid) return res.sendStatus(401).json("uid not found");
    const user = await userSchema.aggregate([
        {
            $match: {
                "user.uid": uid,
            },
        },
        {
            $project: {
                user: "$user",
            },
        },
    ]);
    res.send(user);
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

    async (req: Request) => {
        const { uid, targetID } = req.body;
        const TargetLikeObj = await userSchema.aggregate([
            {
                $match: {
                    "user.uid": uid,
                },
            },
            {
                $unwind: "$feed",
            },
            {
                $match: {
                    "feed._id": targetID,
                },
            },
            {
                $addFields: {
                    "feed.Like": {
                        $add: ["$feed.Like", +1],
                    },
                },
            },
        ]);
        console.log("Unlike, targetID", uid, targetID);
        console.log("TargetLikeObj", TargetLikeObj);
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

    const tokenHeader = req.headers["authorization"];
    const uid = tokenHeader && tokenHeader.split(" ")[1];

    if (!uid) return res.sendStatus(401).json("uid not found");
    const userName = await userSchema
        .findOne({
            "user.uid": { $in: uid },
        })
        .then((doc) => doc?.user?.USER_NAME);

    res.send(userName);
});

Route.post("/get-users-chat", async (req: Request, res: Response) => {
    const uid = getUID(req, res);
    if (!uid) return res.sendStatus(401).json("uid not found");

    const users = await userSchema.aggregate([
        {
            $match: {
                "user.uid": {
                    $ne: uid,
                },
            },
        },
        {
            $project: {
                _id: 0,
                user: "$user",
            },
        },
    ]);
    res.send(users);
});

export default Route;
