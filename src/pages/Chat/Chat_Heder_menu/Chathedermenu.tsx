
import { BsArrowLeft } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'
import { AiOutlineVideoCameraAdd } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import Namebutton from '../../../components/Namebutton/Namebutton'
const Chathedermenu = () => {
    const Navigate = useNavigate()
    return (
        <div className='flex flex-row justify-between  pt-3' >
            <span className='text-lg font-mono '>
                <span className='flex items-center gap-2'>
                    <BsArrowLeft className=' text-2xl cursor-pointer' onClick={() => Navigate('/')} />
                    <Namebutton Username='fayi_elm' />

                </span>
            </span>
            <div className='flex items-center gap-2'>
                <span className='mr-3 text-2xl cursor-pointer'><AiOutlineVideoCameraAdd /></span>
                <span className='text-2xl cursor-pointer'> <BiEdit /></span>
            </div>
        </div>
    )
}
export default Chathedermenu