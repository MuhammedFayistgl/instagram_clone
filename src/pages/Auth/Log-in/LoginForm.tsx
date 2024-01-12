import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Button, Input } from "rsuite";
import { auth } from "../../../config/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { Store } from "react-notifications-component";
import swal from "sweetalert";
import Cookies from "universal-cookie";

type FormDataType = {
    email: string;
    Password: string;
};
const LoginForm = () => {
    const navigate = useNavigate();
    const Dispatch = useDispatch();
    const cookies = new Cookies(null, { path: "/" });

    const [individualData, setindivdualData] = useState<FormDataType>({email:'',Password:''});

    const submitHandler = async () => {
        const { Password, email } = individualData;
        if (!email || !Password) {
            Store.addNotification({
                type: "warning",
                title: "Oops !",
                message: "please fill email or password",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: [
                    "animate__animated",
                    "animate__fadeOut",
                ],
            });
        } else {
            await signInWithEmailAndPassword(auth, email, Password)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    const token = userCredential.user.refreshToken;
                    cookies.set("token", token);
                    cookies.set("uid", user.uid);
                    Dispatch(setUser(user));
                    swal({
                        icon: "success",
                        text: "Login Succuss fully",
                    });
                    navigate("/");
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    Store.addNotification({
                        type: "danger",
                        title: errorCode,
                        message: errorMessage,
                        insert: "top",
                        container: "top-right",
                        animationIn: [
                            "animate__animated",
                            "animate__fadeIn",
                        ],
                        animationOut: [
                            "animate__animated",
                            "animate__fadeOut",
                        ],
                    });

                    // ..
                });
        }
    };

    return (
        <>
            <div className="input-box">
                <Input
                    onChange={(data) =>
                        setindivdualData((pre) => {
                            return { ...pre, email: data };
                        })
                    }
                    size="md"
                    name="email"
                    placeholder="email"
                />
            </div>
            <div className="input-box">
                <Input
                    onChange={(data) =>
                        setindivdualData((pre) => {
                            return { ...pre, Password: data };
                        })
                    }
                    size="md"
                    name="Password"
                    placeholder="Password"
                />
            </div>
            <span className="button-box">
                <Button
                    onClick={submitHandler}
                    appearance="primary"
                    active
                    block>
                    Log in
                </Button>
            </span>
        </>
    );
};

export default LoginForm;
