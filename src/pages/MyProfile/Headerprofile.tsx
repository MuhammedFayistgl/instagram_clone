import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import UplodeButton from "../../components/Uplodebutton/UplodeButton";
import UserName from "../../components/newComp/UserName/UserName";
import { useSelector } from "react-redux";
import { RootState } from "../../types/Type";

const Headerprofile = () => {
    const { user } = useSelector((state: RootState) => state.userDataSlice.Details);
    const Navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-row justify-between  pt-3">
                <span className="text-lg font-mono ">
                    <span className="flex items-center gap-2">
                        <BsArrowLeft className=" text-2xl cursor-pointer" onClick={() => Navigate("/")} />
                        <UserName userNameIs={user?.USER_NAME} />
                    </span>
                </span>
                <div className="flex items-center gap-2">
                    <span className="mr-3 text-2xl cursor-pointer">
                        <UplodeButton />
                    </span>
                    <span className="text-2xl cursor-pointer">
                        <AiOutlineBars />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Headerprofile;
