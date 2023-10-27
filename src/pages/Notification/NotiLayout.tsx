import { Container } from '@mui/material'
import React from 'react'
import Profile from '../../components/Profile/Profile'

const NotiLayout = () => {
    return (
        <Container>

            <div className='text-2xl font-mono mt-3'>Notifications</div>
            <div className='text-sm pt-2 mb-10'>Last 7 Days</div>

            <div>
                <div className='flex justify-around pb-5'>
                    <span className='flex'>

                        <span className='pr-3'>
                            <Profile Size='md' Profil_Url='https://picsum.photos/500/700' alt='profilimg' /></span>
                        <span >
                            <div>muhammed__k</div>
                            <div><span>4+ new message </span> <span className=''>16 h</span></div>
                        </span>
                    </span>

                    <span className='text-2xl'>?</span>
                </div>
            </div>
        </Container>
    )
}

export default NotiLayout