import Stories from "react-insta-stories";
import { memo, useEffect, useMemo, useState } from "react";
import { Avatar, Dialog } from "@mui/material";
import { getAxiosinstance } from "../../utils/getAxiosinstance";
import { AllStoryDataTypeClient, STORY } from "../../types/Story/StoryType";
import { user } from "../../types/ProfileType";
import { ProfilePropsType } from "../../types/Type";
import StoryViewComponent from "./StoryViewComponent";
import { stateStoryProfileType } from "../../types/UtilsTypes";
import StoriesOpenHandler from "./StoriesOpenHandler";

const StoryProfile = ({ Profil_Url, alt, Size, storyview, Name, statusSlide }: ProfilePropsType) => {
    const [open, setOpen] = useState<stateStoryProfileType>({ open: false, dataID: undefined });
    const [story, setStory] = useState<AllStoryDataTypeClient[]>();
    const [user, setUser] = useState<user>();

    useEffect(() => {
        try {
            !user &&
                getAxiosinstance("/instagram-user").then((data) => {
                    setUser(data.data[0].user);
                });
        } catch (error) {
            throw new Error("Something wrong!!");
        }

        if (!story) {
            getAxiosinstance("/instagram-random-story").then((data) => setStory(data.data));
        }
    }, [user, story]);

    const size = {
            width: Size === "sm" ? 24 : Size === "md" ? 40 : Size === "lg" ? 56 : Size === "xl" ? 70 : 56,
            height: Size === "sm" ? 24 : Size === "md" ? 40 : Size === "lg" ? 56 : Size === "xl" ? 70 : 56,
        };


    // const memoStory = useMemo(() => {
    //     return {
    //         story: story && story,
    //         openFun: setOpen,
    //         name: Name && Name,
    //     };
    // }, [story, setOpen, Name]);
    // console.log("open======================", open);
    console.log("story+_+_+_+_+_+_+_+_+_+_+_+", story);

    // const storyOpenHandler = (callback: string) => {
    //     story?.map((data) => {
    //         return data?.STORY?.flat(1).filter((doc) => {
    //             if (doc._id === callback) {
    //                 return setActiveStory(doc);
    //             }
    //         });
    //     });

    //     console.log("activeStory", activeStory);
    // };
  
    // open.open && StoriesOpenHandler();
    return (
        <div className=" ">
            {statusSlide && <StoryViewComponent setOpen={setOpen} Name={Name} size={size} />}
            {!statusSlide && (
                <div
                    onClick={() => {
                        if (storyview) {
                            setOpen((pre) => ({
                                ...pre,
                                open: true,
                            }));
                        }
                    }}>
                    {<Avatar alt={alt} src={Profil_Url ? Profil_Url : user?.url} sx={size} />}
                </div>
            )}

            <div>{open?.open && <StoriesOpenHandler />}</div>
        </div>
    );
};
// const MyMemo = memo(StoryProfile);
export default StoryProfile;


