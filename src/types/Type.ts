import { Store } from "../redux/store";
import { ReactNode } from "react";
import { FeedDataType } from "./FeedType";
import { ReelsType } from "./ReelsType";

export interface Storytype {
    id: number;
    URL: string;
    USER_NAME: string;
    FEED_URL: string[];
    STORY: Activestory[];
    comments: FeedDataType[];
    REELS: ReelsType;
}

export type UserType = {
    url: string;
    USER_NAME: string;
};
export type ResponseUserDataType = {
    user: UserType;
    feed: FeedDataType;
};
export type Activestory = {
    url: string;
    duration?: number;
    seeMore?: string | ReactNode;
    header?: {
        heading: string;
        subheading: string;
        profileImage: string;
    };
};
export interface UserfeedsType {
    IMG_URL: string;
}

export type RootState = ReturnType<typeof Store.getState>;

export type ProfilePropsType = {
    Profil_Url: string | undefined;
    alt?: string;
    Size?: "sm" | "md" | "lg" | "xl";
    storyview: boolean;
    Name?: boolean;
};

export type ReelMetaInfoType = {
    videoDimensions?: {
        height?: number; // height of the each reel container
        width?: number; // width of the each reel container
    };
    backGroundColor?: string; // background colour for desktop view
    borderRadius?: number; // border radius of each reel container
    likeActiveColor?: string; // like icon colour when clicked
    dislikeActiveColor?: string; // dislike icon color when clicked
};
