import { useEffect, useState } from "react";
import { getAxiosinstance } from "../../utils/getAxiosinstance";

const StoriesOpenHandler = () => {
    const [StoriesData, setStoriesData] = useState();
    useEffect(() => {
        getAxiosinstance.get("/instagram-user").then((data) => {
            // data?.data?.map((data) =>
            //     data?.STORY?.flat(1).filter((doc) => {
            //         if (doc._id === open.dataID) {
            //             return setStoriesData(doc);
            //         }
            //     })
            // );
            setStoriesData(data.data);
        });
    }, []);

    console.log(StoriesData);
    return <>{"console.log(StoriesData)"}</>;
    // return (
    //     <>
    //         <Dialog
    //             open={open?.open}
    //             fullScreen
    //             onBlur={() =>
    //                 setOpen((pre) => ({
    //                     ...pre,
    //                     open: false,
    //                 }))
    //             }>
    //             <div className="relative">
    //                 <Stories
    //                     stories={StoriesData && StoriesData}
    //                     defaultInterval={1500}
    //                     width={"100%"}
    //                     height={"100vh"}
    //                     onAllStoriesEnd={(d: unknown) => {
    //                         setOpen((pre) => ({
    //                             ...pre,
    //                             open: false,
    //                         })),
    //                             console.log("all story end", d);
    //                     }}
    //                     onStoryStart={(d: unknown) => {
    //                         console.log("start story", d);
    //                     }}
    //                     onStoryEnd={(d: unknown) => {
    //                         console.log("end == story", d);
    //                     }}
    //                     onNext={() => {
    //                         console.log("Next == story");
    //                     }}
    //                     onPrevious={(d: unknown) => {
    //                         console.log("On previous story", d);
    //                     }}
    //                     preventDefault={true}
    //                 />
    //             </div>
    //         </Dialog>
    //     </>
    // );
};
export default StoriesOpenHandler