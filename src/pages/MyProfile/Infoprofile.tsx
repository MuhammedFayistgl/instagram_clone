import StorysProfile from "../../components/Story/StoryProfile";
import UserName from "../../components/newComp/UserName/UserName";

type InfoprofileProps = {
    description:string |undefined;
};

const Infoprofile = ({description }: InfoprofileProps) => {
    return (
        <>
            <div>
                <div className="pb-6 ">
                    <StorysProfile
                        storyview

                        Size="xl"
                    />
                </div>

                <div><UserName/> </div>
                <div>{description}</div>
            </div>
        </>
    );
};

export default Infoprofile;
