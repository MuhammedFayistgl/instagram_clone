
import { AiOutlineCamera } from 'react-icons/ai'
import { Badge, Container } from 'rsuite'
import StorysProfile from '../../components/Story/StoreysProfile'
import { useNavigate } from 'react-router-dom'
import { USER } from '../../Data/Data'

const Chat = () => {
    const Navigate = useNavigate()
    return (
        <div className='flex justify-center '>
            <Container>
                {USER?.map((user) => {
                    return (
                        <div className='flex justify-around pb-5'>
                            <span className='flex'>
                                <span className='pr-3'>
                                    <StorysProfile storyview Size='md' Profil_Url='https://picsum.photos/500/700' alt='profilimg' />
                                </span>
                                <span onClick={() => Navigate(`${user.id}`,{state:user})} >
                                    <div>{user.USER_NAME}</div>
                                    <div><span>4+ new message </span> <span className=''>16 h</span></div>
                                </span>
                            </span>
                            <Badge />
                            <span className='text-2xl'><AiOutlineCamera /></span>
                        </div>
                    )
                })}



            </Container>
        </div>
    )
}

export default Chat