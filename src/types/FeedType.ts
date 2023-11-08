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
    comments: Comments;
    FEED_URL: string;
    _id: string;
}
export interface Comments {
    user: User;
    COMMENT: string;
    replays?: ReplaysEntity[] | null;
    timestamp: string;
}
export interface User {
    url: string;
    USER_NAME: string;
}
export interface ReplaysEntity {
    user: User;
    REPLY: string;
    timestamp: string;
    _id: string;
}
