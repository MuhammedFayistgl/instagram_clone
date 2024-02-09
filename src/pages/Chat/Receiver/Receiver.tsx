import { useEffect, useState } from "react";
import socketClient from "../../../config/socket";

const Receiver = () => {
    const [socket, setSocket] = useState(socketClient);
    // const [receivedMsg, setReceivedMsg] = useState([]);

    useEffect(() => {
        if (!socket) setSocket(socketClient);
        // socket.on("reply-message", (data) =>{ if(data)  setReceivedMsg((prev) => [...prev, data])});
    }, [socket]);

    return (
        <>
            return (
            <div className="flex flex-col my-1 mx-3">
                <div className="bg-green-100 items-start rounded-tr-xl rounded-bl-xl flex flex-col max-w-sm">
                    <span style={{ wordWrap: "break-word" }} className="m-2 text-black flex-wrap">
                        {/* {data?.content} */}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus consectetur atque repudiandae maxime facere
                        culpa eum suscipit illo animi, nesciunt excepturi aperiam adipisci optio. Illum repellat molestiae sint eligendi
                        iure!riem20
                    </span>
                    <span className="m-2 bg-green-50 w-fit rounded-xl p-[2px]">
                        <span className="text-cyan-300">
                            √√
                            {/* delved =   text-gray-500 */}
                            {/* seen =   text-cyan-300 */}
                        </span>
                        <span className="text-[11px] text-black pr-2">2:32 pm </span>
                    </span>
                </div>
            </div>
            );
        </>
    );
};

export default Receiver;
//  pl-[58%] pr-[1%]
