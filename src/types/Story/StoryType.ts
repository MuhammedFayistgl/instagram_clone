export interface AllStoryDataTypeClient {
    user: string;
    STORY: STORY[];
}
export interface STORY {
    header: Header;
    url: string;
    duration: number;
    seeMore: string;
    _id: string;
}
interface Header {
    heading: string;
    subheading: string;
    profileImage: string;
}
