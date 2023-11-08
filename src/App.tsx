import { CustomProvider } from "rsuite";
import Layout from "./pages/Layout";
import { useSelector } from "react-redux";

import "./App.css";
import { RootState } from "./types/Type";
import { Suspense } from "react";


function App() {
	const { value } = useSelector((state: RootState) => state.theme)

	return (
		<>
			<CustomProvider theme={value ? 'dark' : 'light'}>
				<Suspense fallback={'loding..'}>
					<Layout />
				</Suspense>
			</CustomProvider>
		</>
	);
}

export default App;
