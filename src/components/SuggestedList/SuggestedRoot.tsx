import FollowListLayout from "../FollowList/FollowListLayout";

const SuggestedRoot = () => {
    return (
        <div className="overflow-y-scroll fixed w-[30%] h-full">
            <div>
                <FollowListLayout />
            </div>
        </div>
    );
};

export default SuggestedRoot;
