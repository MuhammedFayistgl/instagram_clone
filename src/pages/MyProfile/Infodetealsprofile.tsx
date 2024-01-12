import { useSelector } from "react-redux";
import { RootState } from "../../types/Type";

const Infodetealsprofile = () => {
    const { onFeeds } = useSelector((state: RootState) => state.userDataSlice.Details);
    const { user } = useSelector((state: RootState) => state.userDataSlice.Details);
    return (
        <>
            <div className="flex gap-7 ">
                <span className="text-center">
                    {onFeeds.length}
                    <div>Post</div>
                </span>
                <span className="text-center">
                    {user?.Followers}
                    <div>Followers</div>
                </span>
                <span className="text-center">
                    {user?.Following}
                    <div>Following</div>
                </span>
            </div>
        </>
    );
};

export default Infodetealsprofile;
