import { BsArrowLeft } from "react-icons/bs";
import { FcVideoCall } from "react-icons/fc";
import { IoCallOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import StoriesProfileMemo from "../../components/Story/StoryProfile";
import UserName from "../../components/newComp/UserName/UserName";
import Sender from "../Chat/Sender/Sender";
import Receiver from "../Chat/Receiver/Receiver";
import Textarea from "./Textarea";

const HeaderIndividualChat = () => {
    const location = useLocation();
    const { state } = location;
    window.localStorage.setItem(state.uid, state.uid);
    const Navigate = useNavigate();
    return (
        <div className="flex flex-col justify-between items-center relative ">
            <div className="text-lg font-mono fixed   w-full md:w-[42%] bg-gray-700   inherit z-50 pt-2  px-3 flex justify-between items-center">
                <span className="flex w-full justify-between ">
                    <div className="flex flex-row gap-3">
                        <BsArrowLeft className=" text-2xl cursor-pointer" onClick={() => Navigate(-1)} />
                        <StoriesProfileMemo uid={state?.uid} Profil_Url={state?.url} storyview Size="sm" />
                        <div className="flex flex-col h-12 cursor-pointer">
                            <UserName userNameIs={state?.USER_NAME} />
                            <span className="text-sm text-gray-500 leading-[1]">active yesterday</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-5">
                        <IoCallOutline className=" text-2xl cursor-pointer" />
                        <FcVideoCall className=" text-2xl cursor-pointer" />
                    </div>
                </span>
            </div>
            <div className="fixed  h-[100%]  w-full md:w-[42%]" >
                <span className="pt-[12%] flex flex-col bg-green-200 h-[90%]  overflow-scroll ">
                    <span className="flex justify-center text-center my-2">
                        <span className=" bg-slate-600 px-2 rounded-sm"> Today</span>
                    </span>
                    <Sender />
                    <Receiver />

                </span>
                <div  >
                    <Textarea />
                </div>
            </div>
        </div>
    );
};

export default HeaderIndividualChat;
