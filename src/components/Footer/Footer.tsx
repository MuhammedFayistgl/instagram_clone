import LayoutFooter from "./LayoutFooter"
import { GrHomeRounded } from 'react-icons/gr'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlinePlaySquare } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
import Profile from "../Profile/Profile"
import { useNavigate } from "react-router-dom"


const Footer = () => {
  const Navigation = useNavigate()
  return (
    <LayoutFooter>
      <div className=" fixed flex justify-between left-5 right-0  bottom-0  w-[90%] " >
        <GrHomeRounded
          onClick={() => Navigation('/')}
          className=' text-2xl cursor-pointer' />
        <AiOutlineSearch 
        onClick={() => Navigation('/search')}
        className=' text-2xl cursor-pointer'
        />
        <AiOutlinePlaySquare className=' text-2xl cursor-pointer'
          onClick={() => Navigation('/reels')} />
        <FcLike className=' text-2xl cursor-pointer'
          onClick={() => Navigation('/notification')} />
        <span onClick={() => Navigation('/profile')}>
          <Profile Profil_Url="https://picsum.photos/500/700" Size="sm" />
        </span>

      </div>
    </LayoutFooter>
  )
}

export default Footer