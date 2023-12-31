import React, { ReactNode, useEffect } from "react";
import { auth } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/userSlice";
import Cookies from "universal-cookie";
import SidebarLayout from "../../components/SaidBar/SidebarLayout";
import SuggestedRoot from "../../components/SuggestedList/SuggestedRoot";
import { useWindowSize } from "@react-hook/window-size";

type PrivetRouteProps = {
    children?: ReactNode;
};
const PrivetRoute: React.FC<PrivetRouteProps> = (Props) => {
    const [width] = useWindowSize();
    
    const cookies = new Cookies(null, { path: "/" });
    const { user } = useSelector((state) => state);

    const Dispatch = useDispatch();
    const navigate = useNavigate();
    const observerUser = async () => {
        try {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const uid = user.uid;
                    Dispatch(setUser(uid));
                    cookies.set("uid", user.uid);
                    // console.log("uid", uid);
                    localStorage.setItem("uid", uid);
                } else {
                    localStorage.clear();
                    navigate("/authentication/logIn");
                }
            });
        } catch (err) {
            localStorage.clear();
            navigate("/authentication/logIn");
        }

        // ...
    };
    useEffect(() => {
        if (!user?.user) {
            observerUser();
        }
    }, []);

    observerUser();

    if (localStorage.getItem("uid")) {
        return (
            <>
                {width > 412 ? (
                    <div className="flex flex-row ">
                        <div className="w-[20%] ">
                            <SidebarLayout />
                        </div>
                        <span className="w-[50%]">
                            {" "}
                            {Props.children}
                        </span>
                        <div className="w-[30%]">
                            <SuggestedRoot />
                        </div>
                    </div>
                ) : (
                    <>{Props.children}</>
                )}
            </>
        );
    } else {
        <Navigate to={"/authentication/logIn"} />;
    }
};

export default PrivetRoute;
