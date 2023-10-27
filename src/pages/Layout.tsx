import { Container } from "@mui/material";
import Header from "../components/Header/Header";
import Storys from "../components/Storys";
import Footer from "../components/Footer/Footer";
import Feed from "../components/Main/Feed";
import { HashRouter, Route, Routes } from "react-router-dom";
import ChatLayout from "./Chat/ChatLayout";
import MyProfileLayout from "./MyProfile/MyProfileLayout";
import NotiLayout from "./Notification/NotiLayout";
import ReelsLayout from "./Reels/ReelsLayout";
import SearchLayout from "./Search/SearchLayout";


const Layout = () => {
	return (
		<HashRouter>


			<>
				<div className="flex flex-col h-[100vh] justify-between">
					<Routes>
						<Route path="/chat" element={<ChatLayout />} />

					</Routes>
					<Routes>
						<Route path="/" element={
							<>
								<Container className="">
									<Header />
									<Storys />
									<Feed />
								</Container>
							</>

						} />


						<Route path="/profile" element={
							<>
								<MyProfileLayout />

							</>

						} />
						<Route path="/notification" element={
							<>

								<NotiLayout />

							</>
						} />
						<Route path="/reels" element={
							<>

								<ReelsLayout />

							</>
						} />
						<Route path="/search" element={
							<>

								<SearchLayout />

							</>
						} />

					</Routes>
					<Footer />
				</div>
			</>
		</HashRouter>
	);
};

export default Layout;
