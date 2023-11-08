export type FeedServerDataType = {
    FEED_URL?: string;
    COMMENT?: string;
    COMMENT_USER_NAME?: string;
    URL?: string;
    replays?: [
        {
            REPLY_USER_NAME: string;
            REPLY: string;
        }
    ];
};
// User
export type userServerData = {
    url: string;
    USER_NAME: string;
};
// Feeds
export type FeedServerData = {
    FEED: {
        FEED_URL: string;
        timestamp: string;
        comments: {
            user: userServerData;
            COMMENT: string;
            timestamp: string;
            replays: [
                {
                    user: userServerData;
                    REPLY: string;
                    timestamp: string;
                }
            ];
        }[];
    }[];
};
