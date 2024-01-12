import { signOut } from "firebase/auth";
import { AiOutlineLogout } from "react-icons/ai";
import { BiAlarm } from "react-icons/bi";
import { FcAbout, FcPrivacy } from "react-icons/fc";
import swal from "sweetalert";
import { auth } from "../../config/firebase";
import { Store } from "react-notifications-component";
const ListSettings = () => {
    // const alert = () => {};
    const List = [
        {
            icon: <AiOutlineLogout className={"text-red-600"} />,
            value: "Log Out",
            onclick: () => {
                swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this imaginary file!",
                    icon: "warning",
        //    buttons: [true],
                    dangerMode: true,
                }).then((willLogOut) => {
                    if (willLogOut) {
                        signOut(auth)
                            .then(() => {
                                swal("Log Out Succuss fully", {
                                    icon: "success",
                                });
                            })
                            .catch(() => {
                                swal("Oops !!", {
                                    icon: "danger",
                                });
                            });
                    }
                });
            },
        },
        {
            icon: <FcPrivacy />,
            value: "Privacy",
            onclick: () => {
                Store.addNotification({
                    title: "Wonderful!",
                    message: "teodosii@react-notifications-component",
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 5000,
                        onScreen: true,
                    },
                });
            },
        },
        { icon: <FcAbout />, value: "About" },
        { icon: <BiAlarm />, value: "alarm" },
        { icon: <BiAlarm />, value: "alarm" },
        { icon: <BiAlarm />, value: "alarm" },
    ];
    return (
        <>
            {List.map((itm) => {
                return (
                    <div className="ml-3">
                        <div onClick={itm?.onclick} className="flex gap-4 items-center">
                            <span className="text-3xl">{itm?.icon}</span>
                            <span className="text-lg">{itm?.value}</span>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default ListSettings;
