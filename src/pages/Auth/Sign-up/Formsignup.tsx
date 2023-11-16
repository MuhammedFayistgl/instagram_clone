import { useState } from "react";
import { Button, Input } from "rsuite";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { useNavigate } from "react-router-dom";
import { Store } from "react-notifications-component";
import swal from "sweetalert";

import Cookies from "universal-cookie";
import { getAxiosinstance } from "../../../utils/getAxiosinstance";
type FormDataType = {
    email?: string;
    UserName?: string;
    Password?: string;
};
const Formsignup = () => {
    const navigate = useNavigate();
    const cookies = new Cookies(null, { path: "/" });
    const [individualData, setindivdualData] = useState<FormDataType>(
        {}
    );

    const submitHandler = async () => {
        const { Password, email, UserName } = individualData;
        if (!email || !Password || !UserName) {
            Store.addNotification({
                type: "warning",
                title: "Oops !",
                message: "please fill all field",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: [
                    "animate__animated",
                    "animate__fadeOut",
                ],
            });
        } else {
            await createUserWithEmailAndPassword(
                auth,
                email,
                Password
            )
                .then((userCredential) => {
                    // Signed up
                    const uid = userCredential.user.uid;
                    const token = userCredential.user.refreshToken;
                    getAxiosinstance.post(
                        "/create-User-with-userName",
                        {
                            UserName: UserName,
                            uid: uid,
                        }
                    );
                    cookies.set("token", token);
                    cookies.set("uid",uid);
                    swal({
                        icon: "success",
                        text: "SingUp Succuss fully",
                    });

                    navigate("/");
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
        <div>
            <div className="input-box">
                <Input
                    onChange={(data) =>
                        setindivdualData((pre) => {
                            return { ...pre, email: data };
                        })
                    }
                    name="email"
                    size="md"
                    placeholder="email"
                />
            </div>
            <div className="input-box">
                <Input
                    onChange={(data) =>
                        setindivdualData((pre) => {
                            return { ...pre, UserName: data };
                        })
                    }
                    size="md"
                    placeholder="User name"
                    name="UserName"
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
                    placeholder="Password"
                    name="Password"
                />
            </div>
            <span className="button-box">
                <Button
                    onClick={submitHandler}
                    appearance="primary"
                    active
                    block>
                    Sign up
                </Button>
            </span>
        </div>
    );
};

export default Formsignup;
