import { CustomProvider } from "rsuite";
import Layout from "./pages/Layout";
import { useDispatch, useSelector } from "react-redux";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "./App.css";
import { RootState } from "./types/Type";
import { Suspense } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { getData } from "./utils/getData";
import { getUserFeeds, setUserData } from "./redux/userDataSlice";

function App() {
    const Dispatch = useDispatch();
    const { value } = useSelector((state: RootState) => state.theme);
    axios.defaults.withCredentials = true;

    useQuery("get-user-Data", () =>
        getData("/instagram-user").then((res) => {
            Dispatch(setUserData(res.data[0]));
        })
    );
    useQuery("get-user-uploaded-feeds-and-author-data", () =>
        getData("/instagram-user-on-feeds").then((res) => {
            Dispatch(getUserFeeds(res.data));
        })
    );
    return (
        <>
            <CustomProvider theme={value ? "dark" : "light"}>
                <Suspense fallback={"loading..."}>
                    <ReactNotifications />
                    <Layout />
                </Suspense>
            </CustomProvider>
        </>
    );
}

export default App;
