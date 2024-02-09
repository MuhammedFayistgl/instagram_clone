import { Input, InputGroup } from "rsuite";
import { FaSmile } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import {  useState } from "react";
import socketClient from "../../config/socket";
import { RootState } from "../../types/Type";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

const Textarea = () => {
    const { user } = useSelector((state: RootState) => state.user);

    const [input, setInput] = useState<string | number>("");
    const location = useLocation();
    const { state } = location;
    const params = useParams();
    const ChangeHandler = (value: string | number) => setInput(value);

    const sendingHandler = () => {
        socketClient.emit("send-message", { senderId: user, receiverId: state?.uid, content: input, roomId: params?.user_id });
    };

    console.log(user);

    return (
        <div className="flex items-center justify-center ">
            <InputGroup inside>
                <InputGroup.Addon>
                    <FaSmile className="text-[30px] cursor-pointer" />
                </InputGroup.Addon>

                <Input onChange={ChangeHandler} placeholder="Message" />
                <InputGroup.Addon>
                    <FaPaperclip className="pr-3 text-[30px] cursor-pointer" /> <FaCamera className="text-[20px] cursor-pointer" />
                </InputGroup.Addon>
            </InputGroup>
            <div className="cursor-pointer">
                <IoIosSend onClick={sendingHandler} className="text-4xl " />
            </div>
        </div>
    );
};

export default Textarea;
