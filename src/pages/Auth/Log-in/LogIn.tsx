import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = () => {
    return (
        <>
            <div className="content">
                <div className="login-box">
                    <div className="header flex justify-center">
                        <img
                            className="logo"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
                            alt="Instagram"
                        />
                    </div>
                    <div className="form-wrap">
                        <form className="form">
                           <LoginForm/>

                            <a className="forgot" href="">
                                Forgot password?
                            </a>
                        </form>
                    </div>
                </div>
                <div className="login-box">
                    <p className="text">
                        Don't have an account?
                        <Link to={"/authentication/signUp"}>Sign up</Link>
                    </p>
                </div>
                <div className="app flx flex-row">
                    <p>Get the app.</p>
                    <div className="app-img flex">
                        <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8">
                            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/4b70f6fae447.png" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26utm_medium%3Dbadge">
                            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/f06b908907d5.png" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
