import { lazy } from "react";
import { HashRouter, Route } from "react-router-dom";
import SlideRoutes from 'react-slide-routes';

const ChatLayout = lazy(() => import("./Chat/ChatLayout"))
const MyProfileLayout = lazy(() => import("./MyProfile/MyProfileLayout"))
const NotiLayout = lazy(() => import("./Notification/NotiLayout"))
const ReelsLayout = lazy(() => import("./Reels/ReelsLayout"))
const SearchLayout = lazy(() => import("./Search/SearchLayout"))
const IndividualChatLayout = lazy(() => import("./IndividualChat/IndividualChatLayout"))
const HomeLayout = lazy(() => import("./Home/HomeLayout"))



const Layout = () => {
	return (
		<HashRouter>
			<>
				<div className="flex flex-col h-[100%] overflow-hidden justify-between">

					<SlideRoutes>
						<Route path="/chat" element={<ChatLayout />} />
						<Route path="/chat/:user_id" element={<IndividualChatLayout />} />
						<Route path="/" element={<HomeLayout />} />
						<Route path="/profile" element={<MyProfileLayout />} />
						<Route path="/notification" element={<NotiLayout />} />
						<Route path="/reels" element={<ReelsLayout />} />
						<Route path="/search" element={<SearchLayout />} />
					</SlideRoutes>
				</div>
			</>
		</HashRouter>
	);
};

export default Layout;
