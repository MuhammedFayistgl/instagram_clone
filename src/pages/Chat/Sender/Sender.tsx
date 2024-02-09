const Sender = () => {
    return (
        <div className="flex flex-col items-end  mx-3 my-1">
            <div className="  bg-sky-200  rounded-tr-xl  rounded-bl-xl   flex flex-col max-w-sm">
                <span style={{ wordWrap: "break-word" }} className="m-2 text-black flex-wrap">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate cum autem voluptatum, provident quasi voluptatem
                    excepturi delectus officiis rem praesentium obcaecati reiciendis pariatur eligendi culpa eum consequatur minus mollitia
                    dignissimos? Temporibus nisi eius qui officia eum nobis quo velit, ad autem iusto tempora, ut animi explicabo
                    perferendis. Magni, ut fugiat!
                </span>
                <span className="m-2 bg-green-50 w-fit rounded-xl p-[2px]">
                    <span className="text-cyan-300  ">
                        √√
                        {/* delved =   text-gray-500 */}
                        {/* seen =   text-cyan-300 */}
                    </span>
                    <span className="text-[11px] text-black pr-2">2:32 pm </span>
                </span>
            </div>
        </div>
    );
};

export default Sender;
