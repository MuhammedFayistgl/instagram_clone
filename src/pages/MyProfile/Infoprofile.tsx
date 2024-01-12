import { useSelector } from "react-redux";
import StorysProfile from "../../components/Story/StoryProfile";
import UserName from "../../components/newComp/UserName/UserName";
import { RootState } from "../../types/Type";



const Infoprofile = () => {
    const {user } = useSelector((state: RootState) => state.userDataSlice.Details);
    return (
        <>
            <div>
                <div className="pb-6 ">
                    <StorysProfile
                        storyview
                        uid={user?.uid}
                        Size="xl"
                    />
                </div>

                <div><UserName/> </div>
                <div>{user?.description}</div>
            </div>
        </>
    );
};

export default Infoprofile;
