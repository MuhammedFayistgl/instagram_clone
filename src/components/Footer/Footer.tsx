import LayoutFooter from "./LayoutFooter";
import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import StorysProfile from "../Story/StoryProfile";
import { useSelector } from "react-redux";
import { RootState } from "../../types/Type";

const Footer = () => {
    const { user } = useSelector((state: RootState) => state.userDataSlice.Details);
    const Navigation = useNavigate();
    return (
        <LayoutFooter>
            <div className="w-[90%] right-0 left-0 fixed bottom-0 flex justify-around">
                <GrHomeRounded onClick={() => Navigation("/")} className="  cursor-pointer" />
                <AiOutlineSearch onClick={() => Navigation("/search")} className=" text-2xl cursor-pointer" />
                <AiOutlinePlaySquare className=" text-2xl cursor-pointer" onClick={() => Navigation("/reels")} />
                <FcLike className=" text-2xl cursor-pointer" onClick={() => Navigation("/notification")} />
                <div onClick={() => Navigation("/profile")}>
                    <StorysProfile uid={user?.uid} Profil_Url={user?.url} Size="sm" storyview={false} />
                </div>
            </div>
        </LayoutFooter>
    );
};

export default Footer;
