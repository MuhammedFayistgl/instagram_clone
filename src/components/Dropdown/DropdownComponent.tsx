import React from "react";
import { BiSolidHide } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdFileDownload, MdReport } from "react-icons/md";
import { SlUserFollow } from "react-icons/sl";
import { JSX } from "react/jsx-runtime";
import { Dropdown } from "rsuite";
import { LiaTvSolid } from "react-icons/lia";


type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    renderToggleContent: React.ReactNode;
};
const DropdownComponent = ({ renderToggleContent }: Props) => {
    const renderButton = (
        props: JSX.IntrinsicAttributes &
            React.ClassAttributes<HTMLButtonElement> &
            React.ButtonHTMLAttributes<HTMLButtonElement>,
        ref: React.LegacyRef<HTMLButtonElement> | undefined
    ) => {
        return (
            <button {...props} ref={ref}>
                {renderToggleContent}
            </button>
        );
    };
    return (
        <>
            <Dropdown
                renderToggle={renderButton}
                placement="bottomEnd">
                {DropdownData &&
                    DropdownData.map((itm) => {
                        return (
                            <Dropdown.Item key={itm?.id}>
                                <div className="flex items-center gap-2 ">
                                    <span className="text-[20px]">
                                        {itm?.icon}
                                    </span>
                                    <span className="text-[18px]">
                                        {itm?.title}
                                    </span>
                                </div>
                            </Dropdown.Item>
                        );
                    })}
            </Dropdown>
        </>
    );
};

export default DropdownComponent;

const DropdownData = [
    { id: 212, title: "     Add to favorites", icon: <FaRegStar /> },
    { id: 122, title: "      Unfollow", icon: <SlUserFollow /> },
    { id: 142, title: "      Download", icon: <MdFileDownload /> },
    { id: 152, title: "       Preview", icon: <LiaTvSolid /> },
    { id: 512, title: "       Hide", icon: <BiSolidHide /> },
    { id: 272, title: "     About", icon: <FcAbout /> },
    { id: 125, title: "     Report", icon: <MdReport className='text-red-500' /> },
];
