import { AiOutlineCamera } from "react-icons/ai";
import { Badge, Container } from "rsuite";
import StorysProfile from "../../components/Story/StoryProfile";
import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";
import { RootState } from "../../types/Type";

import { user } from "../../types/ProfileType";
import { v4 as uuidv4 } from 'uuid';

type ChatUserType = {
    user: user;
};
const Chat = () => {
    const { value } = useSelector((state: RootState) => state.ChatSlice);
    const Navigate = useNavigate();
  


    return (
        <div className="flex justify-center ">
            <Container>
                {value
                    .filter(({ user }: ChatUserType) => user?.uid == window.localStorage.getItem(user?.uid))
                    .map(({ user }: ChatUserType) => {
                        return (
                            <div key={user?.uid} className="flex justify-around pb-5">
                                <span className="flex">
                                    <span className="pr-3">
                                        <StorysProfile Profil_Url={user?.url} uid={user?.uid} storyview Size="md" alt="profileImg" />
                                    </span>
                                    <span onClick={() => Navigate(`${uuidv4()}`, { state: user })}>
                                        <div>{user.USER_NAME}</div>
                                        <div>
                                            <span>4+ new message </span> <span className="">16 h</span>
                                        </div>
                                    </span>
                                </span>
                                <Badge />
                                <span className="text-2xl">
                                    <AiOutlineCamera />
                                </span>
                            </div>
                        );
                    })}
            </Container>
        </div>
    );
};

export default Chat;
