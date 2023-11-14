
import { LuSettings } from "react-icons/lu";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import Dropdown from "./Dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/ThemeSlice";
import { RootState } from "../../types/Type";
import { Link } from "react-router-dom";
import UplodeButton from "../Uplodebutton/UplodeButton";



const Header = () => {

	const value = useSelector((state: RootState) => state.theme.value)
	const Dispatch = useDispatch()

	return (
		<div className="flex items-center justify-evenly sticky top-0">
			<UplodeButton />
			<Dropdown />
			<Link to={'/settings'}><LuSettings  className={"text-2xl"} /></Link>
			

			{value  ?
				<span onClick={() => Dispatch(setTheme())}>
					<MdOutlineLightMode className={"text-2xl"} />
				</span>
				:
				<span onClick={() => Dispatch(setTheme())}>
					<MdOutlineDarkMode
						className={"text-2xl"} />
				</span>
			}
			<Link to={'/chat'}>
				<RiMessengerFill className={"text-2xl"} />
			</Link>
		</div>
	);
};

export default Header;
