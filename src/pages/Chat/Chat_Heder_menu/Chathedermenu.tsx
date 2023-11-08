import { BiEdit } from 'react-icons/bi'
import { AiOutlineVideoCameraAdd } from 'react-icons/ai'
import Namebutton from '../../../components/Namebutton/Namebutton'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'



const Chathedermenu = () => {
    const Navigate = useNavigate()
    return (
        <div className='flex flex-row justify-between  pt-3' >
            <span className='text-lg font-mono '>
                <span className='flex items-center gap-2'>
                    <BsArrowLeft className=' text-2xl cursor-pointer' onClick={() => Navigate(-1)} />
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