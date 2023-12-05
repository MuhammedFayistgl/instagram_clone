import { user } from "./ProfileType";

//  Feed Data Type
export type FeedDataType = {
    COMMENT_USER_NAME: string;
    URL: string;
    COMMENT: string | number;
    TIME_STAMP: number;
    replays: {
        REPLY_USER_NAME: string;
        REPLY: string | number;
        TIME_STAMP: number;
    }[];
};

// User
// export type userData = {
//     url: string;
//     USER_NAME: string;
// };
// Feeds
// export type FeedData = {
//     FEED_URL: string;
//     comments: {
//         user: userData;
//         COMMENT: string;
//         replays: [
//             {
//                 user: userData;
//                 REPLY: string;
//             }
//         ];
//     }[];
// }[];
export interface FeedData {
    feeds: feeds[];
    user: user;
}
export interface Comments {
    user: user;
    COMMENT: string;
    replays?: ReplaysEntity[] | null;
    timestamp: string;
}
export interface User {
    url: string;
    USER_NAME: string;
}
export interface ReplaysEntity {
    user: user;
    REPLY: string;
    timestamp: string;
    _id: string;
}

export interface feeds {
    comments: Comments[];
    FEED_URL: string;
    _id: string;
    Like: number;
}
