import StorysProfile from "../../components/Story/StoryProfile";

type InfoprofileProps = {
    userName: string |undefined;
    description:string |undefined;
};

const Infoprofile = ({ userName ,description }: InfoprofileProps) => {
    return (
        <>
            <div>
                <div className="pb-6 ">
                    <StorysProfile
                        storyview
                        Profil_Url="https://picsum.photos/500/700"
                        Size="xl"
                    />
                </div>

                <div>{userName} </div>
                <div>{description}</div>
            </div>
        </>
    );
};

export default Infoprofile;
