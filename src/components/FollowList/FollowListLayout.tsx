import Follwunfollw from "../Follw&Unfollw/Follwunfollw";
import StoryProfile from "../Story/StoryProfile";
import UserName from "../newComp/UserName/UserName";

const FollowListLayout = () => {
    return (
        <div className="flex justify-around mt-2">
            <div className="flex gap-3">
                <span>
                    <StoryProfile storyview Size="md" uid={''} />
                </span>
                <span>
                    <UserName userNameIs="dummy"/>
                </span>
            </div>

            <span>
                <Follwunfollw />
            </span>
        </div>
    );
};

export default FollowListLayout;
