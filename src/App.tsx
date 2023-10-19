import { CustomProvider } from "rsuite";
import Layout from "./pages/Layout";
import { useSelector } from "react-redux";

import "./App.css";
import { RootState } from "./types/Type";


function App() {
	const { value } = useSelector((state: RootState) => state.theme)



	return (
		<>
			<CustomProvider theme={`${value}`}>
				<Layout />
			</CustomProvider>
		</>
	);
}

export default App;
