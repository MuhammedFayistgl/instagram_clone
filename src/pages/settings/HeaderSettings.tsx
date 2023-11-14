import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const HeaderSettings = () => {
    const Navigate = useNavigate()
    return (
        <>
            {" "}
            <div>
                <div className="flex flex-row justify-between  pt-3">
                    <span className="text-lg font-mono ">
                        <span className="flex items-center gap-2">
                            <BsArrowLeft
                                className=" text-2xl cursor-pointer"
                                onClick={() => Navigate(-1)}
                            />
                           <span className="text-2xl"> Settings</span>
                            {/* <Namebutton Username="fayi_elm" /> */}
                        </span>
                    </span>
                    {/* <div className="flex items-center gap-2">
                        <span className="mr-3 text-2xl cursor-pointer">
                            <UplodeButton />
                        </span>
                        <span className="text-2xl cursor-pointer">
                            {" "}
                            <AiOutlineBars />
                        </span>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default HeaderSettings;
