import { lazy } from "react";
import { HashRouter, Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";

import PublicRoute from "./Public-Route/PublicRoute";
import PrivetRoute from "./Privet-Route/PrivetRoute";

import AuthLayouts from "./Auth/AuthLayouts";
import Login from "./Auth/Log-in/LogIn";
import SignUp from "./Auth/Sign-up/SignUp";
import SettingLayout from "./settings/SettingLayout";


const ChatLayout = lazy(() => import("./Chat/ChatLayout"));
const MyProfileLayout = lazy(
    () => import("./MyProfile/MyProfileLayout")
);
const NotiLayout = lazy(() => import("./Notification/NotiLayout"));
const ReelsLayout = lazy(() => import("./Reels/ReelsLayout"));
const SearchLayout = lazy(() => import("./Search/SearchLayout"));
const IndividualChatLayout = lazy(
    () => import("./IndividualChat/IndividualChatLayout")
);
const HomeLayout = lazy(() => import("./Home/HomeLayout"));

const Layout = () => {
    return (
        <HashRouter>
            
            <>
                <div className="flex flex-col  justify-between">
                        <SlideRoutes>
                            <Route
                                path="/chat"
                                element={
                                    <PrivetRoute>
                                        <ChatLayout />
                                    </PrivetRoute>
                                }
                            />
                            <Route
                                path="/authentication"
                                element={<AuthLayouts />}>
                                <Route
                                    path="logIn"
                                    element={
                                        <PublicRoute>
                                            <Login />
                                        </PublicRoute>
                                    }
                                />
                                <Route
                                    path="signUp"
                                    element={
                                        <PublicRoute>
                                            <SignUp />
                                        </PublicRoute>
                                    }
                                />
                            </Route>
                            <Route
                                path="/chat/:user_id"
                                element={
                                    <PrivetRoute>
                                        <IndividualChatLayout />
                                    </PrivetRoute>
                                }
                            />
                            <Route
                                path="/"
                                element={
                                    <PrivetRoute>
                                        <HomeLayout />
                                    </PrivetRoute>
                                }
                            />
                            <Route
                                path="/profile"
                                element={
                                    <PrivetRoute>
                                        <MyProfileLayout />
                                    </PrivetRoute>
                                }
                            />
                            <Route
                                path="/notification"
                                element={
                                    <PrivetRoute>
                                        <NotiLayout />
                                    </PrivetRoute>
                                }
                            />
                            <Route
                                path="/reels"
                                element={
                                    <PrivetRoute>
                                        <ReelsLayout />
                                    </PrivetRoute>
                                }
                            />
                            <Route
                                path="/search"
                                element={
                                    <PrivetRoute>
                                        <SearchLayout />
                                    </PrivetRoute>
                                }
                            />
                            <Route
                                path="/settings"
                                element={
                                    <PrivetRoute>
                                        <SettingLayout />
                                    </PrivetRoute>
                                }
                            />
                        </SlideRoutes>
                </div>
            </>
        </HashRouter>
    );
};

export default Layout;
