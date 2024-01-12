import { Container } from "@mui/material";
import React from "react";
import StoryProfile from "../Story/StoryProfile";
import { RiHome2Fill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdCreateNewFolder } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SidebarLayout: React.FC = () => {
    const Navigation = useNavigate();

    
    return (
        <div className="overflow-y-scroll fixed w-[20%] h-full">
            <Container>
                {SideData?.map((data) => {
                    return (
                        <div
                            key={data?.id}
                            className="flex flex-row "
                            onClick={() =>
                                Navigation(`${data?.onclickUri}`)
                            }>
                            <span className=" cursor-pointer text-[25px] pr-3 pt-6">
                                {data?.icon}
                            </span>
                            <span className=" cursor-pointer text-[18px] pt-6">
                                {data?.label}
                            </span>
                        </div>
                    );
                })}
            </Container>
        </div>
    );
};

export default SidebarLayout;

const SideData = [
    {
        id: 1323,
        label: "Home",
        icon: <RiHome2Fill />,
        onclickUri: "/",
    },
    {
        id: 654,
        label: "Search",
        icon: <IoIosSearch />,
        onclickUri: "/search",
    },
    {
        id: 98798,
        label: "Explore",
        icon: <MdOutlineExplore />,
        onclickUri: "/",
    },
    {
        id: 5465,
        label: "Reels",
        icon: <BiSolidMoviePlay />,
        onclickUri: "/reels",
    },
    {
        id: 368936,
        label: "Messages",
        icon: <FaFacebookMessenger />,
        onclickUri: "/chat",
    },
    {
        id: 7596,
        label: "Notifications",
        icon: <IoNotifications />,
        onclickUri: "/notification",
    },
    {
        id: 741326,
        label: "Create",
        icon: <MdCreateNewFolder />,
        onclickUri: "/",
    },
    {
        id: 983546,
        label: "Profile",
        icon: <StoryProfile uid={''} Size="sm" storyview={false}  />,
        onclickUri: "/profile",
    },
];
