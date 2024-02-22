import { LuSettings } from "react-icons/lu";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import Dropdown from "./Dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/ThemeSlice";
import { RootState } from "../../types/Type";
import { Link } from "react-router-dom";
import UploadButton from "../Uplodebutton/UplodeButton";
import { memo } from "react";

const Header = () => {
    const value = useSelector((state: RootState) => state.theme.value);
    const Dispatch = useDispatch();

    return (
        <div className="flex items-center justify-evenly  top-1">
            <UploadButton />

            <Dropdown />
            <Link to={"/settings"}>
                <LuSettings className={"text-3xl"} />
            </Link>

            {value ? (
                <span onClick={() => Dispatch(setTheme())}>
                    <MdOutlineLightMode className={"text-3xl"} />
                </span>
            ) : (
                <span onClick={() => Dispatch(setTheme())}>
                    <MdOutlineDarkMode className={"text-3xl"} />
                </span>
            )}
            <Link to={"/chat"}>
                <RiMessengerFill className={"text-3xl"} />
            </Link>
        </div>
    );
};
const HomeHeder = memo(Header);
export default HomeHeder;
