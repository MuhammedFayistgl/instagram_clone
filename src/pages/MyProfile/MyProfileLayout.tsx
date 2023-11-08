import { Container } from '@mui/material'
import Headerprofile from './Headerprofile'
import Infoprofile from './Infoprofile'
import Custombutton from '../../components/Button/Custombutton'
import Storys from '../../components/Story/StorysProfile'
import Infodetealsprofile from './Infodetealsprofile'
import TabProfile from './Tab/TabProfile'


const MyProfileLayout = () => {

    return (
        <>
            <Container>
                <Headerprofile />
                <div className='flex justify-between pt-8 items-center'>
                    <Infoprofile />
                    <Infodetealsprofile />
                </div>
                <div className='flex  gap-3 mt-2 mb-2' >
                    <Custombutton width={'48%'} value='Edit Profile' />
                    <Custombutton width={'48%'} value='Share Profile' />
                </div>
                <Storys storyview Name Profil_Url='https://picsum.photos/500/700' />
            </Container>
            <TabProfile />

        </>
    )
}

export default MyProfileLayout