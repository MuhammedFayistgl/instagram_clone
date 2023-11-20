import { useEffect, useState } from "react";
import { Rate } from "rsuite";
import { getAxiosinstance } from "../../../utils/getAxiosinstance";
type likeProps = {
    targetID: string | undefined;
};
const ThumbButton = ({ targetID }: likeProps) => {
    const [Like, setlike] = useState(0);
    console.log(Like);

    useEffect(() => {
        if (Like === 1) {
            getAxiosinstance.post("/instagram-user-like", {
                Like: Like,
                targetID: targetID,
            });
        }else{
            getAxiosinstance.post("/instagram-user-Unlike", {
                Like: Like,
                targetID: targetID,
            }); 
        }
    }, [Like, targetID]);

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
