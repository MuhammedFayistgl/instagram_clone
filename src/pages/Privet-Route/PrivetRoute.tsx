import React, { ReactNode, useEffect } from "react";
import { auth } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/userSlice";
import Cookies from "universal-cookie";

type PrivetRouteProps = {
    children?: ReactNode;
};
const PrivetRoute: React.FC<PrivetRouteProps> = (Props) => {
    const cookies = new Cookies(null, { path: "/" });
    const { user } = useSelector((state) => state);
    console.log("s", user?.user);

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
        return <>{Props.children}</>;
    } else {
        <Navigate to={"/authentication/logIn"} />;
    }
};

export default PrivetRoute;
