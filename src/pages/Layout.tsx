import { Container } from "@mui/material";
import Header from "../components/Header/Header";
import Storys from "../components/Storys";
import Footer from "../components/Footer";
import Feed from "../components/Main/Feed";
import { HashRouter, Route, Routes } from "react-router-dom";
import ChatLayout from "./Chat/ChatLayout";


const Layout = () => {
	return (
		<HashRouter>


			<Container>
				<div className="flex flex-col h-[100vh] justify-between">
					<Routes>
						<Route  path="/" element={
							<>
								<div className="">
									<Header />
									<Storys />
									<Feed />
								</div>
								<Footer />
							</>

						} />
						<Route path="/chat" element={<ChatLayout />} />
		
					</Routes>
				</div>
			</Container>
		</HashRouter>
	);
};

export default Layout;
