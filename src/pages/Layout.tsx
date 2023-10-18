import { Container } from "@mui/material";
import Header from "../components/Header/Header";
import Storys from "../components/Storys";
import Footer from "../components/Footer";
import Feed from "../components/Main/Feed";

const Layout = () => {
	return (
		<Container>
			<div className="flex flex-col h-[100vh] justify-between">
				<div className="">
					<Header />
					<Storys />
                    <Feed/>

				</div>
				<Footer />
			</div>
		</Container>
	);
};

export default Layout;
