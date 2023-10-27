import React from 'react'
import Profile from '../../components/Profile/Profile'
import { AiOutlineCamera } from 'react-icons/ai'
import { Badge, Container } from 'rsuite'

const Chat = () => {
    return (
        <div className='flex justify-center '>
            <Container>

                <div className='flex justify-around pb-5'>
                    <span className='flex'>

                        <span className='pr-3'><Profile Size='md' Profil_Url='https://picsum.photos/500/700' alt='profilimg' /></span>
                        <span >
                            <div>muhammed__k</div>
                            <div><span>4+ new message </span> <span className=''>16 h</span></div>
                        </span>
                    </span>
                    <Badge />
                    <span className='text-2xl'><AiOutlineCamera /></span>
                </div>

            </Container>
        </div>
    )
}

export default Chat