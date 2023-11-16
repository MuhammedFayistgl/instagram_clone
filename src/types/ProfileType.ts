export type ProfileDataType = {
    user: user ;
    feeds: string[] ;
};

export type user = {
    USER_NAME: string;
    Followers: number;
    Following: number;
    description: string;
    uid: string;
    url: string;
};
