import {  useState } from "react";
import { Rate } from "rsuite";

// type likeProps = {
//     targetID: string | undefined;
//     uid: string | undefined;
// };
const ThumbButton = (
    // { targetID,uid }: likeProps
    ) => {
    const [Like, setlike] = useState(0);
    console.log(Like);

    // useEffect(() => {
    //     if (Like === 1) {
    //         getAxiosinstance.post("/instagram-user-like", {
    //             uid:uid,
    //             targetID: targetID,
    //         });
    //     }else{
    //         getAxiosinstance.post("/instagram-user-Unlike", {
    //             uid:uid,
    //             targetID: targetID,
    //         }); 
    //     }
    // }, [Like , uid, targetID]);

    return (
        <span>
            <Rate
                onClick={() =>
                    setlike((num) => (num === 0 ? (num = 1) : 0))
                }
                size="sm"
                max={1}
                color="red"
                value={Like}
                character="❤"
                // onChange={setlike}
            />
        </span>
    );
};

export default ThumbButton;
