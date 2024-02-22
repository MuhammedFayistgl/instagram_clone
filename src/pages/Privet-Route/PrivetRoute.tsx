import React, { ReactNode, useCallback, useEffect } from "react";
import { auth } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/userSlice";
import Cookies from "universal-cookie";


import { RootState } from "../../types/Type";

type PrivetRouteProps = {
    children?: ReactNode;
};

const PrivetRoute: React.FC<PrivetRouteProps> = (props) => {
  

    const { user } = useSelector((state: RootState) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const observerUser = useCallback(async () => {
        const cookies = new Cookies(null, { path: "/" });

        try {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const uid = user.uid;
                    dispatch(setUser(uid));
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
    }, [dispatch, navigate]);

    useEffect(() => {
        if (!user) {
            observerUser();
        }
    }, [user, observerUser]);

    observerUser();

    if (localStorage.getItem("uid")) {
        return <div >{props.children}</div>;
    } else {
        <Navigate to={"/authentication/logIn"} />;
    }
};

export default PrivetRoute;
