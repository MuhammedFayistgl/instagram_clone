import { Container } from '@mui/material'
import StorysProfile from '../../components/Story/StoreysProfile'
import Footer from '../../components/Footer/Footer'

const NotiLayout = () => {
    return (
        <>
            <Container>
                <div className='text-2xl font-mono mt-3'>Notifications</div>
                <div className='text-sm pt-2 mb-10'>Last 7 Days</div>

                <div>
                    <div className='flex justify-around pb-5'>
                        <span className='flex'>

                            <span className='pr-3'>
                                <StorysProfile storyview Profil_Url='https://picsum.photos/500/700' Size='md' /></span>
                            <span >
                                <div>muhammed__k</div>
                                <div><span>4+ new message </span> <span className=''>16 h</span></div>
                            </span>
                        </span>

                        <span className='text-2xl'>?</span>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default NotiLayout