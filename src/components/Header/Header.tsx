import { BiMessageSquareAdd } from "react-icons/bi";
import { LuSettings } from "react-icons/lu";
import { MdOutlineDarkMode } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import Dropdown from "./Dropdown/Dropdown";

const Header = () => {
	return (
		<div className="flex items-center justify-evenly">
			<BiMessageSquareAdd className={"text-2xl tex"} />
			<Dropdown />
			<LuSettings className={"text-2xl"} />
			<MdOutlineDarkMode className={"text-2xl"} />
			<RiMessengerFill className={"text-2xl"} />
		</div>
	);
};

export default Header;
