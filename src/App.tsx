import { CustomProvider } from "rsuite";
import Layout from "./pages/Layout";
import { useSelector } from "react-redux";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "./App.css";
import { RootState } from "./types/Type";
import { Suspense } from "react";
import axios from "axios";

function App() {
    const { value } = useSelector((state: RootState) => state.theme);
    axios.defaults.withCredentials = true;

    return (
        <>
            <CustomProvider theme={value ? "dark" : "light"}>
                <Suspense fallback={"loding.."}>
                    <ReactNotifications />
                    <Layout />
                </Suspense>
            </CustomProvider>
        </>
    );
}

export default App;
