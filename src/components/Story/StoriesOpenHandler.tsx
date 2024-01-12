import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../redux/store";
import { Dialog } from "@mui/material";
import Stories from "react-insta-stories";
import { setShowStory } from "../../redux/StorySlice";

type RootState = ReturnType<typeof Store.getState>;

const StoriesOpenHandler = () => {
    const Dispatch = useDispatch();
    const { isOpen, value } = useSelector((data: RootState) => data.story);
    return (
        <>
            {isOpen && (
                <Dialog open={isOpen} fullScreen 
                >
                    <div className="relative">
                        <Stories
                            stories={value}
                            defaultInterval={1500}
                            width={"100%"}
                            height={"100vh"}
                            onAllStoriesEnd={() => Dispatch(setShowStory(false))}
                            onStoryStart={() => {}}
                            onStoryEnd={() => {}}
                            onNext={() => {}}
                            onPrevious={() => {}}
                            preventDefault={true}
                        />
                    </div>
                </Dialog>
            )}
        </>
    );
};

export default StoriesOpenHandler;
