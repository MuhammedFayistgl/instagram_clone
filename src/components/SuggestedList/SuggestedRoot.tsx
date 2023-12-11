import { Container } from "@mui/material";
import FollowListLayout from "../FollowList/FollowListLayout";

const SuggestedRoot = () => {
    const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className="overflow-y-scroll fixed w-[30%] h-full">
            <Container>
                <div>
                    {dummy.map(() => (
                        <FollowListLayout />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default SuggestedRoot;
