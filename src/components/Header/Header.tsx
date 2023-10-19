import { BiMessageSquareAdd } from "react-icons/bi";
import { LuSettings } from "react-icons/lu";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import Dropdown from "./Dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/ThemeSlice";
import { RootState } from "../../types/Type";


const Header = () => {

	const  value  = useSelector((state:RootState) => state.theme.value)
	const Dispatch = useDispatch()

	return (
		<div className="flex items-center justify-evenly">
			<BiMessageSquareAdd className={"text-2xl tex"} />
			<Dropdown />
			<LuSettings className={"text-2xl"} />

			{value === 'dark' ?
				<span onClick={() => Dispatch(setTheme())}>
					<MdOutlineLightMode className={"text-2xl"} />
				</span>
				:
				<span onClick={() => Dispatch(setTheme())}>
					<MdOutlineDarkMode
						className={"text-2xl"} />
				</span>
			}




			<RiMessengerFill className={"text-2xl"} />
		</div>
	);
};

export default Header;
