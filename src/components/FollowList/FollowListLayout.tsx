import { useSelector } from "react-redux";
import { RootState } from "../../types/Type";
import Follwunfollw from "../Follw&Unfollw/Follwunfollw";
import StoryProfile from "../Story/StoryProfile";
import UserName from "../newComp/UserName/UserName";
import { user } from "../../types/ProfileType";
import { useNavigate } from "react-router-dom";

type FollowUserType = {
    user: user;
};

const FollowListLayout = () => {
    const { value } = useSelector((state: RootState) => state.ChatSlice);
    const Navigate = useNavigate();
    return (
        <>
            {value.map(({ user }: FollowUserType) => {
                return (
                    <>
                        <div key={user?.uid} className="flex  justify-between mt-2">
                            <div className="flex gap-3">
                                <span>
                                    <StoryProfile Profil_Url={user?.url} storyview Size="md" uid={user?.uid} />
                                </span>
                                <span onClick={() => Navigate(`/chat/${user?.uid}`, { state: user })}>
                                    <UserName userNameIs={user?.USER_NAME} />
                                </span>
                            </div>

                            <span>
                                <Follwunfollw />
                            </span>
                        </div>
                    </>
                );
            })}
        </>
    );
};

export default FollowListLayout;
