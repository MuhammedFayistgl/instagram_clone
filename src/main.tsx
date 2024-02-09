import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "rsuite/dist/rsuite.min.css";
import "./index.css";
import { Provider } from "react-redux";
import { Store } from "./redux/store.ts";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={Store}>
        <QueryClientProvider client={queryClient}>
            <App />
           
        </QueryClientProvider>
    </Provider>
);
