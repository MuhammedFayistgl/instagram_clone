import { memo, useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { getAxiosinstance } from "../../utils/getAxiosinstance";
import { AllStoryDataTypeClient } from "../../types/Story/StoryType";
import { ProfilePropsType, RootState } from "../../types/Type";
import StoryViewComponent from "./StoryViewComponent";
import StoriesOpenHandler from "./StoriesOpenHandler";
import { setShowStory } from "../../redux/StorySlice";
import { useDispatch, useSelector } from "react-redux";

const StoryProfile = ({ Profil_Url, alt, Size, storyview, Name, statusSlide, uid }: ProfilePropsType) => {
    const [story, setStory] = useState<AllStoryDataTypeClient[]>();
    const { user } = useSelector((state: RootState) => state.userDataSlice.Details);
    const [loadingID, setLoadingID] = useState<string>();
    const Dispatch = useDispatch();

    const activeStoryFetch = async () => {
        
        if (loadingID) {
            try {
                getAxiosinstance
                    .post("/instagram-random-story-only-status-with-id", { id: loadingID })
                    .then((data) => {
                        console.log("data==", data.data);

                        Dispatch(setShowStory([data?.data[0]]));
                    })
                    .catch((err) => console.log(err));
            } catch (error) {
                console.log(error);
            }
        }
    };
    useEffect(() => {
        if (!story) {
            getAxiosinstance("/instagram-random-story").then((data) => setStory(data.data));
        }
    }, [ story, statusSlide]);

    const size = {
        width: Size === "sm" ? 24 : Size === "md" ? 40 : Size === "lg" ? 56 : Size === "xl" ? 70 : 56,
        height: Size === "sm" ? 24 : Size === "md" ? 40 : Size === "lg" ? 56 : Size === "xl" ? 70 : 56,
    };

    return (
        <div className=" ">
            {statusSlide && <StoryViewComponent Name={Name} size={size} />}
            {!statusSlide && (
                <div
                    onClick={() => {
                        if (storyview && uid) {
                            setLoadingID(uid), activeStoryFetch();
                        }
                    }}>
                    {<Avatar alt={alt} src={Profil_Url ? Profil_Url : user?.url} sx={size} />}
                </div>
            )}

            <div>{<StoriesOpenHandler />}</div>
        </div>
    );
};
const StoriesProfileMemo = memo(StoryProfile)
export default StoriesProfileMemo

